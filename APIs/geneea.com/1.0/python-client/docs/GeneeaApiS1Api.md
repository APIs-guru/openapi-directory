# openapi_client.GeneeaApiS1Api

All URIs are relative to *https://api.geneea.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**correction_get**](GeneeaApiS1Api.md#correction_get) | **GET** /s1/correction | Performs text correction (diacritization) on the given document
[**correction_post**](GeneeaApiS1Api.md#correction_post) | **POST** /s1/correction | Performs text correction (diacritization) on the given document
[**entities_get**](GeneeaApiS1Api.md#entities_get) | **GET** /s1/entities | Performs named-entity recognition on the given document
[**entities_post**](GeneeaApiS1Api.md#entities_post) | **POST** /s1/entities | Performs named-entity recognition on the given document
[**lemmatize_get**](GeneeaApiS1Api.md#lemmatize_get) | **GET** /s1/lemmatize | Performs lemmatization on the given document
[**lemmatize_post**](GeneeaApiS1Api.md#lemmatize_post) | **POST** /s1/lemmatize | Performs lemmatization on the given document
[**sentiment_get**](GeneeaApiS1Api.md#sentiment_get) | **GET** /s1/sentiment | Performs sentiment analysis on the given document
[**sentiment_post**](GeneeaApiS1Api.md#sentiment_post) | **POST** /s1/sentiment | Performs sentiment analysis on the given document
[**topic_get**](GeneeaApiS1Api.md#topic_get) | **GET** /s1/topic | Performs topic detection on the given document
[**topic_post**](GeneeaApiS1Api.md#topic_post) | **POST** /s1/topic | Performs topic detection on the given document


# **correction_get**
> object correction_get(id=id, text=text, url=url, extractor=extractor, language=language, return_text_info=return_text_info)

Performs text correction (diacritization) on the given document

<br/><strong>Possible options:</strong><p class=\"markdown\">An optional parameter <code>diacritize</code> with values <code>yes</code>, <code>no</code> or <code>auto</code> indicate whether the text diacritization will be performed. The default value is <code>auto</code>.</p>

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.geneea.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.geneea.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeneeaApiS1Api(api_client)
    id = 'id_example' # str | document ID (optional)
    text = 'text_example' # str | raw document text (optional)
    url = 'url_example' # str | document URL (optional)
    extractor = 'extractor_example' # str | document extractor (optional)
    language = 'language_example' # str | document language (optional)
    return_text_info = True # bool |  (optional)

    try:
        # Performs text correction (diacritization) on the given document
        api_response = api_instance.correction_get(id=id, text=text, url=url, extractor=extractor, language=language, return_text_info=return_text_info)
        print("The response of GeneeaApiS1Api->correction_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneeaApiS1Api->correction_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| document ID | [optional] 
 **text** | **str**| raw document text | [optional] 
 **url** | **str**| document URL | [optional] 
 **extractor** | **str**| document extractor | [optional] 
 **language** | **str**| document language | [optional] 
 **return_text_info** | **bool**|  | [optional] 

### Return type

**object**

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **correction_post**
> object correction_post(body=body)

Performs text correction (diacritization) on the given document

<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href=\"https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation\" target=\"_blank\">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{\"text\": \"Hello world!\"}</code></pre><pre><code>{\"url\": \"https://en.wikipedia.org/wiki/Pyrrhuloxia\"}</code></pre><br/><strong>Possible options:</strong><p class=\"markdown\">An optional parameter <code>diacritize</code> with values <code>yes</code>, <code>no</code> or <code>auto</code> indicate whether the text diacritization will be performed. The default value is <code>auto</code>.</p>

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.models.request import Request
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.geneea.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.geneea.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeneeaApiS1Api(api_client)
    body = openapi_client.Request() # Request | request (optional)

    try:
        # Performs text correction (diacritization) on the given document
        api_response = api_instance.correction_post(body=body)
        print("The response of GeneeaApiS1Api->correction_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneeaApiS1Api->correction_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Request**](Request.md)| request | [optional] 

### Return type

**object**

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Description was not specified |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **entities_get**
> EntitiesResponse entities_get(id=id, text=text, url=url, extractor=extractor, language=language, return_text_info=return_text_info)

Performs named-entity recognition on the given document

entitiesGet

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.models.entities_response import EntitiesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.geneea.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.geneea.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeneeaApiS1Api(api_client)
    id = 'id_example' # str | document ID (optional)
    text = 'text_example' # str | raw document text (optional)
    url = 'url_example' # str | document URL (optional)
    extractor = 'extractor_example' # str | document extractor (optional)
    language = 'language_example' # str | document language (optional)
    return_text_info = True # bool |  (optional)

    try:
        # Performs named-entity recognition on the given document
        api_response = api_instance.entities_get(id=id, text=text, url=url, extractor=extractor, language=language, return_text_info=return_text_info)
        print("The response of GeneeaApiS1Api->entities_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneeaApiS1Api->entities_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| document ID | [optional] 
 **text** | **str**| raw document text | [optional] 
 **url** | **str**| document URL | [optional] 
 **extractor** | **str**| document extractor | [optional] 
 **language** | **str**| document language | [optional] 
 **return_text_info** | **bool**|  | [optional] 

### Return type

[**EntitiesResponse**](EntitiesResponse.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **entities_post**
> EntitiesResponse entities_post(body=body)

Performs named-entity recognition on the given document

<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href=\"https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation\" target=\"_blank\">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{\"text\": \"Hello world!\"}</code></pre><pre><code>{\"url\": \"https://en.wikipedia.org/wiki/Pyrrhuloxia\"}</code></pre>

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.models.entities_response import EntitiesResponse
from openapi_client.models.request import Request
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.geneea.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.geneea.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeneeaApiS1Api(api_client)
    body = openapi_client.Request() # Request | request (optional)

    try:
        # Performs named-entity recognition on the given document
        api_response = api_instance.entities_post(body=body)
        print("The response of GeneeaApiS1Api->entities_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneeaApiS1Api->entities_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Request**](Request.md)| request | [optional] 

### Return type

[**EntitiesResponse**](EntitiesResponse.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Description was not specified |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lemmatize_get**
> LemmatizeResponse lemmatize_get(id=id, text=text, url=url, extractor=extractor, language=language, return_text_info=return_text_info)

Performs lemmatization on the given document

lemmatizeGet

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.models.lemmatize_response import LemmatizeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.geneea.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.geneea.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeneeaApiS1Api(api_client)
    id = 'id_example' # str | document ID (optional)
    text = 'text_example' # str | raw document text (optional)
    url = 'url_example' # str | document URL (optional)
    extractor = 'extractor_example' # str | document extractor (optional)
    language = 'language_example' # str | document language (optional)
    return_text_info = True # bool |  (optional)

    try:
        # Performs lemmatization on the given document
        api_response = api_instance.lemmatize_get(id=id, text=text, url=url, extractor=extractor, language=language, return_text_info=return_text_info)
        print("The response of GeneeaApiS1Api->lemmatize_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneeaApiS1Api->lemmatize_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| document ID | [optional] 
 **text** | **str**| raw document text | [optional] 
 **url** | **str**| document URL | [optional] 
 **extractor** | **str**| document extractor | [optional] 
 **language** | **str**| document language | [optional] 
 **return_text_info** | **bool**|  | [optional] 

### Return type

[**LemmatizeResponse**](LemmatizeResponse.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lemmatize_post**
> LemmatizeResponse lemmatize_post(body=body)

Performs lemmatization on the given document

<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href=\"https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation\" target=\"_blank\">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{\"text\": \"Hello world!\"}</code></pre><pre><code>{\"url\": \"https://en.wikipedia.org/wiki/Pyrrhuloxia\"}</code></pre>

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.models.lemmatize_response import LemmatizeResponse
from openapi_client.models.request import Request
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.geneea.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.geneea.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeneeaApiS1Api(api_client)
    body = openapi_client.Request() # Request | request (optional)

    try:
        # Performs lemmatization on the given document
        api_response = api_instance.lemmatize_post(body=body)
        print("The response of GeneeaApiS1Api->lemmatize_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneeaApiS1Api->lemmatize_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Request**](Request.md)| request | [optional] 

### Return type

[**LemmatizeResponse**](LemmatizeResponse.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Description was not specified |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sentiment_get**
> SentimentResponse sentiment_get(id=id, text=text, url=url, extractor=extractor, language=language, return_text_info=return_text_info)

Performs sentiment analysis on the given document

sentimentGet

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.models.sentiment_response import SentimentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.geneea.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.geneea.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeneeaApiS1Api(api_client)
    id = 'id_example' # str | document ID (optional)
    text = 'text_example' # str | raw document text (optional)
    url = 'url_example' # str | document URL (optional)
    extractor = 'extractor_example' # str | document extractor (optional)
    language = 'language_example' # str | document language (optional)
    return_text_info = True # bool |  (optional)

    try:
        # Performs sentiment analysis on the given document
        api_response = api_instance.sentiment_get(id=id, text=text, url=url, extractor=extractor, language=language, return_text_info=return_text_info)
        print("The response of GeneeaApiS1Api->sentiment_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneeaApiS1Api->sentiment_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| document ID | [optional] 
 **text** | **str**| raw document text | [optional] 
 **url** | **str**| document URL | [optional] 
 **extractor** | **str**| document extractor | [optional] 
 **language** | **str**| document language | [optional] 
 **return_text_info** | **bool**|  | [optional] 

### Return type

[**SentimentResponse**](SentimentResponse.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sentiment_post**
> SentimentResponse sentiment_post(body=body)

Performs sentiment analysis on the given document

<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href=\"https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation\" target=\"_blank\">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{\"text\": \"Hello world!\"}</code></pre><pre><code>{\"url\": \"https://en.wikipedia.org/wiki/Pyrrhuloxia\"}</code></pre>

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.models.request import Request
from openapi_client.models.sentiment_response import SentimentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.geneea.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.geneea.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeneeaApiS1Api(api_client)
    body = openapi_client.Request() # Request | request (optional)

    try:
        # Performs sentiment analysis on the given document
        api_response = api_instance.sentiment_post(body=body)
        print("The response of GeneeaApiS1Api->sentiment_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneeaApiS1Api->sentiment_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Request**](Request.md)| request | [optional] 

### Return type

[**SentimentResponse**](SentimentResponse.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Description was not specified |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topic_get**
> TopicResponse topic_get(id=id, text=text, url=url, extractor=extractor, language=language, return_text_info=return_text_info)

Performs topic detection on the given document

topicGet

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.models.topic_response import TopicResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.geneea.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.geneea.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeneeaApiS1Api(api_client)
    id = 'id_example' # str | document ID (optional)
    text = 'text_example' # str | raw document text (optional)
    url = 'url_example' # str | document URL (optional)
    extractor = 'extractor_example' # str | document extractor (optional)
    language = 'language_example' # str | document language (optional)
    return_text_info = True # bool |  (optional)

    try:
        # Performs topic detection on the given document
        api_response = api_instance.topic_get(id=id, text=text, url=url, extractor=extractor, language=language, return_text_info=return_text_info)
        print("The response of GeneeaApiS1Api->topic_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneeaApiS1Api->topic_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| document ID | [optional] 
 **text** | **str**| raw document text | [optional] 
 **url** | **str**| document URL | [optional] 
 **extractor** | **str**| document extractor | [optional] 
 **language** | **str**| document language | [optional] 
 **return_text_info** | **bool**|  | [optional] 

### Return type

[**TopicResponse**](TopicResponse.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topic_post**
> TopicResponse topic_post(body=body)

Performs topic detection on the given document

<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href=\"https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation\" target=\"_blank\">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{\"text\": \"Hello world!\"}</code></pre><pre><code>{\"url\": \"https://en.wikipedia.org/wiki/Pyrrhuloxia\"}</code></pre>

### Example

* Api Key Authentication (user_key):

```python
import openapi_client
from openapi_client.models.request import Request
from openapi_client.models.topic_response import TopicResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.geneea.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.geneea.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: user_key
configuration.api_key['user_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeneeaApiS1Api(api_client)
    body = openapi_client.Request() # Request | request (optional)

    try:
        # Performs topic detection on the given document
        api_response = api_instance.topic_post(body=body)
        print("The response of GeneeaApiS1Api->topic_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneeaApiS1Api->topic_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Request**](Request.md)| request | [optional] 

### Return type

[**TopicResponse**](TopicResponse.md)

### Authorization

[user_key](../README.md#user_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Description was not specified |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

