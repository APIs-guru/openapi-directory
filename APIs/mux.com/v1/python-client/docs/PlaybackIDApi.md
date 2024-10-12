# openapi_client.PlaybackIDApi

All URIs are relative to *https://api.mux.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_asset_or_livestream_id**](PlaybackIDApi.md#get_asset_or_livestream_id) | **GET** /video/v1/playback-ids/{PLAYBACK_ID} | Retrieve an Asset or Live Stream ID


# **get_asset_or_livestream_id**
> GetAssetOrLiveStreamIdResponse get_asset_or_livestream_id(playback_id)

Retrieve an Asset or Live Stream ID

Retrieves the Identifier of the Asset or Live Stream associated with the Playback ID.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.get_asset_or_live_stream_id_response import GetAssetOrLiveStreamIdResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PlaybackIDApi(api_client)
    playback_id = 'playback_id_example' # str | The live stream's playback ID.

    try:
        # Retrieve an Asset or Live Stream ID
        api_response = api_instance.get_asset_or_livestream_id(playback_id)
        print("The response of PlaybackIDApi->get_asset_or_livestream_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlaybackIDApi->get_asset_or_livestream_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playback_id** | **str**| The live stream&#39;s playback ID. | 

### Return type

[**GetAssetOrLiveStreamIdResponse**](GetAssetOrLiveStreamIdResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

