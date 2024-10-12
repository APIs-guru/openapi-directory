# openapi_client.ImportExportApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extensions_get**](ImportExportApi.md#extensions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extensions/{extensionName} | 
[**extensions_list_by_database**](ImportExportApi.md#extensions_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extensions | 


# **extensions_get**
> extensions_get(api_version, subscription_id, resource_group_name, server_name, database_name, extension_name)



Gets a database extension. This API is deprecated and should not be used.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImportExportApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database to import into
    extension_name = 'extension_name_example' # str | The name of the extension to get

    try:
        api_instance.extensions_get(api_version, subscription_id, resource_group_name, server_name, database_name, extension_name)
    except Exception as e:
        print("Exception when calling ImportExportApi->extensions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database to import into | 
 **extension_name** | **str**| The name of the extension to get | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **extensions_list_by_database**
> ExtensionListResult extensions_list_by_database(api_version, subscription_id, resource_group_name, server_name, database_name)



Gets database extensions. This API is deprecated and should not be used.

### Example


```python
import openapi_client
from openapi_client.models.extension_list_result import ExtensionListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImportExportApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database to import into

    try:
        api_response = api_instance.extensions_list_by_database(api_version, subscription_id, resource_group_name, server_name, database_name)
        print("The response of ImportExportApi->extensions_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportExportApi->extensions_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database to import into | 

### Return type

[**ExtensionListResult**](ExtensionListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

