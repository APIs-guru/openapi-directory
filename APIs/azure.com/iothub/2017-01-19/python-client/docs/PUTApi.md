# openapi_client.PUTApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iot_hub_resource_create_event_hub_consumer_group**](PUTApi.md#iot_hub_resource_create_event_hub_consumer_group) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name} | Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.
[**iot_hub_resource_create_or_update**](PUTApi.md#iot_hub_resource_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName} | Create or update the metadata of an IoT hub.


# **iot_hub_resource_create_event_hub_consumer_group**
> EventHubConsumerGroupInfo iot_hub_resource_create_event_hub_consumer_group(api_version, subscription_id, resource_group_name, resource_name, event_hub_endpoint_name, name)

Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.

Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.

### Example


```python
import openapi_client
from openapi_client.models.event_hub_consumer_group_info import EventHubConsumerGroupInfo
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
    api_instance = openapi_client.PUTApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    event_hub_endpoint_name = 'event_hub_endpoint_name_example' # str | The name of the Event Hub-compatible endpoint in the IoT hub.
    name = 'name_example' # str | The name of the consumer group to add.

    try:
        # Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.
        api_response = api_instance.iot_hub_resource_create_event_hub_consumer_group(api_version, subscription_id, resource_group_name, resource_name, event_hub_endpoint_name, name)
        print("The response of PUTApi->iot_hub_resource_create_event_hub_consumer_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PUTApi->iot_hub_resource_create_event_hub_consumer_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **event_hub_endpoint_name** | **str**| The name of the Event Hub-compatible endpoint in the IoT hub. | 
 **name** | **str**| The name of the consumer group to add. | 

### Return type

[**EventHubConsumerGroupInfo**](EventHubConsumerGroupInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_hub_resource_create_or_update**
> IotHubDescription iot_hub_resource_create_or_update(api_version, subscription_id, resource_group_name, resource_name, iot_hub_description)

Create or update the metadata of an IoT hub.

Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PUTApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub to create or update.
    iot_hub_description = openapi_client.IotHubDescription() # IotHubDescription | The IoT hub metadata and security metadata.

    try:
        # Create or update the metadata of an IoT hub.
        api_response = api_instance.iot_hub_resource_create_or_update(api_version, subscription_id, resource_group_name, resource_name, iot_hub_description)
        print("The response of PUTApi->iot_hub_resource_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PUTApi->iot_hub_resource_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub to create or update. | 
 **iot_hub_description** | [**IotHubDescription**](IotHubDescription.md)| The IoT hub metadata and security metadata. | 

### Return type

[**IotHubDescription**](IotHubDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state. |  -  |
**201** | This is a long running operation. The operation returns a 201 if the validation is complete. The response includes an Azure-AsyncOperation header that contains a status URL. Clients are expected to poll the status URL for the status of the operation. If successful, the operation returns HTTP status code of 201 (OK). |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

