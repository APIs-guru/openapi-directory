# openapi_client.AccountApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**account_add_data_lake_store_account**](AccountApi.md#account_add_data_lake_store_account) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/DataLakeStoreAccounts/{dataLakeStoreAccountName} | 
[**account_add_storage_account**](AccountApi.md#account_add_storage_account) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/StorageAccounts/{storageAccountName} | 
[**account_create**](AccountApi.md#account_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{name} | 
[**account_delete**](AccountApi.md#account_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName} | 
[**account_delete_data_lake_store_account**](AccountApi.md#account_delete_data_lake_store_account) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/DataLakeStoreAccounts/{dataLakeStoreAccountName} | 
[**account_delete_storage_account**](AccountApi.md#account_delete_storage_account) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/StorageAccounts/{storageAccountName} | 
[**account_get**](AccountApi.md#account_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName} | 
[**account_get_data_lake_store_account**](AccountApi.md#account_get_data_lake_store_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/DataLakeStoreAccounts/{dataLakeStoreAccountName} | 
[**account_get_storage_account**](AccountApi.md#account_get_storage_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/StorageAccounts/{storageAccountName} | 
[**account_get_storage_container**](AccountApi.md#account_get_storage_container) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/StorageAccounts/{storageAccountName}/Containers/{containerName} | 
[**account_list**](AccountApi.md#account_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataLakeAnalytics/accounts | 
[**account_list_by_resource_group**](AccountApi.md#account_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts | 
[**account_list_data_lake_store_accounts**](AccountApi.md#account_list_data_lake_store_accounts) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/DataLakeStoreAccounts/ | 
[**account_list_sas_tokens**](AccountApi.md#account_list_sas_tokens) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/StorageAccounts/{storageAccountName}/Containers/{containerName}/listSasTokens | 
[**account_list_storage_accounts**](AccountApi.md#account_list_storage_accounts) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/StorageAccounts/ | 
[**account_list_storage_containers**](AccountApi.md#account_list_storage_containers) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/StorageAccounts/{storageAccountName}/Containers | 
[**account_update**](AccountApi.md#account_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{name} | 
[**account_update_storage_account**](AccountApi.md#account_update_storage_account) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/StorageAccounts/{storageAccountName} | 


# **account_add_data_lake_store_account**
> account_add_data_lake_store_account(resource_group_name, account_name, data_lake_store_account_name, api_version, subscription_id, parameters)



Updates the specified Data Lake Analytics account to include the additional Data Lake Store account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.add_data_lake_store_parameters import AddDataLakeStoreParameters
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account to which to add the Data Lake Store account.
    data_lake_store_account_name = 'data_lake_store_account_name_example' # str | The name of the Data Lake Store account to add.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.AddDataLakeStoreParameters() # AddDataLakeStoreParameters | The details of the Data Lake Store account.

    try:
        api_instance.account_add_data_lake_store_account(resource_group_name, account_name, data_lake_store_account_name, api_version, subscription_id, parameters)
    except Exception as e:
        print("Exception when calling AccountApi->account_add_data_lake_store_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account to which to add the Data Lake Store account. | 
 **data_lake_store_account_name** | **str**| The name of the Data Lake Store account to add. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**AddDataLakeStoreParameters**](AddDataLakeStoreParameters.md)| The details of the Data Lake Store account. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/octet-stream
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_add_storage_account**
> account_add_storage_account(resource_group_name, account_name, storage_account_name, api_version, subscription_id, parameters)



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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account to which to add the Azure Storage account.
    storage_account_name = 'storage_account_name_example' # str | The name of the Azure Storage account to add
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.AddStorageAccountParameters() # AddStorageAccountParameters | The parameters containing the access key and optional suffix for the Azure Storage Account.

    try:
        api_instance.account_add_storage_account(resource_group_name, account_name, storage_account_name, api_version, subscription_id, parameters)
    except Exception as e:
        print("Exception when calling AccountApi->account_add_storage_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account to which to add the Azure Storage account. | 
 **storage_account_name** | **str**| The name of the Azure Storage account to add | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**AddStorageAccountParameters**](AddStorageAccountParameters.md)| The parameters containing the access key and optional suffix for the Azure Storage Account. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/octet-stream
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_create**
> DataLakeAnalyticsAccount account_create(resource_group_name, name, api_version, subscription_id, parameters)



Creates the specified Data Lake Analytics account. This supplies the user with computation services for Data Lake Analytics workloads

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_analytics_account import DataLakeAnalyticsAccount
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.the account will be associated with.
    name = 'name_example' # str | The name of the Data Lake Analytics account to create.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DataLakeAnalyticsAccount() # DataLakeAnalyticsAccount | Parameters supplied to the create Data Lake Analytics account operation.

    try:
        api_response = api_instance.account_create(resource_group_name, name, api_version, subscription_id, parameters)
        print("The response of AccountApi->account_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account.the account will be associated with. | 
 **name** | **str**| The name of the Data Lake Analytics account to create. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DataLakeAnalyticsAccount**](DataLakeAnalyticsAccount.md)| Parameters supplied to the create Data Lake Analytics account operation. | 

### Return type

[**DataLakeAnalyticsAccount**](DataLakeAnalyticsAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/octet-stream
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_delete**
> account_delete(resource_group_name, account_name, api_version, subscription_id)



Begins the delete process for the Data Lake Analytics account object specified by the account name.

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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account to delete
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.account_delete(resource_group_name, account_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling AccountApi->account_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account to delete | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |
**202** |  |  -  |
**204** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_delete_data_lake_store_account**
> account_delete_data_lake_store_account(resource_group_name, account_name, data_lake_store_account_name, api_version, subscription_id)



Updates the Data Lake Analytics account specified to remove the specified Data Lake Store account.

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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account from which to remove the Data Lake Store account.
    data_lake_store_account_name = 'data_lake_store_account_name_example' # str | The name of the Data Lake Store account to remove
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.account_delete_data_lake_store_account(resource_group_name, account_name, data_lake_store_account_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling AccountApi->account_delete_data_lake_store_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account from which to remove the Data Lake Store account. | 
 **data_lake_store_account_name** | **str**| The name of the Data Lake Store account to remove | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_delete_storage_account**
> account_delete_storage_account(resource_group_name, account_name, storage_account_name, api_version, subscription_id)



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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account from which to remove the Azure Storage account.
    storage_account_name = 'storage_account_name_example' # str | The name of the Azure Storage account to remove
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.account_delete_storage_account(resource_group_name, account_name, storage_account_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling AccountApi->account_delete_storage_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account from which to remove the Azure Storage account. | 
 **storage_account_name** | **str**| The name of the Azure Storage account to remove | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_get**
> DataLakeAnalyticsAccount account_get(resource_group_name, account_name, api_version, subscription_id)



Gets details of the specified Data Lake Analytics account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_analytics_account import DataLakeAnalyticsAccount
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account to retrieve.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.account_get(resource_group_name, account_name, api_version, subscription_id)
        print("The response of AccountApi->account_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account to retrieve. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DataLakeAnalyticsAccount**](DataLakeAnalyticsAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_get_data_lake_store_account**
> DataLakeStoreAccountInfo account_get_data_lake_store_account(resource_group_name, account_name, data_lake_store_account_name, api_version, subscription_id)



Gets the specified Data Lake Store account details in the specified Data Lake Analytics account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_store_account_info import DataLakeStoreAccountInfo
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account from which to retrieve the Data Lake Store account details.
    data_lake_store_account_name = 'data_lake_store_account_name_example' # str | The name of the Data Lake Store account to retrieve
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.account_get_data_lake_store_account(resource_group_name, account_name, data_lake_store_account_name, api_version, subscription_id)
        print("The response of AccountApi->account_get_data_lake_store_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_get_data_lake_store_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account from which to retrieve the Data Lake Store account details. | 
 **data_lake_store_account_name** | **str**| The name of the Data Lake Store account to retrieve | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DataLakeStoreAccountInfo**](DataLakeStoreAccountInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_get_storage_account**
> StorageAccountInfo account_get_storage_account(resource_group_name, account_name, storage_account_name, api_version, subscription_id)



Gets the specified Azure Storage account linked to the given Data Lake Analytics account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_account_info import StorageAccountInfo
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account from which to retrieve Azure storage account details.
    storage_account_name = 'storage_account_name_example' # str | The name of the Azure Storage account for which to retrieve the details.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.account_get_storage_account(resource_group_name, account_name, storage_account_name, api_version, subscription_id)
        print("The response of AccountApi->account_get_storage_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_get_storage_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account from which to retrieve Azure storage account details. | 
 **storage_account_name** | **str**| The name of the Azure Storage account for which to retrieve the details. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**StorageAccountInfo**](StorageAccountInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_get_storage_container**
> BlobContainer account_get_storage_container(resource_group_name, account_name, storage_account_name, container_name, api_version, subscription_id)



Gets the specified Azure Storage container associated with the given Data Lake Analytics and Azure Storage accounts.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.blob_container import BlobContainer
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account for which to retrieve blob container.
    storage_account_name = 'storage_account_name_example' # str | The name of the Azure storage account from which to retrieve the blob container.
    container_name = 'container_name_example' # str | The name of the Azure storage container to retrieve
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.account_get_storage_container(resource_group_name, account_name, storage_account_name, container_name, api_version, subscription_id)
        print("The response of AccountApi->account_get_storage_container:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_get_storage_container: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account for which to retrieve blob container. | 
 **storage_account_name** | **str**| The name of the Azure storage account from which to retrieve the blob container. | 
 **container_name** | **str**| The name of the Azure storage container to retrieve | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**BlobContainer**](BlobContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_list**
> DataLakeAnalyticsAccountListResult account_list(api_version, subscription_id, filter=filter, top=top, skip=skip, expand=expand, select=select, orderby=orderby, count=count, search=search, format=format)



Gets the first page of Data Lake Analytics accounts, if any, within the current subscription. This includes a link to the next page, if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_analytics_account_list_result import DataLakeAnalyticsAccountListResult
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
    api_instance = openapi_client.AccountApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    expand = 'expand_example' # str | OData expansion. Expand related resources in line with the retrieved resources, e.g. Categories/$expand=Products would expand Product data in line with each Category entry. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)
    search = 'search_example' # str | A free form search. A free-text search expression to match for whether a particular entry should be included in the feed, e.g. Categories?$search=blue OR green. Optional. (optional)
    format = 'format_example' # str | The desired return format. Return the response in particular format without access to request headers for standard content-type negotiation (e.g Orders?$format=json). Optional. (optional)

    try:
        api_response = api_instance.account_list(api_version, subscription_id, filter=filter, top=top, skip=skip, expand=expand, select=select, orderby=orderby, count=count, search=search, format=format)
        print("The response of AccountApi->account_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **expand** | **str**| OData expansion. Expand related resources in line with the retrieved resources, e.g. Categories/$expand&#x3D;Products would expand Product data in line with each Category entry. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 
 **search** | **str**| A free form search. A free-text search expression to match for whether a particular entry should be included in the feed, e.g. Categories?$search&#x3D;blue OR green. Optional. | [optional] 
 **format** | **str**| The desired return format. Return the response in particular format without access to request headers for standard content-type negotiation (e.g Orders?$format&#x3D;json). Optional. | [optional] 

### Return type

[**DataLakeAnalyticsAccountListResult**](DataLakeAnalyticsAccountListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_list_by_resource_group**
> DataLakeAnalyticsAccountListResult account_list_by_resource_group(resource_group_name, api_version, subscription_id, filter=filter, top=top, skip=skip, expand=expand, select=select, orderby=orderby, count=count, search=search, format=format)



Gets the first page of Data Lake Analytics accounts, if any, within a specific resource group. This includes a link to the next page, if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_analytics_account_list_result import DataLakeAnalyticsAccountListResult
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    expand = 'expand_example' # str | OData expansion. Expand related resources in line with the retrieved resources, e.g. Categories/$expand=Products would expand Product data in line with each Category entry. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)
    search = 'search_example' # str | A free form search. A free-text search expression to match for whether a particular entry should be included in the feed, e.g. Categories?$search=blue OR green. Optional. (optional)
    format = 'format_example' # str | The return format. Return the response in particular format without access to request headers for standard content-type negotiation (e.g Orders?$format=json). Optional. (optional)

    try:
        api_response = api_instance.account_list_by_resource_group(resource_group_name, api_version, subscription_id, filter=filter, top=top, skip=skip, expand=expand, select=select, orderby=orderby, count=count, search=search, format=format)
        print("The response of AccountApi->account_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **expand** | **str**| OData expansion. Expand related resources in line with the retrieved resources, e.g. Categories/$expand&#x3D;Products would expand Product data in line with each Category entry. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 
 **search** | **str**| A free form search. A free-text search expression to match for whether a particular entry should be included in the feed, e.g. Categories?$search&#x3D;blue OR green. Optional. | [optional] 
 **format** | **str**| The return format. Return the response in particular format without access to request headers for standard content-type negotiation (e.g Orders?$format&#x3D;json). Optional. | [optional] 

### Return type

[**DataLakeAnalyticsAccountListResult**](DataLakeAnalyticsAccountListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_list_data_lake_store_accounts**
> DataLakeAnalyticsAccountListDataLakeStoreResult account_list_data_lake_store_accounts(resource_group_name, account_name, api_version, subscription_id, filter=filter, top=top, skip=skip, expand=expand, select=select, orderby=orderby, count=count, search=search, format=format)



Gets the first page of Data Lake Store accounts linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_analytics_account_list_data_lake_store_result import DataLakeAnalyticsAccountListDataLakeStoreResult
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account for which to list Data Lake Store accounts.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    expand = 'expand_example' # str | OData expansion. Expand related resources in line with the retrieved resources, e.g. Categories/$expand=Products would expand Product data in line with each Category entry. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)
    search = 'search_example' # str | A free form search. A free-text search expression to match for whether a particular entry should be included in the feed, e.g. Categories?$search=blue OR green. Optional. (optional)
    format = 'format_example' # str | The desired return format. Return the response in particular format without access to request headers for standard content-type negotiation (e.g Orders?$format=json). Optional. (optional)

    try:
        api_response = api_instance.account_list_data_lake_store_accounts(resource_group_name, account_name, api_version, subscription_id, filter=filter, top=top, skip=skip, expand=expand, select=select, orderby=orderby, count=count, search=search, format=format)
        print("The response of AccountApi->account_list_data_lake_store_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_list_data_lake_store_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account for which to list Data Lake Store accounts. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **expand** | **str**| OData expansion. Expand related resources in line with the retrieved resources, e.g. Categories/$expand&#x3D;Products would expand Product data in line with each Category entry. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 
 **search** | **str**| A free form search. A free-text search expression to match for whether a particular entry should be included in the feed, e.g. Categories?$search&#x3D;blue OR green. Optional. | [optional] 
 **format** | **str**| The desired return format. Return the response in particular format without access to request headers for standard content-type negotiation (e.g Orders?$format&#x3D;json). Optional. | [optional] 

### Return type

[**DataLakeAnalyticsAccountListDataLakeStoreResult**](DataLakeAnalyticsAccountListDataLakeStoreResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_list_sas_tokens**
> ListSasTokensResult account_list_sas_tokens(resource_group_name, account_name, storage_account_name, container_name, api_version, subscription_id)



Gets the SAS token associated with the specified Data Lake Analytics and Azure Storage account and container combination.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_sas_tokens_result import ListSasTokensResult
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account from which an Azure Storage account's SAS token is being requested.
    storage_account_name = 'storage_account_name_example' # str | The name of the Azure storage account for which the SAS token is being requested.
    container_name = 'container_name_example' # str | The name of the Azure storage container for which the SAS token is being requested.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.account_list_sas_tokens(resource_group_name, account_name, storage_account_name, container_name, api_version, subscription_id)
        print("The response of AccountApi->account_list_sas_tokens:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_list_sas_tokens: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account from which an Azure Storage account&#39;s SAS token is being requested. | 
 **storage_account_name** | **str**| The name of the Azure storage account for which the SAS token is being requested. | 
 **container_name** | **str**| The name of the Azure storage container for which the SAS token is being requested. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ListSasTokensResult**](ListSasTokensResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_list_storage_accounts**
> DataLakeAnalyticsAccountListStorageAccountsResult account_list_storage_accounts(resource_group_name, account_name, api_version, subscription_id, filter=filter, top=top, skip=skip, expand=expand, select=select, orderby=orderby, count=count, search=search, format=format)



Gets the first page of Azure Storage accounts, if any, linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_analytics_account_list_storage_accounts_result import DataLakeAnalyticsAccountListStorageAccountsResult
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account for which to list Azure Storage accounts.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | The OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    expand = 'expand_example' # str | OData expansion. Expand related resources in line with the retrieved resources, e.g. Categories/$expand=Products would expand Product data in line with each Category entry. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)
    search = 'search_example' # str | A free form search. A free-text search expression to match for whether a particular entry should be included in the feed, e.g. Categories?$search=blue OR green. Optional. (optional)
    format = 'format_example' # str | The desired return format. Return the response in particular format without access to request headers for standard content-type negotiation (e.g Orders?$format=json). Optional. (optional)

    try:
        api_response = api_instance.account_list_storage_accounts(resource_group_name, account_name, api_version, subscription_id, filter=filter, top=top, skip=skip, expand=expand, select=select, orderby=orderby, count=count, search=search, format=format)
        print("The response of AccountApi->account_list_storage_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_list_storage_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account for which to list Azure Storage accounts. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| The OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **expand** | **str**| OData expansion. Expand related resources in line with the retrieved resources, e.g. Categories/$expand&#x3D;Products would expand Product data in line with each Category entry. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 
 **search** | **str**| A free form search. A free-text search expression to match for whether a particular entry should be included in the feed, e.g. Categories?$search&#x3D;blue OR green. Optional. | [optional] 
 **format** | **str**| The desired return format. Return the response in particular format without access to request headers for standard content-type negotiation (e.g Orders?$format&#x3D;json). Optional. | [optional] 

### Return type

[**DataLakeAnalyticsAccountListStorageAccountsResult**](DataLakeAnalyticsAccountListStorageAccountsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_list_storage_containers**
> ListBlobContainersResult account_list_storage_containers(resource_group_name, account_name, storage_account_name, api_version, subscription_id)



Lists the Azure Storage containers, if any, associated with the specified Data Lake Analytics and Azure Storage account combination. The response includes a link to the next page of results, if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_blob_containers_result import ListBlobContainersResult
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account for which to list Azure Storage blob containers.
    storage_account_name = 'storage_account_name_example' # str | The name of the Azure storage account from which to list blob containers.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.account_list_storage_containers(resource_group_name, account_name, storage_account_name, api_version, subscription_id)
        print("The response of AccountApi->account_list_storage_containers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_list_storage_containers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account for which to list Azure Storage blob containers. | 
 **storage_account_name** | **str**| The name of the Azure storage account from which to list blob containers. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ListBlobContainersResult**](ListBlobContainersResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_update**
> DataLakeAnalyticsAccount account_update(resource_group_name, name, api_version, subscription_id, parameters)



Updates the Data Lake Analytics account object specified by the accountName with the contents of the account object.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_analytics_account import DataLakeAnalyticsAccount
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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    name = 'name_example' # str | The name of the Data Lake Analytics account to update.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DataLakeAnalyticsAccount() # DataLakeAnalyticsAccount | Parameters supplied to the update Data Lake Analytics account operation.

    try:
        api_response = api_instance.account_update(resource_group_name, name, api_version, subscription_id, parameters)
        print("The response of AccountApi->account_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->account_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **name** | **str**| The name of the Data Lake Analytics account to update. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DataLakeAnalyticsAccount**](DataLakeAnalyticsAccount.md)| Parameters supplied to the update Data Lake Analytics account operation. | 

### Return type

[**DataLakeAnalyticsAccount**](DataLakeAnalyticsAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/octet-stream
 - **Accept**: application/json, text/json, application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_update_storage_account**
> account_update_storage_account(resource_group_name, account_name, storage_account_name, api_version, subscription_id, parameters)



Updates the Data Lake Analytics account to replace Azure Storage blob account details, such as the access key and/or suffix.

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
    api_instance = openapi_client.AccountApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group that contains the Data Lake Analytics account.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account to modify storage accounts in
    storage_account_name = 'storage_account_name_example' # str | The Azure Storage account to modify
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.AddStorageAccountParameters() # AddStorageAccountParameters | The parameters containing the access key and suffix to update the storage account with.

    try:
        api_instance.account_update_storage_account(resource_group_name, account_name, storage_account_name, api_version, subscription_id, parameters)
    except Exception as e:
        print("Exception when calling AccountApi->account_update_storage_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure resource group that contains the Data Lake Analytics account. | 
 **account_name** | **str**| The name of the Data Lake Analytics account to modify storage accounts in | 
 **storage_account_name** | **str**| The Azure Storage account to modify | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**AddStorageAccountParameters**](AddStorageAccountParameters.md)| The parameters containing the access key and suffix to update the storage account with. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/octet-stream
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

