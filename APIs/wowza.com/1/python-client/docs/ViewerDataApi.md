# openapi_client.ViewerDataApi

All URIs are relative to *https://api-sandbox.cloud.wowza.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**show_viewer_data_stream_target**](ViewerDataApi.md#show_viewer_data_stream_target) | **GET** /usage/viewer_data/stream_targets/{id} | Fetch viewer data for a stream target


# **show_viewer_data_stream_target**
> UsageViewerDataStreamTarget show_viewer_data_stream_target(id, var_from=var_from, to=to)

Fetch viewer data for a stream target

This operation shows viewer data for a specific stream target. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.

### Example

* Api Key Authentication (wsc-api-key):
* Api Key Authentication (wsc-access-key):

```python
import openapi_client
from openapi_client.models.usage_viewer_data_stream_target import UsageViewerDataStreamTarget
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-sandbox.cloud.wowza.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-sandbox.cloud.wowza.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: wsc-api-key
configuration.api_key['wsc-api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-api-key'] = 'Bearer'

# Configure API key authorization: wsc-access-key
configuration.api_key['wsc-access-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['wsc-access-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ViewerDataApi(api_client)
    id = 'id_example' # str | The unique alphanumeric string that identifies the stream target.
    var_from = '2013-10-20T19:20:30+01:00' # datetime | The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date. (optional)
    to = '2013-10-20T19:20:30+01:00' # datetime | The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day. (optional)

    try:
        # Fetch viewer data for a stream target
        api_response = api_instance.show_viewer_data_stream_target(id, var_from=var_from, to=to)
        print("The response of ViewerDataApi->show_viewer_data_stream_target:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViewerDataApi->show_viewer_data_stream_target: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique alphanumeric string that identifies the stream target. | 
 **var_from** | **datetime**| The start of the range of time you want to view. Specify &lt;strong&gt;YYYY-MM-DD HH:MM:SS&lt;/strong&gt; where &lt;strong&gt;HH&lt;/strong&gt; is a 24-hour clock in UTC. The &lt;em&gt;from&lt;/em&gt; default is the last billing date. | [optional] 
 **to** | **datetime**| The end of the range of time you want to view. Specify &lt;strong&gt;YYYY-MM-DD HH:MM:SS&lt;/strong&gt; where &lt;strong&gt;HH&lt;/strong&gt; is a 24-hour clock in UTC. The &lt;em&gt;to&lt;/em&gt; default is the end of the current day. | [optional] 

### Return type

[**UsageViewerDataStreamTarget**](UsageViewerDataStreamTarget.md)

### Authorization

[wsc-api-key](../README.md#wsc-api-key), [wsc-access-key](../README.md#wsc-access-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**410** | Gone |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

