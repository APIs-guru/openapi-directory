# openapi_client.ConfigApi

All URIs are relative to *https://cloudextension-testservice.local/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extension_configuration**](ConfigApi.md#extension_configuration) | **GET** /configuration | Configuration Resource


# **extension_configuration**
> ExtensionConfig extension_configuration(x_applecloudextension_session_id, request_timeout, user_agent, accept_language, cache_control, x_applecloudextension_retry_count=x_applecloudextension_retry_count, if_none_match=if_none_match)

Configuration Resource

### Example


```python
import openapi_client
from openapi_client.models.extension_config import ExtensionConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudextension-testservice.local/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudextension-testservice.local/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigApi(api_client)
    x_applecloudextension_session_id = 'x_applecloudextension_session_id_example' # str | 
    request_timeout = 3.4 # float | 
    user_agent = 'user_agent_example' # str | 
    accept_language = 'accept_language_example' # str | 
    cache_control = 'cache_control_example' # str | 
    x_applecloudextension_retry_count = 3.4 # float |  (optional)
    if_none_match = 'if_none_match_example' # str |  (optional)

    try:
        # Configuration Resource
        api_response = api_instance.extension_configuration(x_applecloudextension_session_id, request_timeout, user_agent, accept_language, cache_control, x_applecloudextension_retry_count=x_applecloudextension_retry_count, if_none_match=if_none_match)
        print("The response of ConfigApi->extension_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigApi->extension_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_applecloudextension_session_id** | **str**|  | 
 **request_timeout** | **float**|  | 
 **user_agent** | **str**|  | 
 **accept_language** | **str**|  | 
 **cache_control** | **str**|  | 
 **x_applecloudextension_retry_count** | **float**|  | [optional] 
 **if_none_match** | **str**|  | [optional] 

### Return type

[**ExtensionConfig**](ExtensionConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jose

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * Cache-Control -  <br>  * ETag -  <br>  * x-applecloudextension-session-id -  <br>  |
**304** |  |  * Cache-Control -  <br>  * x-applecloudextension-session-id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

