# openapi_client.DefaultApi

All URIs are relative to *https://tinyuid.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_shorten_post**](DefaultApi.md#v1_shorten_post) | **POST** /v1/shorten | Create short link


# **v1_shorten_post**
> V1ShortenPost200Response v1_shorten_post(url)

Create short link

### Example


```python
import openapi_client
from openapi_client.models.v1_shorten_post200_response import V1ShortenPost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tinyuid.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tinyuid.com/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    url = 'url_example' # str | Link

    try:
        # Create short link
        api_response = api_instance.v1_shorten_post(url)
        print("The response of DefaultApi->v1_shorten_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->v1_shorten_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| Link | 

### Return type

[**V1ShortenPost200Response**](V1ShortenPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

