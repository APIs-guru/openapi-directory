# openapi_client.RestorableDroppedDatabasesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restorable_dropped_databases_get**](RestorableDroppedDatabasesApi.md#restorable_dropped_databases_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/restorableDroppedDatabases/{restorableDroppededDatabaseId} | 
[**restorable_dropped_databases_list_by_server**](RestorableDroppedDatabasesApi.md#restorable_dropped_databases_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/restorableDroppedDatabases | 


# **restorable_dropped_databases_get**
> RestorableDroppedDatabase restorable_dropped_databases_get(api_version, subscription_id, resource_group_name, server_name, restorable_droppeded_database_id)



Gets a deleted database that can be restored

### Example


```python
import openapi_client
from openapi_client.models.restorable_dropped_database import RestorableDroppedDatabase
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
    api_instance = openapi_client.RestorableDroppedDatabasesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    restorable_droppeded_database_id = 'restorable_droppeded_database_id_example' # str | The id of the deleted database in the form of databaseName,deletionTimeInFileTimeFormat

    try:
        api_response = api_instance.restorable_dropped_databases_get(api_version, subscription_id, resource_group_name, server_name, restorable_droppeded_database_id)
        print("The response of RestorableDroppedDatabasesApi->restorable_dropped_databases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RestorableDroppedDatabasesApi->restorable_dropped_databases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **restorable_droppeded_database_id** | **str**| The id of the deleted database in the form of databaseName,deletionTimeInFileTimeFormat | 

### Return type

[**RestorableDroppedDatabase**](RestorableDroppedDatabase.md)

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

# **restorable_dropped_databases_list_by_server**
> RestorableDroppedDatabaseListResult restorable_dropped_databases_list_by_server(api_version, subscription_id, resource_group_name, server_name)



Gets a list of deleted databases that can be restored

### Example


```python
import openapi_client
from openapi_client.models.restorable_dropped_database_list_result import RestorableDroppedDatabaseListResult
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
    api_instance = openapi_client.RestorableDroppedDatabasesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.

    try:
        api_response = api_instance.restorable_dropped_databases_list_by_server(api_version, subscription_id, resource_group_name, server_name)
        print("The response of RestorableDroppedDatabasesApi->restorable_dropped_databases_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RestorableDroppedDatabasesApi->restorable_dropped_databases_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 

### Return type

[**RestorableDroppedDatabaseListResult**](RestorableDroppedDatabaseListResult.md)

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

