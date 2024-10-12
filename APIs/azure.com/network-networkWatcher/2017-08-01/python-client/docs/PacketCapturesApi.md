# openapi_client.PacketCapturesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**packet_captures_create**](PacketCapturesApi.md#packet_captures_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName} | 
[**packet_captures_delete**](PacketCapturesApi.md#packet_captures_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName} | 
[**packet_captures_get**](PacketCapturesApi.md#packet_captures_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName} | 
[**packet_captures_get_status**](PacketCapturesApi.md#packet_captures_get_status) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}/queryStatus | 
[**packet_captures_list**](PacketCapturesApi.md#packet_captures_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures | 
[**packet_captures_stop**](PacketCapturesApi.md#packet_captures_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}/stop | 


# **packet_captures_create**
> PacketCaptureResult packet_captures_create(resource_group_name, network_watcher_name, packet_capture_name, api_version, subscription_id, parameters)



Create and start a packet capture on the specified VM.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.packet_capture import PacketCapture
from openapi_client.models.packet_capture_result import PacketCaptureResult
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
    api_instance = openapi_client.PacketCapturesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    packet_capture_name = 'packet_capture_name_example' # str | The name of the packet capture session.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.PacketCapture() # PacketCapture | Parameters that define the create packet capture operation.

    try:
        api_response = api_instance.packet_captures_create(resource_group_name, network_watcher_name, packet_capture_name, api_version, subscription_id, parameters)
        print("The response of PacketCapturesApi->packet_captures_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PacketCapturesApi->packet_captures_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **packet_capture_name** | **str**| The name of the packet capture session. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**PacketCapture**](PacketCapture.md)| Parameters that define the create packet capture operation. | 

### Return type

[**PacketCaptureResult**](PacketCaptureResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Request successful. The operation returns the resulting packet capture session. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **packet_captures_delete**
> packet_captures_delete(resource_group_name, network_watcher_name, packet_capture_name, api_version, subscription_id)



Deletes the specified packet capture session.

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
    api_instance = openapi_client.PacketCapturesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    packet_capture_name = 'packet_capture_name_example' # str | The name of the packet capture session.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.packet_captures_delete(resource_group_name, network_watcher_name, packet_capture_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling PacketCapturesApi->packet_captures_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **packet_capture_name** | **str**| The name of the packet capture session. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Delete successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **packet_captures_get**
> PacketCaptureResult packet_captures_get(resource_group_name, network_watcher_name, packet_capture_name, api_version, subscription_id)



Gets a packet capture session by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.packet_capture_result import PacketCaptureResult
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
    api_instance = openapi_client.PacketCapturesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    packet_capture_name = 'packet_capture_name_example' # str | The name of the packet capture session.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.packet_captures_get(resource_group_name, network_watcher_name, packet_capture_name, api_version, subscription_id)
        print("The response of PacketCapturesApi->packet_captures_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PacketCapturesApi->packet_captures_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **packet_capture_name** | **str**| The name of the packet capture session. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PacketCaptureResult**](PacketCaptureResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a packet capture session. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **packet_captures_get_status**
> PacketCaptureQueryStatusResult packet_captures_get_status(resource_group_name, network_watcher_name, packet_capture_name, api_version, subscription_id)



Query the status of a running packet capture session.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.packet_capture_query_status_result import PacketCaptureQueryStatusResult
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
    api_instance = openapi_client.PacketCapturesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the Network Watcher resource.
    packet_capture_name = 'packet_capture_name_example' # str | The name given to the packet capture session.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.packet_captures_get_status(resource_group_name, network_watcher_name, packet_capture_name, api_version, subscription_id)
        print("The response of PacketCapturesApi->packet_captures_get_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PacketCapturesApi->packet_captures_get_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the Network Watcher resource. | 
 **packet_capture_name** | **str**| The name given to the packet capture session. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PacketCaptureQueryStatusResult**](PacketCaptureQueryStatusResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful query of packet capture status. |  -  |
**202** | Accepted query status of packet capture. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **packet_captures_list**
> PacketCaptureListResult packet_captures_list(resource_group_name, network_watcher_name, api_version, subscription_id)



Lists all packet capture sessions within the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.packet_capture_list_result import PacketCaptureListResult
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
    api_instance = openapi_client.PacketCapturesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the Network Watcher resource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.packet_captures_list(resource_group_name, network_watcher_name, api_version, subscription_id)
        print("The response of PacketCapturesApi->packet_captures_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PacketCapturesApi->packet_captures_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the Network Watcher resource. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PacketCaptureListResult**](PacketCaptureListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful packet capture enumeration request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **packet_captures_stop**
> packet_captures_stop(resource_group_name, network_watcher_name, packet_capture_name, api_version, subscription_id)



Stops a specified packet capture session.

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
    api_instance = openapi_client.PacketCapturesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    packet_capture_name = 'packet_capture_name_example' # str | The name of the packet capture session.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.packet_captures_stop(resource_group_name, network_watcher_name, packet_capture_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling PacketCapturesApi->packet_captures_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **packet_capture_name** | **str**| The name of the packet capture session. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Request successful. The operation stops the packet capture session. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

