# openapi_client.ElasticPoolsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**elastic_pool_operations_cancel**](ElasticPoolsApi.md#elastic_pool_operations_cancel) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/operations/{operationId}/cancel | 
[**elastic_pool_operations_list_by_elastic_pool**](ElasticPoolsApi.md#elastic_pool_operations_list_by_elastic_pool) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/operations | 


# **elastic_pool_operations_cancel**
> elastic_pool_operations_cancel(resource_group_name, server_name, elastic_pool_name, operation_id, subscription_id, api_version)



Cancels the asynchronous operation on the elastic pool.

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
    api_instance = openapi_client.ElasticPoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    elastic_pool_name = 'elastic_pool_name_example' # str | 
    operation_id = 'operation_id_example' # str | The operation identifier.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.elastic_pool_operations_cancel(resource_group_name, server_name, elastic_pool_name, operation_id, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ElasticPoolsApi->elastic_pool_operations_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **elastic_pool_name** | **str**|  | 
 **operation_id** | **str**| The operation identifier. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

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
**200** | The request for cancel has been executed successfully. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 CannotCancelOperation - The management operation is in a state that cannot be cancelled.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **elastic_pool_operations_list_by_elastic_pool**
> ElasticPoolOperationListResult elastic_pool_operations_list_by_elastic_pool(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version)



Gets a list of operations performed on the elastic pool.

### Example


```python
import openapi_client
from openapi_client.models.elastic_pool_operation_list_result import ElasticPoolOperationListResult
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
    api_instance = openapi_client.ElasticPoolsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    elastic_pool_name = 'elastic_pool_name_example' # str | 
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.elastic_pool_operations_list_by_elastic_pool(resource_group_name, server_name, elastic_pool_name, subscription_id, api_version)
        print("The response of ElasticPoolsApi->elastic_pool_operations_list_by_elastic_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElasticPoolsApi->elastic_pool_operations_list_by_elastic_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **elastic_pool_name** | **str**|  | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ElasticPoolOperationListResult**](ElasticPoolOperationListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request for getting elastic pool operations has been executed successfully. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

