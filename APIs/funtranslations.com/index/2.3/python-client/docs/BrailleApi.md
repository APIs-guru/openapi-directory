# openapi_client.BrailleApi

All URIs are relative to *http://api.funtranslations.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**translate_braille_dots_get**](BrailleApi.md#translate_braille_dots_get) | **GET** /translate/braille/dots | 
[**translate_braille_get**](BrailleApi.md#translate_braille_get) | **GET** /translate/braille | 
[**translate_braille_html_get**](BrailleApi.md#translate_braille_html_get) | **GET** /translate/braille/html | 
[**translate_braille_image_get**](BrailleApi.md#translate_braille_image_get) | **GET** /translate/braille/image | 
[**translate_braille_unicode_get**](BrailleApi.md#translate_braille_unicode_get) | **GET** /translate/braille/unicode | 


# **translate_braille_dots_get**
> translate_braille_dots_get(text)



Use this to see which dots are enabled for each Braille letters. This is highly educational (to see which dots are enabled) and can potentially drive a non braille display which works on individual dots.

### Example

* Api Key Authentication (X-Funtranslations-Api-Secret):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.funtranslations.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.funtranslations.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: X-Funtranslations-Api-Secret
configuration.api_key['X-Funtranslations-Api-Secret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Funtranslations-Api-Secret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BrailleApi(api_client)
    text = 'text_example' # str | Text to translate

    try:
        api_instance.translate_braille_dots_get(text)
    except Exception as e:
        print("Exception when calling BrailleApi->translate_braille_dots_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **str**| Text to translate | 

### Return type

void (empty response body)

### Authorization

[X-Funtranslations-Api-Secret](../README.md#X-Funtranslations-Api-Secret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translate_braille_get**
> translate_braille_get(text)



Translate from English to Braille. This is what you use if you have a braille display. This API translates the English text into characters that a braille display understands and you can feed the translated text directly to the display.

### Example

* Api Key Authentication (X-Funtranslations-Api-Secret):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.funtranslations.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.funtranslations.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: X-Funtranslations-Api-Secret
configuration.api_key['X-Funtranslations-Api-Secret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Funtranslations-Api-Secret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BrailleApi(api_client)
    text = 'text_example' # str | Text to translate

    try:
        api_instance.translate_braille_get(text)
    except Exception as e:
        print("Exception when calling BrailleApi->translate_braille_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **str**| Text to translate | 

### Return type

void (empty response body)

### Authorization

[X-Funtranslations-Api-Secret](../README.md#X-Funtranslations-Api-Secret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translate_braille_html_get**
> translate_braille_html_get(text)



Translate from English to Braille Image characters. This is probably what you want to use if you are displaying braille in a browser.

### Example

* Api Key Authentication (X-Funtranslations-Api-Secret):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.funtranslations.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.funtranslations.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: X-Funtranslations-Api-Secret
configuration.api_key['X-Funtranslations-Api-Secret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Funtranslations-Api-Secret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BrailleApi(api_client)
    text = 'text_example' # str | Text to translate

    try:
        api_instance.translate_braille_html_get(text)
    except Exception as e:
        print("Exception when calling BrailleApi->translate_braille_html_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **str**| Text to translate | 

### Return type

void (empty response body)

### Authorization

[X-Funtranslations-Api-Secret](../README.md#X-Funtranslations-Api-Secret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translate_braille_image_get**
> translate_braille_image_get(text)



Translate from English to Braille image characters. This is probably what you want to use if you are displaying braille in a browser.

### Example

* Api Key Authentication (X-Funtranslations-Api-Secret):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.funtranslations.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.funtranslations.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: X-Funtranslations-Api-Secret
configuration.api_key['X-Funtranslations-Api-Secret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Funtranslations-Api-Secret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BrailleApi(api_client)
    text = 'text_example' # str | Text to translate

    try:
        api_instance.translate_braille_image_get(text)
    except Exception as e:
        print("Exception when calling BrailleApi->translate_braille_image_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **str**| Text to translate | 

### Return type

void (empty response body)

### Authorization

[X-Funtranslations-Api-Secret](../README.md#X-Funtranslations-Api-Secret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translate_braille_unicode_get**
> translate_braille_unicode_get(text)



Translate from English to Braille Unicode characters.

### Example

* Api Key Authentication (X-Funtranslations-Api-Secret):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.funtranslations.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.funtranslations.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: X-Funtranslations-Api-Secret
configuration.api_key['X-Funtranslations-Api-Secret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Funtranslations-Api-Secret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BrailleApi(api_client)
    text = 'text_example' # str | Text to translate

    try:
        api_instance.translate_braille_unicode_get(text)
    except Exception as e:
        print("Exception when calling BrailleApi->translate_braille_unicode_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **str**| Text to translate | 

### Return type

void (empty response body)

### Authorization

[X-Funtranslations-Api-Secret](../README.md#X-Funtranslations-Api-Secret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**401** | 401  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

