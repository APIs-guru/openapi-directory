# openapi_client.DELETEApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iot_hub_resource_delete**](DELETEApi.md#iot_hub_resource_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName} | Delete an IoT hub
[**iot_hub_resource_delete_event_hub_consumer_group**](DELETEApi.md#iot_hub_resource_delete_event_hub_consumer_group) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name} | Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub


# **iot_hub_resource_delete**
> IotHubDescription iot_hub_resource_delete(api_version, subscription_id, resource_group_name, resource_name)

Delete an IoT hub

Delete an IoT hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.iot_hub_description import IotHubDescription
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
    api_instance = openapi_client.DELETEApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.

    try:
        # Delete an IoT hub
        api_response = api_instance.iot_hub_resource_delete(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of DELETEApi->iot_hub_resource_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DELETEApi->iot_hub_resource_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 

### Return type

[**IotHubDescription**](IotHubDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is returned as a response to the status polling request for the delete operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**202** | The Iot Hub resource provider always returns a 202 Accepted status code with valid Location and Retry-After headers. The resource provider also sets the Azure-AsyncOperation header with a URL that points to the operation resource for this operation. Subsequent GET attempts on the resource after a DELETE operation return a resource representation that indicates a transitional provisioning state (such as Terminating). To retrieve the status of the operation, a client can either poll the URL returned in the Location header after the Retry-After interval, get the IoT Hub service status directly, or query the operation resource. |  -  |
**204** | Once the long running delete operation completes successfully, a 204 No Content status code is returned when the status polling request finds the Iot hub metadata in the service and the status of the delete operation is set to a completed state. |  -  |
**404** | After the long running delete operation completes successfully, a 404 Not Found is returned when the status polling request no longer finds the Iot hub metadata in the service. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_delete_event_hub_consumer_group**
> iot_hub_resource_delete_event_hub_consumer_group(api_version, subscription_id, resource_group_name, resource_name, event_hub_endpoint_name, name)

Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub

Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub.

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
    api_instance = openapi_client.DELETEApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    event_hub_endpoint_name = 'event_hub_endpoint_name_example' # str | The name of the Event Hub-compatible endpoint in the IoT hub.
    name = 'name_example' # str | The name of the consumer group to delete.

    try:
        # Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub
        api_instance.iot_hub_resource_delete_event_hub_consumer_group(api_version, subscription_id, resource_group_name, resource_name, event_hub_endpoint_name, name)
    except Exception as e:
        print("Exception when calling DELETEApi->iot_hub_resource_delete_event_hub_consumer_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **event_hub_endpoint_name** | **str**| The name of the Event Hub-compatible endpoint in the IoT hub. | 
 **name** | **str**| The name of the consumer group to delete. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

