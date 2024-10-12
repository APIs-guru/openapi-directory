# openapi_client.StorageAccountsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_accounts_add**](StorageAccountsApi.md#storage_accounts_add) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName} | 
[**storage_accounts_delete**](StorageAccountsApi.md#storage_accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName} | 
[**storage_accounts_get**](StorageAccountsApi.md#storage_accounts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName} | 
[**storage_accounts_get_storage_container**](StorageAccountsApi.md#storage_accounts_get_storage_container) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}/containers/{containerName} | 
[**storage_accounts_list_by_account**](StorageAccountsApi.md#storage_accounts_list_by_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts | 
[**storage_accounts_list_sas_tokens**](StorageAccountsApi.md#storage_accounts_list_sas_tokens) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}/containers/{containerName}/listSasTokens | 
[**storage_accounts_list_storage_containers**](StorageAccountsApi.md#storage_accounts_list_storage_containers) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}/containers | 
[**storage_accounts_update**](StorageAccountsApi.md#storage_accounts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName} | 


# **storage_accounts_add**
> storage_accounts_add(subscription_id, resource_group_name, account_name, storage_account_name, api_version, parameters)



Updates the specified Data Lake Analytics account to add an Azure Storage account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.add_storage_account_parameters import AddStorageAccountParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    storage_account_name = 'storage_account_name_example' # str | The name of the Azure Storage account to add
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.AddStorageAccountParameters() # AddStorageAccountParameters | The parameters containing the access key and optional suffix for the Azure Storage Account.

    try:
        api_instance.storage_accounts_add(subscription_id, resource_group_name, account_name, storage_account_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **storage_account_name** | **str**| The name of the Azure Storage account to add | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**AddStorageAccountParameters**](AddStorageAccountParameters.md)| The parameters containing the access key and optional suffix for the Azure Storage Account. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully added the specified Azure Storage account information to the specified Azure Data Lake Analytics account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_delete**
> storage_accounts_delete(subscription_id, resource_group_name, account_name, storage_account_name, api_version)



Updates the specified Data Lake Analytics account to remove an Azure Storage account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    storage_account_name = 'storage_account_name_example' # str | The name of the Azure Storage account to remove
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.storage_accounts_delete(subscription_id, resource_group_name, account_name, storage_account_name, api_version)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **storage_account_name** | **str**| The name of the Azure Storage account to remove | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the specified Azure Storage account information from the Azure Data Lake Analytics account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_get**
> StorageAccountInformation storage_accounts_get(subscription_id, resource_group_name, account_name, storage_account_name, api_version)



Gets the specified Azure Storage account linked to the given Data Lake Analytics account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_account_information import StorageAccountInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    storage_account_name = 'storage_account_name_example' # str | The name of the Azure Storage account for which to retrieve the details.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.storage_accounts_get(subscription_id, resource_group_name, account_name, storage_account_name, api_version)
        print("The response of StorageAccountsApi->storage_accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **storage_account_name** | **str**| The name of the Azure Storage account for which to retrieve the details. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**StorageAccountInformation**](StorageAccountInformation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified Azure Storage account information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_get_storage_container**
> StorageContainer storage_accounts_get_storage_container(subscription_id, resource_group_name, account_name, storage_account_name, container_name, api_version)



Gets the specified Azure Storage container associated with the given Data Lake Analytics and Azure Storage accounts.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_container import StorageContainer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    storage_account_name = 'storage_account_name_example' # str | The name of the Azure storage account from which to retrieve the blob container.
    container_name = 'container_name_example' # str | The name of the Azure storage container to retrieve
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.storage_accounts_get_storage_container(subscription_id, resource_group_name, account_name, storage_account_name, container_name, api_version)
        print("The response of StorageAccountsApi->storage_accounts_get_storage_container:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_get_storage_container: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **storage_account_name** | **str**| The name of the Azure storage account from which to retrieve the blob container. | 
 **container_name** | **str**| The name of the Azure storage container to retrieve | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**StorageContainer**](StorageContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified Azure Storage container information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_list_by_account**
> StorageAccountInformationListResult storage_accounts_list_by_account(subscription_id, resource_group_name, account_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Gets the first page of Azure Storage accounts, if any, linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_account_information_list_result import StorageAccountInformationListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.storage_accounts_list_by_account(subscription_id, resource_group_name, account_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of StorageAccountsApi->storage_accounts_list_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_list_by_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**StorageAccountInformationListResult**](StorageAccountInformationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of Azure Storage accounts. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_list_sas_tokens**
> SasTokenInformationListResult storage_accounts_list_sas_tokens(subscription_id, resource_group_name, account_name, storage_account_name, container_name, api_version)



Gets the SAS token associated with the specified Data Lake Analytics and Azure Storage account and container combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sas_token_information_list_result import SasTokenInformationListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    storage_account_name = 'storage_account_name_example' # str | The name of the Azure storage account for which the SAS token is being requested.
    container_name = 'container_name_example' # str | The name of the Azure storage container for which the SAS token is being requested.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.storage_accounts_list_sas_tokens(subscription_id, resource_group_name, account_name, storage_account_name, container_name, api_version)
        print("The response of StorageAccountsApi->storage_accounts_list_sas_tokens:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_list_sas_tokens: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **storage_account_name** | **str**| The name of the Azure storage account for which the SAS token is being requested. | 
 **container_name** | **str**| The name of the Azure storage container for which the SAS token is being requested. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**SasTokenInformationListResult**](SasTokenInformationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of Storage Account SAS tokens for the specified Azure Storage account container. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_list_storage_containers**
> StorageContainerListResult storage_accounts_list_storage_containers(subscription_id, resource_group_name, account_name, storage_account_name, api_version)



Lists the Azure Storage containers, if any, associated with the specified Data Lake Analytics and Azure Storage account combination. The response includes a link to the next page of results, if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_container_list_result import StorageContainerListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    storage_account_name = 'storage_account_name_example' # str | The name of the Azure storage account from which to list blob containers.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.storage_accounts_list_storage_containers(subscription_id, resource_group_name, account_name, storage_account_name, api_version)
        print("The response of StorageAccountsApi->storage_accounts_list_storage_containers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_list_storage_containers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **storage_account_name** | **str**| The name of the Azure storage account from which to list blob containers. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**StorageContainerListResult**](StorageContainerListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of Azure Storage containers under the specified Azure Data Lake Analytics account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_update**
> storage_accounts_update(subscription_id, resource_group_name, account_name, storage_account_name, api_version, parameters=parameters)



Updates the Data Lake Analytics account to replace Azure Storage blob account details, such as the access key and/or suffix.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.update_storage_account_parameters import UpdateStorageAccountParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    storage_account_name = 'storage_account_name_example' # str | The Azure Storage account to modify
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.UpdateStorageAccountParameters() # UpdateStorageAccountParameters | The parameters containing the access key and suffix to update the storage account with, if any. Passing nothing results in no change. (optional)

    try:
        api_instance.storage_accounts_update(subscription_id, resource_group_name, account_name, storage_account_name, api_version, parameters=parameters)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **storage_account_name** | **str**| The Azure Storage account to modify | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**UpdateStorageAccountParameters**](UpdateStorageAccountParameters.md)| The parameters containing the access key and suffix to update the storage account with, if any. Passing nothing results in no change. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully update the specified Azure Storage account information for the specified Azure Data Lake Analytics account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

