# openapi_client.DeliveryUsageApi

All URIs are relative to *https://api.mux.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_delivery_usage**](DeliveryUsageApi.md#list_delivery_usage) | **GET** /video/v1/delivery-usage | List Usage


# **list_delivery_usage**
> ListDeliveryUsageResponse list_delivery_usage(page=page, limit=limit, asset_id=asset_id, live_stream_id=live_stream_id, timeframe=timeframe)

List Usage

Returns a list of delivery usage records and their associated Asset IDs or Live Stream IDs.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_delivery_usage_response import ListDeliveryUsageResponse
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
    api_instance = openapi_client.DeliveryUsageApi(api_client)
    page = 1 # int | Offset by this many pages, of the size of `limit` (optional) (default to 1)
    limit = 100 # int | Number of items to include in the response (optional) (default to 100)
    asset_id = 'asset_id_example' # str | Filter response to return delivery usage for this asset only. You cannot specify both the `asset_id` and `live_stream_id` parameters together. (optional)
    live_stream_id = 'live_stream_id_example' # str | Filter response to return delivery usage for assets for this live stream. You cannot specify both the `asset_id` and `live_stream_id` parameters together. (optional)
    timeframe = ['timeframe_example'] # List[str] | Time window to get delivery usage information. timeframe[0] indicates the start time, timeframe[1] indicates the end time in seconds since the Unix epoch. Default time window is 1 hour representing usage from 13th to 12th hour from when the request is made. (optional)

    try:
        # List Usage
        api_response = api_instance.list_delivery_usage(page=page, limit=limit, asset_id=asset_id, live_stream_id=live_stream_id, timeframe=timeframe)
        print("The response of DeliveryUsageApi->list_delivery_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeliveryUsageApi->list_delivery_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Offset by this many pages, of the size of &#x60;limit&#x60; | [optional] [default to 1]
 **limit** | **int**| Number of items to include in the response | [optional] [default to 100]
 **asset_id** | **str**| Filter response to return delivery usage for this asset only. You cannot specify both the &#x60;asset_id&#x60; and &#x60;live_stream_id&#x60; parameters together. | [optional] 
 **live_stream_id** | **str**| Filter response to return delivery usage for assets for this live stream. You cannot specify both the &#x60;asset_id&#x60; and &#x60;live_stream_id&#x60; parameters together. | [optional] 
 **timeframe** | [**List[str]**](str.md)| Time window to get delivery usage information. timeframe[0] indicates the start time, timeframe[1] indicates the end time in seconds since the Unix epoch. Default time window is 1 hour representing usage from 13th to 12th hour from when the request is made. | [optional] 

### Return type

[**ListDeliveryUsageResponse**](ListDeliveryUsageResponse.md)

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

