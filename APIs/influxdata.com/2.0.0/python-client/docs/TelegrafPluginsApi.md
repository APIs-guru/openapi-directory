# openapi_client.TelegrafPluginsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_telegraf_plugins**](TelegrafPluginsApi.md#get_telegraf_plugins) | **GET** /telegraf/plugins | List all Telegraf plugins


# **get_telegraf_plugins**
> TelegrafPlugins get_telegraf_plugins(zap_trace_span=zap_trace_span, type=type)

List all Telegraf plugins

### Example


```python
import openapi_client
from openapi_client.models.telegraf_plugins import TelegrafPlugins
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelegrafPluginsApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    type = 'type_example' # str | The type of plugin desired. (optional)

    try:
        # List all Telegraf plugins
        api_response = api_instance.get_telegraf_plugins(zap_trace_span=zap_trace_span, type=type)
        print("The response of TelegrafPluginsApi->get_telegraf_plugins:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelegrafPluginsApi->get_telegraf_plugins: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **type** | **str**| The type of plugin desired. | [optional] 

### Return type

[**TelegrafPlugins**](TelegrafPlugins.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Telegraf plugins. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

