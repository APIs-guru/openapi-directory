# openapi_client.MarkdownApi

All URIs are relative to *https://www.daniweb.com/connect/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**markdown_emoticons_get**](MarkdownApi.md#markdown_emoticons_get) | **GET** /markdown/emoticons | 
[**markdown_post**](MarkdownApi.md#markdown_post) | **POST** /markdown | 


# **markdown_emoticons_get**
> EndpointGetMarkdownEmoticons markdown_emoticons_get()



### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_markdown_emoticons import EndpointGetMarkdownEmoticons
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MarkdownApi(api_client)

    try:
        api_response = api_instance.markdown_emoticons_get()
        print("The response of MarkdownApi->markdown_emoticons_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarkdownApi->markdown_emoticons_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**EndpointGetMarkdownEmoticons**](EndpointGetMarkdownEmoticons.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markdown_post**
> EndpointPostMarkdown markdown_post(text_raw, text_emoticons=text_emoticons)



### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_markdown import EndpointPostMarkdown
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MarkdownApi(api_client)
    text_raw = 'text_raw_example' # str | 
    text_emoticons = False # bool |  (optional) (default to False)

    try:
        api_response = api_instance.markdown_post(text_raw, text_emoticons=text_emoticons)
        print("The response of MarkdownApi->markdown_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarkdownApi->markdown_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text_raw** | **str**|  | 
 **text_emoticons** | **bool**|  | [optional] [default to False]

### Return type

[**EndpointPostMarkdown**](EndpointPostMarkdown.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

