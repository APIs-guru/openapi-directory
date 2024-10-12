# openapi_client.LiveOutputsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**live_outputs_create**](LiveOutputsApi.md#live_outputs_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/liveOutputs/{liveOutputName} | Create Live Output
[**live_outputs_delete**](LiveOutputsApi.md#live_outputs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/liveOutputs/{liveOutputName} | Delete Live Output
[**live_outputs_get**](LiveOutputsApi.md#live_outputs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/liveOutputs/{liveOutputName} | Get Live Output
[**live_outputs_list**](LiveOutputsApi.md#live_outputs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/liveOutputs | List Live Outputs


# **live_outputs_create**
> LiveOutput live_outputs_create(subscription_id, resource_group_name, account_name, live_event_name, live_output_name, api_version, parameters)

Create Live Output

Creates a Live Output.

### Example


```python
import openapi_client
from openapi_client.models.live_output import LiveOutput
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
    api_instance = openapi_client.LiveOutputsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    live_event_name = 'live_event_name_example' # str | The name of the Live Event.
    live_output_name = 'live_output_name_example' # str | The name of the Live Output.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.LiveOutput() # LiveOutput | Live Output properties needed for creation.

    try:
        # Create Live Output
        api_response = api_instance.live_outputs_create(subscription_id, resource_group_name, account_name, live_event_name, live_output_name, api_version, parameters)
        print("The response of LiveOutputsApi->live_outputs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveOutputsApi->live_outputs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **live_event_name** | **str**| The name of the Live Event. | 
 **live_output_name** | **str**| The name of the Live Output. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**LiveOutput**](LiveOutput.md)| Live Output properties needed for creation. | 

### Return type

[**LiveOutput**](LiveOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **live_outputs_delete**
> live_outputs_delete(subscription_id, resource_group_name, account_name, live_event_name, live_output_name, api_version)

Delete Live Output

Deletes a Live Output.

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
    api_instance = openapi_client.LiveOutputsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    live_event_name = 'live_event_name_example' # str | The name of the Live Event.
    live_output_name = 'live_output_name_example' # str | The name of the Live Output.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Delete Live Output
        api_instance.live_outputs_delete(subscription_id, resource_group_name, account_name, live_event_name, live_output_name, api_version)
    except Exception as e:
        print("Exception when calling LiveOutputsApi->live_outputs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **live_event_name** | **str**| The name of the Live Event. | 
 **live_output_name** | **str**| The name of the Live Output. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. |  -  |
**204** | No content. The request has been accepted but the Live Output was not found. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **live_outputs_get**
> LiveOutput live_outputs_get(subscription_id, resource_group_name, account_name, live_event_name, live_output_name, api_version)

Get Live Output

Gets a Live Output.

### Example


```python
import openapi_client
from openapi_client.models.live_output import LiveOutput
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
    api_instance = openapi_client.LiveOutputsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    live_event_name = 'live_event_name_example' # str | The name of the Live Event.
    live_output_name = 'live_output_name_example' # str | The name of the Live Output.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get Live Output
        api_response = api_instance.live_outputs_get(subscription_id, resource_group_name, account_name, live_event_name, live_output_name, api_version)
        print("The response of LiveOutputsApi->live_outputs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveOutputsApi->live_outputs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **live_event_name** | **str**| The name of the Live Event. | 
 **live_output_name** | **str**| The name of the Live Output. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**LiveOutput**](LiveOutput.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**404** | NotFound |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **live_outputs_list**
> LiveOutputListResult live_outputs_list(subscription_id, resource_group_name, account_name, live_event_name, api_version)

List Live Outputs

Lists the Live Outputs in the Live Event.

### Example


```python
import openapi_client
from openapi_client.models.live_output_list_result import LiveOutputListResult
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
    api_instance = openapi_client.LiveOutputsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    live_event_name = 'live_event_name_example' # str | The name of the Live Event.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # List Live Outputs
        api_response = api_instance.live_outputs_list(subscription_id, resource_group_name, account_name, live_event_name, api_version)
        print("The response of LiveOutputsApi->live_outputs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveOutputsApi->live_outputs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **live_event_name** | **str**| The name of the Live Event. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**LiveOutputListResult**](LiveOutputListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

