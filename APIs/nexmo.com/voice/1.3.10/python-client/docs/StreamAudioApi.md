# openapi_client.StreamAudioApi

All URIs are relative to *https://api.nexmo.com/v1/calls*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start_stream**](StreamAudioApi.md#start_stream) | **PUT** /{uuid}/stream | Play an audio file into a call
[**stop_stream**](StreamAudioApi.md#stop_stream) | **DELETE** /{uuid}/stream | Stop playing an audio file into a call


# **start_stream**
> StartStreamResponse start_stream(uuid, start_stream_request)

Play an audio file into a call

Play an audio file into a call

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.start_stream_request import StartStreamRequest
from openapi_client.models.start_stream_response import StartStreamResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/calls
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/calls"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamAudioApi(api_client)
    uuid = '63f61863-4a51-4f6b-86e1-46edebcf9356' # str | UUID of the Call Leg
    start_stream_request = openapi_client.StartStreamRequest() # StartStreamRequest | action to perform

    try:
        # Play an audio file into a call
        api_response = api_instance.start_stream(uuid, start_stream_request)
        print("The response of StreamAudioApi->start_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamAudioApi->start_stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| UUID of the Call Leg | 
 **start_stream_request** | [**StartStreamRequest**](StartStreamRequest.md)| action to perform | 

### Return type

[**StartStreamResponse**](StartStreamResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop_stream**
> StopStreamResponse stop_stream(uuid)

Stop playing an audio file into a call

Stop playing an audio file into a call

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.stop_stream_response import StopStreamResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/calls
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/calls"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamAudioApi(api_client)
    uuid = '63f61863-4a51-4f6b-86e1-46edebcf9356' # str | UUID of the Call Leg

    try:
        # Stop playing an audio file into a call
        api_response = api_instance.stop_stream(uuid)
        print("The response of StreamAudioApi->stop_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamAudioApi->stop_stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| UUID of the Call Leg | 

### Return type

[**StopStreamResponse**](StopStreamResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

