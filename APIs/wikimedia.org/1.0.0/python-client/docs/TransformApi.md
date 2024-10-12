# openapi_client.TransformApi

All URIs are relative to *https://wikimedia.org/api/rest_v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transform_html_from_from_lang_to_to_lang_post**](TransformApi.md#transform_html_from_from_lang_to_to_lang_post) | **POST** /transform/html/from/{from_lang}/to/{to_lang} | Machine-translate content
[**transform_html_from_from_lang_to_to_lang_provider_post**](TransformApi.md#transform_html_from_from_lang_to_to_lang_provider_post) | **POST** /transform/html/from/{from_lang}/to/{to_lang}/{provider} | Machine-translate content
[**transform_list_languagepairs_get**](TransformApi.md#transform_list_languagepairs_get) | **GET** /transform/list/languagepairs/ | Lists the language pairs supported by the back-end
[**transform_list_pair_from_to_get**](TransformApi.md#transform_list_pair_from_to_get) | **GET** /transform/list/pair/{from}/{to}/ | Lists the tools available for a language pair
[**transform_list_tool_tool_from_get**](TransformApi.md#transform_list_tool_tool_from_get) | **GET** /transform/list/tool/{tool}/{from} | Lists the tools and language pairs available for the given tool category
[**transform_list_tool_tool_from_to_get**](TransformApi.md#transform_list_tool_tool_from_to_get) | **GET** /transform/list/tool/{tool}/{from}/{to} | Lists the tools and language pairs available for the given tool category
[**transform_list_tool_tool_get**](TransformApi.md#transform_list_tool_tool_get) | **GET** /transform/list/tool/{tool} | Lists the tools and language pairs available for the given tool category
[**transform_word_from_from_lang_to_to_lang_word_get**](TransformApi.md#transform_word_from_from_lang_to_to_lang_word_get) | **GET** /transform/word/from/{from_lang}/to/{to_lang}/{word} | Fetch the dictionary meaning of a word
[**transform_word_from_from_lang_to_to_lang_word_provider_get**](TransformApi.md#transform_word_from_from_lang_to_to_lang_word_provider_get) | **GET** /transform/word/from/{from_lang}/to/{to_lang}/{word}/{provider} | Fetch the dictionary meaning of a word


# **transform_html_from_from_lang_to_to_lang_post**
> CxMt transform_html_from_from_lang_to_to_lang_post(from_lang, to_lang, html)

Machine-translate content

Fetches the machine translation for the posted content from the source to the destination language.  Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable) 

### Example


```python
import openapi_client
from openapi_client.models.cx_mt import CxMt
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransformApi(api_client)
    from_lang = 'from_lang_example' # str | The source language code
    to_lang = 'to_lang_example' # str | The target language code
    html = 'html_example' # str | The HTML content to translate

    try:
        # Machine-translate content
        api_response = api_instance.transform_html_from_from_lang_to_to_lang_post(from_lang, to_lang, html)
        print("The response of TransformApi->transform_html_from_from_lang_to_to_lang_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformApi->transform_html_from_from_lang_to_to_lang_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from_lang** | **str**| The source language code | 
 **to_lang** | **str**| The target language code | 
 **html** | **str**| The HTML content to translate | 

### Return type

[**CxMt**](CxMt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The translated content |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transform_html_from_from_lang_to_to_lang_provider_post**
> CxMt transform_html_from_from_lang_to_to_lang_provider_post(from_lang, to_lang, provider, html)

Machine-translate content

Fetches the machine translation for the posted content from the source to the destination language.  Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable) 

### Example


```python
import openapi_client
from openapi_client.models.cx_mt import CxMt
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransformApi(api_client)
    from_lang = 'from_lang_example' # str | The source language code
    to_lang = 'to_lang_example' # str | The target language code
    provider = 'provider_example' # str | The machine translation provider id
    html = 'html_example' # str | The HTML content to translate

    try:
        # Machine-translate content
        api_response = api_instance.transform_html_from_from_lang_to_to_lang_provider_post(from_lang, to_lang, provider, html)
        print("The response of TransformApi->transform_html_from_from_lang_to_to_lang_provider_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformApi->transform_html_from_from_lang_to_to_lang_provider_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from_lang** | **str**| The source language code | 
 **to_lang** | **str**| The target language code | 
 **provider** | **str**| The machine translation provider id | 
 **html** | **str**| The HTML content to translate | 

### Return type

[**CxMt**](CxMt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The translated content |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transform_list_languagepairs_get**
> CxLanguagepairs transform_list_languagepairs_get()

Lists the language pairs supported by the back-end

Fetches the list of language pairs the back-end service can translate  Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable) 

### Example


```python
import openapi_client
from openapi_client.models.cx_languagepairs import CxLanguagepairs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransformApi(api_client)

    try:
        # Lists the language pairs supported by the back-end
        api_response = api_instance.transform_list_languagepairs_get()
        print("The response of TransformApi->transform_list_languagepairs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformApi->transform_list_languagepairs_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CxLanguagepairs**](CxLanguagepairs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the list of source and target languages supported by the API |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transform_list_pair_from_to_get**
> CxListTools transform_list_pair_from_to_get(var_from, to)

Lists the tools available for a language pair

Fetches the list of tools that are available for the given pair of languages.  Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable) 

### Example


```python
import openapi_client
from openapi_client.models.cx_list_tools import CxListTools
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransformApi(api_client)
    var_from = 'var_from_example' # str | The source language code
    to = 'to_example' # str | The target language code

    try:
        # Lists the tools available for a language pair
        api_response = api_instance.transform_list_pair_from_to_get(var_from, to)
        print("The response of TransformApi->transform_list_pair_from_to_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformApi->transform_list_pair_from_to_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **str**| The source language code | 
 **to** | **str**| The target language code | 

### Return type

[**CxListTools**](CxListTools.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the list of tools available for the language pair |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transform_list_tool_tool_from_get**
> object transform_list_tool_tool_from_get(tool, var_from)

Lists the tools and language pairs available for the given tool category

Fetches the list of tools and all of the language pairs it can translate  Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable) 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransformApi(api_client)
    tool = 'tool_example' # str | The tool category to list tools and language pairs for
    var_from = 'var_from_example' # str | The source language code

    try:
        # Lists the tools and language pairs available for the given tool category
        api_response = api_instance.transform_list_tool_tool_from_get(tool, var_from)
        print("The response of TransformApi->transform_list_tool_tool_from_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformApi->transform_list_tool_tool_from_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tool** | **str**| The tool category to list tools and language pairs for | 
 **var_from** | **str**| The source language code | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the list of language pairs available for a given translation tool |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transform_list_tool_tool_from_to_get**
> object transform_list_tool_tool_from_to_get(tool, var_from, to)

Lists the tools and language pairs available for the given tool category

Fetches the list of tools and all of the language pairs it can translate  Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable) 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransformApi(api_client)
    tool = 'tool_example' # str | The tool category to list tools and language pairs for
    var_from = 'var_from_example' # str | The source language code
    to = 'to_example' # str | The target language code

    try:
        # Lists the tools and language pairs available for the given tool category
        api_response = api_instance.transform_list_tool_tool_from_to_get(tool, var_from, to)
        print("The response of TransformApi->transform_list_tool_tool_from_to_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformApi->transform_list_tool_tool_from_to_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tool** | **str**| The tool category to list tools and language pairs for | 
 **var_from** | **str**| The source language code | 
 **to** | **str**| The target language code | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the list of language pairs available for a given translation tool |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transform_list_tool_tool_get**
> object transform_list_tool_tool_get(tool)

Lists the tools and language pairs available for the given tool category

Fetches the list of tools and all of the language pairs it can translate  Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable) 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransformApi(api_client)
    tool = 'tool_example' # str | The tool category to list tools and language pairs for

    try:
        # Lists the tools and language pairs available for the given tool category
        api_response = api_instance.transform_list_tool_tool_get(tool)
        print("The response of TransformApi->transform_list_tool_tool_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformApi->transform_list_tool_tool_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tool** | **str**| The tool category to list tools and language pairs for | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the list of language pairs available for a given translation tool |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transform_word_from_from_lang_to_to_lang_word_get**
> CxDict transform_word_from_from_lang_to_to_lang_word_get(from_lang, to_lang, word)

Fetch the dictionary meaning of a word

Fetches the dictionary meaning of a word from a language and displays it in the target language.  Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable) 

### Example


```python
import openapi_client
from openapi_client.models.cx_dict import CxDict
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransformApi(api_client)
    from_lang = 'from_lang_example' # str | The source language code
    to_lang = 'to_lang_example' # str | The target language code
    word = 'word_example' # str | The word to lookup

    try:
        # Fetch the dictionary meaning of a word
        api_response = api_instance.transform_word_from_from_lang_to_to_lang_word_get(from_lang, to_lang, word)
        print("The response of TransformApi->transform_word_from_from_lang_to_to_lang_word_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformApi->transform_word_from_from_lang_to_to_lang_word_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from_lang** | **str**| The source language code | 
 **to_lang** | **str**| The target language code | 
 **word** | **str**| The word to lookup | 

### Return type

[**CxDict**](CxDict.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the dictionary translation for the given word |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transform_word_from_from_lang_to_to_lang_word_provider_get**
> CxDict transform_word_from_from_lang_to_to_lang_word_provider_get(from_lang, to_lang, word, provider)

Fetch the dictionary meaning of a word

Fetches the dictionary meaning of a word from a language and displays it in the target language.  Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable) 

### Example


```python
import openapi_client
from openapi_client.models.cx_dict import CxDict
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://wikimedia.org/api/rest_v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://wikimedia.org/api/rest_v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransformApi(api_client)
    from_lang = 'from_lang_example' # str | The source language code
    to_lang = 'to_lang_example' # str | The target language code
    word = 'word_example' # str | The word to lookup
    provider = 'provider_example' # str | The dictionary provider id

    try:
        # Fetch the dictionary meaning of a word
        api_response = api_instance.transform_word_from_from_lang_to_to_lang_word_provider_get(from_lang, to_lang, word, provider)
        print("The response of TransformApi->transform_word_from_from_lang_to_to_lang_word_provider_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformApi->transform_word_from_from_lang_to_to_lang_word_provider_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from_lang** | **str**| The source language code | 
 **to_lang** | **str**| The target language code | 
 **word** | **str**| The word to lookup | 
 **provider** | **str**| The dictionary provider id | 

### Return type

[**CxDict**](CxDict.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the dictionary translation for the given word |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

