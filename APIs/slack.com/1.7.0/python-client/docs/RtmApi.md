# openapi_client.RtmApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rtm_connect**](RtmApi.md#rtm_connect) | **GET** /rtm.connect | 


# **rtm_connect**
> RtmConnectSchema rtm_connect(token, batch_presence_aware=batch_presence_aware, presence_sub=presence_sub)



Starts a Real Time Messaging session.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.rtm_connect_schema import RtmConnectSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RtmApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `rtm:stream`
    batch_presence_aware = True # bool | Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events. See [batch presence](/docs/presence-and-status#batching). (optional)
    presence_sub = True # bool | Only deliver presence events when requested by subscription. See [presence subscriptions](/docs/presence-and-status#subscriptions). (optional)

    try:
        api_response = api_instance.rtm_connect(token, batch_presence_aware=batch_presence_aware, presence_sub=presence_sub)
        print("The response of RtmApi->rtm_connect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RtmApi->rtm_connect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;rtm:stream&#x60; | 
 **batch_presence_aware** | **bool**| Batch presence deliveries via subscription. Enabling changes the shape of &#x60;presence_change&#x60; events. See [batch presence](/docs/presence-and-status#batching). | [optional] 
 **presence_sub** | **bool**| Only deliver presence events when requested by subscription. See [presence subscriptions](/docs/presence-and-status#subscriptions). | [optional] 

### Return type

[**RtmConnectSchema**](RtmConnectSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

