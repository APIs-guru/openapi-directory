# openapi_client.PlayTTSApi

All URIs are relative to *https://api.nexmo.com/v1/calls*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start_talk**](PlayTTSApi.md#start_talk) | **PUT** /{uuid}/talk | Play text to speech into a call
[**stop_talk**](PlayTTSApi.md#stop_talk) | **DELETE** /{uuid}/talk | Stop text to speech in a call


# **start_talk**
> StartTalkResponse start_talk(uuid, start_talk_request=start_talk_request)

Play text to speech into a call

Play text to speech into a call

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.start_talk_request import StartTalkRequest
from openapi_client.models.start_talk_response import StartTalkResponse
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
    api_instance = openapi_client.PlayTTSApi(api_client)
    uuid = '63f61863-4a51-4f6b-86e1-46edebcf9356' # str | UUID of the Call Leg
    start_talk_request = openapi_client.StartTalkRequest() # StartTalkRequest | Action to perform (optional)

    try:
        # Play text to speech into a call
        api_response = api_instance.start_talk(uuid, start_talk_request=start_talk_request)
        print("The response of PlayTTSApi->start_talk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayTTSApi->start_talk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| UUID of the Call Leg | 
 **start_talk_request** | [**StartTalkRequest**](StartTalkRequest.md)| Action to perform | [optional] 

### Return type

[**StartTalkResponse**](StartTalkResponse.md)

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

# **stop_talk**
> StopTalkResponse stop_talk(uuid)

Stop text to speech in a call

Stop text to speech in a call

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.stop_talk_response import StopTalkResponse
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
    api_instance = openapi_client.PlayTTSApi(api_client)
    uuid = '63f61863-4a51-4f6b-86e1-46edebcf9356' # str | UUID of the Call Leg

    try:
        # Stop text to speech in a call
        api_response = api_instance.stop_talk(uuid)
        print("The response of PlayTTSApi->stop_talk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayTTSApi->stop_talk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| UUID of the Call Leg | 

### Return type

[**StopTalkResponse**](StopTalkResponse.md)

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

