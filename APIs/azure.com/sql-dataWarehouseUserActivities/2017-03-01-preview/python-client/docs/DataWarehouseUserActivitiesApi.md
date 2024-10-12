# openapi_client.DataWarehouseUserActivitiesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_warehouse_user_activities_get**](DataWarehouseUserActivitiesApi.md#data_warehouse_user_activities_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataWarehouseUserActivities/{dataWarehouseUserActivityName} | 


# **data_warehouse_user_activities_get**
> DataWarehouseUserActivities data_warehouse_user_activities_get(resource_group_name, server_name, database_name, data_warehouse_user_activity_name, subscription_id, api_version)



Gets the user activities of a data warehouse which includes running and suspended queries

### Example


```python
import openapi_client
from openapi_client.models.data_warehouse_user_activities import DataWarehouseUserActivities
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
    api_instance = openapi_client.DataWarehouseUserActivitiesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    data_warehouse_user_activity_name = 'data_warehouse_user_activity_name_example' # str | The activity name of the data warehouse. 
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.data_warehouse_user_activities_get(resource_group_name, server_name, database_name, data_warehouse_user_activity_name, subscription_id, api_version)
        print("The response of DataWarehouseUserActivitiesApi->data_warehouse_user_activities_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataWarehouseUserActivitiesApi->data_warehouse_user_activities_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **data_warehouse_user_activity_name** | **str**| The activity name of the data warehouse.  | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**DataWarehouseUserActivities**](DataWarehouseUserActivities.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully get the data warehouse user activities. |  -  |
**0** | *** Error Responses: ***   * 400 UpdateNotAllowedOnPausedDatabase - User attempted to perform an update on a paused database.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 404 ResourceNotFound - The specified resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

