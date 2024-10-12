# openapi_client.DataLakeStoreAccountsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_lake_store_accounts_add**](DataLakeStoreAccountsApi.md#data_lake_store_accounts_add) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts/{dataLakeStoreAccountName} | 
[**data_lake_store_accounts_delete**](DataLakeStoreAccountsApi.md#data_lake_store_accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts/{dataLakeStoreAccountName} | 
[**data_lake_store_accounts_get**](DataLakeStoreAccountsApi.md#data_lake_store_accounts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts/{dataLakeStoreAccountName} | 
[**data_lake_store_accounts_list_by_account**](DataLakeStoreAccountsApi.md#data_lake_store_accounts_list_by_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts | 


# **data_lake_store_accounts_add**
> data_lake_store_accounts_add(subscription_id, resource_group_name, account_name, data_lake_store_account_name, api_version, parameters=parameters)



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
    api_instance = openapi_client.DataLakeStoreAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    data_lake_store_account_name = 'data_lake_store_account_name_example' # str | The name of the Data Lake Store account to add.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.AddDataLakeStoreParameters() # AddDataLakeStoreParameters | The details of the Data Lake Store account. (optional)

    try:
        api_instance.data_lake_store_accounts_add(subscription_id, resource_group_name, account_name, data_lake_store_account_name, api_version, parameters=parameters)
    except Exception as e:
        print("Exception when calling DataLakeStoreAccountsApi->data_lake_store_accounts_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **data_lake_store_account_name** | **str**| The name of the Data Lake Store account to add. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**AddDataLakeStoreParameters**](AddDataLakeStoreParameters.md)| The details of the Data Lake Store account. | [optional] 

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
**200** | Successfully added the specified Azure Data Lake Store account information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_lake_store_accounts_delete**
> data_lake_store_accounts_delete(subscription_id, resource_group_name, account_name, data_lake_store_account_name, api_version)



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
    api_instance = openapi_client.DataLakeStoreAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    data_lake_store_account_name = 'data_lake_store_account_name_example' # str | The name of the Data Lake Store account to remove
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.data_lake_store_accounts_delete(subscription_id, resource_group_name, account_name, data_lake_store_account_name, api_version)
    except Exception as e:
        print("Exception when calling DataLakeStoreAccountsApi->data_lake_store_accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **data_lake_store_account_name** | **str**| The name of the Data Lake Store account to remove | 
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
**200** | Successfully removed the specified Azure Data Lake Store account information from the specified Azure Data Lake Analytics account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_lake_store_accounts_get**
> DataLakeStoreAccountInformation data_lake_store_accounts_get(subscription_id, resource_group_name, account_name, data_lake_store_account_name, api_version)



Gets the specified Data Lake Store account details in the specified Data Lake Analytics account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_store_account_information import DataLakeStoreAccountInformation
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
    api_instance = openapi_client.DataLakeStoreAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    data_lake_store_account_name = 'data_lake_store_account_name_example' # str | The name of the Data Lake Store account to retrieve
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.data_lake_store_accounts_get(subscription_id, resource_group_name, account_name, data_lake_store_account_name, api_version)
        print("The response of DataLakeStoreAccountsApi->data_lake_store_accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataLakeStoreAccountsApi->data_lake_store_accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **data_lake_store_account_name** | **str**| The name of the Data Lake Store account to retrieve | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DataLakeStoreAccountInformation**](DataLakeStoreAccountInformation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified Azure Data Lake Store account information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_lake_store_accounts_list_by_account**
> DataLakeStoreAccountInformationListResult data_lake_store_accounts_list_by_account(subscription_id, resource_group_name, account_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)



Gets the first page of Data Lake Store accounts linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_lake_store_account_information_list_result import DataLakeStoreAccountInformationListResult
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
    api_instance = openapi_client.DataLakeStoreAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | OData filter. Optional. (optional)
    top = 56 # int | The number of items to return. Optional. (optional)
    skip = 56 # int | The number of items to skip over before returning elements. Optional. (optional)
    select = 'select_example' # str | OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. (optional)
    orderby = 'orderby_example' # str | OrderBy clause. One or more comma-separated expressions with an optional \"asc\" (the default) or \"desc\" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. (optional)
    count = True # bool | The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional. (optional)

    try:
        api_response = api_instance.data_lake_store_accounts_list_by_account(subscription_id, resource_group_name, account_name, api_version, filter=filter, top=top, skip=skip, select=select, orderby=orderby, count=count)
        print("The response of DataLakeStoreAccountsApi->data_lake_store_accounts_list_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataLakeStoreAccountsApi->data_lake_store_accounts_list_by_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| OData filter. Optional. | [optional] 
 **top** | **int**| The number of items to return. Optional. | [optional] 
 **skip** | **int**| The number of items to skip over before returning elements. Optional. | [optional] 
 **select** | **str**| OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select&#x3D;CategoryName,Description. Optional. | [optional] 
 **orderby** | **str**| OrderBy clause. One or more comma-separated expressions with an optional \&quot;asc\&quot; (the default) or \&quot;desc\&quot; depending on the order you&#39;d like the values sorted, e.g. Categories?$orderby&#x3D;CategoryName desc. Optional. | [optional] 
 **count** | **bool**| The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count&#x3D;true. Optional. | [optional] 

### Return type

[**DataLakeStoreAccountInformationListResult**](DataLakeStoreAccountInformationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of Data Lake Store accounts. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

