# openapi_client.DatabaseAutomaticTuningApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**database_automatic_tuning_get**](DatabaseAutomaticTuningApi.md#database_automatic_tuning_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/automaticTuning/current | 
[**database_automatic_tuning_update**](DatabaseAutomaticTuningApi.md#database_automatic_tuning_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/automaticTuning/current | 


# **database_automatic_tuning_get**
> DatabaseAutomaticTuning database_automatic_tuning_get(resource_group_name, server_name, database_name, subscription_id, api_version)



Gets a database's automatic tuning.

### Example


```python
import openapi_client
from openapi_client.models.database_automatic_tuning import DatabaseAutomaticTuning
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
    api_instance = openapi_client.DatabaseAutomaticTuningApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.database_automatic_tuning_get(resource_group_name, server_name, database_name, subscription_id, api_version)
        print("The response of DatabaseAutomaticTuningApi->database_automatic_tuning_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabaseAutomaticTuningApi->database_automatic_tuning_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**DatabaseAutomaticTuning**](DatabaseAutomaticTuning.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved database automatic tuning properties. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - The requested database was not found   * 404 SubscriptionDoesNotHaveElasticPool - The requested elastic pool was not found   * 404 OperationIdNotFound - The operation with Id does not exist.   * 405 NotSupported - This functionality is not supported.   * 409 Conflict - Request could not be processed because of conflict in the request.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_automatic_tuning_update**
> DatabaseAutomaticTuning database_automatic_tuning_update(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)



Update automatic tuning properties for target database.

### Example


```python
import openapi_client
from openapi_client.models.database_automatic_tuning import DatabaseAutomaticTuning
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
    api_instance = openapi_client.DatabaseAutomaticTuningApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.DatabaseAutomaticTuning() # DatabaseAutomaticTuning | The requested automatic tuning resource state.

    try:
        api_response = api_instance.database_automatic_tuning_update(resource_group_name, server_name, database_name, subscription_id, api_version, parameters)
        print("The response of DatabaseAutomaticTuningApi->database_automatic_tuning_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatabaseAutomaticTuningApi->database_automatic_tuning_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**DatabaseAutomaticTuning**](DatabaseAutomaticTuning.md)| The requested automatic tuning resource state. | 

### Return type

[**DatabaseAutomaticTuning**](DatabaseAutomaticTuning.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the specified database automatic tuning settings. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 InvalidAutomaticTuningUpsertRequest - The update automatic tuning request body does not exist or has no properties object.   * 400 InvalidAdvisorAutoExecuteStatus - Specified auto-execute status for the advisor is not allowed.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - The requested database was not found   * 404 SubscriptionDoesNotHaveElasticPool - The requested elastic pool was not found   * 404 OperationIdNotFound - The operation with Id does not exist.   * 405 NotSupported - This functionality is not supported.   * 409 Conflict - Request could not be processed because of conflict in the request.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 ServiceTemporarilyUnavailable - Feature temporarily unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

