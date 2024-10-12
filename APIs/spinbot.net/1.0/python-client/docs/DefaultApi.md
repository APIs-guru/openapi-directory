# openapi_client.DefaultApi

All URIs are relative to *https://api.spinbot.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_info**](DefaultApi.md#get_info) | **GET** /api/acc | Return the user credit information.
[**post_article**](DefaultApi.md#post_article) | **POST** /api/article | Extracting the main article of the given URL.
[**post_pretty_spinner**](DefaultApi.md#post_pretty_spinner) | **POST** /api/pretty-spinner | Human readable auto rewrite your article.
[**post_spinner**](DefaultApi.md#post_spinner) | **POST** /api/spinner | Rewriting (spinning) your input article.
[**post_spintax**](DefaultApi.md#post_spintax) | **POST** /api/spintax | Generate Spintax format for the input article


# **get_info**
> object get_info(key)

Return the user credit information.

Return the user credit information.

### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.spinbot.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.spinbot.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | Your api key

    try:
        # Return the user credit information.
        api_response = api_instance.get_info(key)
        print("The response of DefaultApi->get_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| Your api key | 

### Return type

**object**

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_article**
> object post_article(key, url, faster_mode=faster_mode)

Extracting the main article of the given URL.

Extracting the main article of the given URL. The response is in JSON format.

### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.spinbot.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.spinbot.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | Your spinbot API key
    url = 'url_example' # str | The url of target article
    faster_mode = 'faster_mode_example' # str | you can set this input value to 1 to skip detecting the size (width and height in pixel) of all the images inside the extracted article. The response time of your request will be shortened if you set this input value to 1. (optional)

    try:
        # Extracting the main article of the given URL.
        api_response = api_instance.post_article(key, url, faster_mode=faster_mode)
        print("The response of DefaultApi->post_article:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->post_article: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| Your spinbot API key | 
 **url** | **str**| The url of target article | 
 **faster_mode** | **str**| you can set this input value to 1 to skip detecting the size (width and height in pixel) of all the images inside the extracted article. The response time of your request will be shortened if you set this input value to 1. | [optional] 

### Return type

**object**

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_pretty_spinner**
> object post_pretty_spinner(key, text, keep, accuracy)

Human readable auto rewrite your article.

Human readable auto rewrite your article. The response is in JSON format.

### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.spinbot.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.spinbot.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | Your spinbot API key
    text = 'text_example' # str | Input article that need to be rewrited.
    keep = 'keep_example' # str | Keep words/phrases, separated by newline, those remain unchanged during the rewrite process.
    accuracy = 'accuracy_example' # str | Rewrite accuracy profile, accepted values are very-low, low, medium, high, very-high

    try:
        # Human readable auto rewrite your article.
        api_response = api_instance.post_pretty_spinner(key, text, keep, accuracy)
        print("The response of DefaultApi->post_pretty_spinner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->post_pretty_spinner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| Your spinbot API key | 
 **text** | **str**| Input article that need to be rewrited. | 
 **keep** | **str**| Keep words/phrases, separated by newline, those remain unchanged during the rewrite process. | 
 **accuracy** | **str**| Rewrite accuracy profile, accepted values are very-low, low, medium, high, very-high | 

### Return type

**object**

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_spinner**
> object post_spinner(key, text)

Rewriting (spinning) your input article.

Rewriting (spinning) you input article. The response is in JSON format.

### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.spinbot.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.spinbot.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | Your spinbot API key
    text = 'text_example' # str | Input article that need to be rewrited.

    try:
        # Rewriting (spinning) your input article.
        api_response = api_instance.post_spinner(key, text)
        print("The response of DefaultApi->post_spinner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->post_spinner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| Your spinbot API key | 
 **text** | **str**| Input article that need to be rewrited. | 

### Return type

**object**

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_spintax**
> object post_spintax(key, text, full_mode=full_mode)

Generate Spintax format for the input article

Generate Spintax format for the input article, so you can rewrite it yourself. The response is in JSON format.

### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.spinbot.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.spinbot.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | Your spinbot API key
    text = 'text_example' # str | Input article that need to be rewritten.
    full_mode = 'full_mode_example' # str | Full mode option. (optional)

    try:
        # Generate Spintax format for the input article
        api_response = api_instance.post_spintax(key, text, full_mode=full_mode)
        print("The response of DefaultApi->post_spintax:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->post_spintax: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| Your spinbot API key | 
 **text** | **str**| Input article that need to be rewritten. | 
 **full_mode** | **str**| Full mode option. | [optional] 

### Return type

**object**

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

