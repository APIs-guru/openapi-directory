# openapi_client.DefaultApi

All URIs are relative to *https://language-identification-prediction.p.rapidapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recognize_language_post**](DefaultApi.md#recognize_language_post) | **POST** /recognize-language/ | Recognize Language


# **recognize_language_post**
> recognize_language_post(x_rapid_api_host, x_rapid_api_key, text)

Recognize Language

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://language-identification-prediction.p.rapidapi.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://language-identification-prediction.p.rapidapi.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    x_rapid_api_host = 'language-identification-prediction.p.rapidapi.com' # str |  (default to 'language-identification-prediction.p.rapidapi.com')
    x_rapid_api_key = 'x_rapid_api_key_example' # str | 
    text = 'text_example' # str | text

    try:
        # Recognize Language
        api_instance.recognize_language_post(x_rapid_api_host, x_rapid_api_key, text)
    except Exception as e:
        print("Exception when calling DefaultApi->recognize_language_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_rapid_api_host** | **str**|  | [default to &#39;language-identification-prediction.p.rapidapi.com&#39;]
 **x_rapid_api_key** | **str**|  | 
 **text** | **str**| text | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

