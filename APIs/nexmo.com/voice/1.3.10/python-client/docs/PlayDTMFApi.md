# openapi_client.PlayDTMFApi

All URIs are relative to *https://api.nexmo.com/v1/calls*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start_dtmf**](PlayDTMFApi.md#start_dtmf) | **PUT** /{uuid}/dtmf | Play DTMF tones into a call


# **start_dtmf**
> DTMFResponse start_dtmf(uuid, dtmf_request)

Play DTMF tones into a call

Play DTMF tones into a call

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.dtmf_request import DTMFRequest
from openapi_client.models.dtmf_response import DTMFResponse
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
    api_instance = openapi_client.PlayDTMFApi(api_client)
    uuid = '63f61863-4a51-4f6b-86e1-46edebcf9356' # str | UUID of the Call Leg
    dtmf_request = openapi_client.DTMFRequest() # DTMFRequest | action to perform

    try:
        # Play DTMF tones into a call
        api_response = api_instance.start_dtmf(uuid, dtmf_request)
        print("The response of PlayDTMFApi->start_dtmf:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlayDTMFApi->start_dtmf: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| UUID of the Call Leg | 
 **dtmf_request** | [**DTMFRequest**](DTMFRequest.md)| action to perform | 

### Return type

[**DTMFResponse**](DTMFResponse.md)

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

