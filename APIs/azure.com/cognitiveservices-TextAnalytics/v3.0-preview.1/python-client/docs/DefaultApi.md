# openapi_client.DefaultApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entities_linking**](DefaultApi.md#entities_linking) | **POST** /entities/linking | Linked entities from a well-known knowledge base
[**entities_recognition_general**](DefaultApi.md#entities_recognition_general) | **POST** /entities/recognition/general | Named Entity Recognition
[**entities_recognition_pii**](DefaultApi.md#entities_recognition_pii) | **POST** /entities/recognition/pii | Entities containing personal information
[**key_phrases**](DefaultApi.md#key_phrases) | **POST** /keyPhrases | Key Phrases
[**languages**](DefaultApi.md#languages) | **POST** /languages | Detect Language
[**sentiment**](DefaultApi.md#sentiment) | **POST** /sentiment | Sentiment


# **entities_linking**
> EntityLinkingResult entities_linking(input, model_version=model_version, show_stats=show_stats)

Linked entities from a well-known knowledge base

The API returns a list of recognized entities with links to a well-known knowledge base. See the <a href=\"https://aka.ms/talangs\">Supported languages in Text Analytics API</a> for the list of enabled languages.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.entity_linking_result import EntityLinkingResult
from openapi_client.models.multi_language_batch_input import MultiLanguageBatchInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    input = openapi_client.MultiLanguageBatchInput() # MultiLanguageBatchInput | Collection of documents to analyze.
    model_version = 'model_version_example' # str | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.  (optional)
    show_stats = True # bool | (Optional) if set to true, response will contain input and document level statistics. (optional)

    try:
        # Linked entities from a well-known knowledge base
        api_response = api_instance.entities_linking(input, model_version=model_version, show_stats=show_stats)
        print("The response of DefaultApi->entities_linking:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->entities_linking: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**MultiLanguageBatchInput**](MultiLanguageBatchInput.md)| Collection of documents to analyze. | 
 **model_version** | **str**| (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.  | [optional] 
 **show_stats** | **bool**| (Optional) if set to true, response will contain input and document level statistics. | [optional] 

### Return type

[**EntityLinkingResult**](EntityLinkingResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call results in a list of recognized entities with links to a well-known knowledge base returned for each valid document |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **entities_recognition_general**
> EntitiesResult entities_recognition_general(input, model_version=model_version, show_stats=show_stats)

Named Entity Recognition

The API returns a list of general named entities in a given document. For the list of supported entity types, check <a href=\"https://aka.ms/taner\">Supported Entity Types in Text Analytics API</a>. See the <a href=\"https://aka.ms/talangs\">Supported languages in Text Analytics API</a> for the list of enabled languages.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.entities_result import EntitiesResult
from openapi_client.models.multi_language_batch_input import MultiLanguageBatchInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    input = openapi_client.MultiLanguageBatchInput() # MultiLanguageBatchInput | Collection of documents to analyze.
    model_version = 'model_version_example' # str | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.  (optional)
    show_stats = True # bool | (Optional) if set to true, response will contain input and document level statistics. (optional)

    try:
        # Named Entity Recognition
        api_response = api_instance.entities_recognition_general(input, model_version=model_version, show_stats=show_stats)
        print("The response of DefaultApi->entities_recognition_general:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->entities_recognition_general: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**MultiLanguageBatchInput**](MultiLanguageBatchInput.md)| Collection of documents to analyze. | 
 **model_version** | **str**| (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.  | [optional] 
 **show_stats** | **bool**| (Optional) if set to true, response will contain input and document level statistics. | [optional] 

### Return type

[**EntitiesResult**](EntitiesResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call results in a list of recognized entities returned for each valid document. |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **entities_recognition_pii**
> EntitiesResult entities_recognition_pii(input, model_version=model_version, show_stats=show_stats)

Entities containing personal information

The API returns a list of entities with personal information (\\\"SSN\\\", \\\"Bank Account\\\" etc) in the document. For the list of supported entity types, check <a href=\"https://aka.ms/tanerpii\">Supported Entity Types in Text Analytics API</a>. See the <a href=\"https://aka.ms/talangs\">Supported languages in Text Analytics API</a> for the list of enabled languages. 

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.entities_result import EntitiesResult
from openapi_client.models.multi_language_batch_input import MultiLanguageBatchInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    input = openapi_client.MultiLanguageBatchInput() # MultiLanguageBatchInput | Collection of documents to analyze.
    model_version = 'model_version_example' # str | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.  (optional)
    show_stats = True # bool | (Optional) if set to true, response will contain input and document level statistics. (optional)

    try:
        # Entities containing personal information
        api_response = api_instance.entities_recognition_pii(input, model_version=model_version, show_stats=show_stats)
        print("The response of DefaultApi->entities_recognition_pii:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->entities_recognition_pii: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**MultiLanguageBatchInput**](MultiLanguageBatchInput.md)| Collection of documents to analyze. | 
 **model_version** | **str**| (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.  | [optional] 
 **show_stats** | **bool**| (Optional) if set to true, response will contain input and document level statistics. | [optional] 

### Return type

[**EntitiesResult**](EntitiesResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call results in a list of entities containing personal information returned for each valid document |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **key_phrases**
> KeyPhraseResult key_phrases(input, model_version=model_version, show_stats=show_stats)

Key Phrases

The API returns a list of strings denoting the key phrases in the input text. See the <a href=\"https://aka.ms/talangs\">Supported languages in Text Analytics API</a> for the list of enabled languages.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.key_phrase_result import KeyPhraseResult
from openapi_client.models.multi_language_batch_input import MultiLanguageBatchInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    input = openapi_client.MultiLanguageBatchInput() # MultiLanguageBatchInput | Collection of documents to analyze. Documents can now contain a language field to indicate the text language
    model_version = 'model_version_example' # str | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.  (optional)
    show_stats = True # bool | (Optional) if set to true, response will contain input and document level statistics. (optional)

    try:
        # Key Phrases
        api_response = api_instance.key_phrases(input, model_version=model_version, show_stats=show_stats)
        print("The response of DefaultApi->key_phrases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->key_phrases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**MultiLanguageBatchInput**](MultiLanguageBatchInput.md)| Collection of documents to analyze. Documents can now contain a language field to indicate the text language | 
 **model_version** | **str**| (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.  | [optional] 
 **show_stats** | **bool**| (Optional) if set to true, response will contain input and document level statistics. | [optional] 

### Return type

[**KeyPhraseResult**](KeyPhraseResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response results in 0 or more key phrases identified in each valid document |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **languages**
> LanguageResult languages(input, model_version=model_version, show_stats=show_stats)

Detect Language

The API returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. See the <a href=\"https://aka.ms/talangs\">Supported languages in Text Analytics API</a> for the list of enabled languages.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.language_batch_input import LanguageBatchInput
from openapi_client.models.language_result import LanguageResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    input = openapi_client.LanguageBatchInput() # LanguageBatchInput | Collection of documents to analyze.
    model_version = 'model_version_example' # str | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.  (optional)
    show_stats = True # bool | (Optional) if set to true, response will contain input and document level statistics. (optional)

    try:
        # Detect Language
        api_response = api_instance.languages(input, model_version=model_version, show_stats=show_stats)
        print("The response of DefaultApi->languages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->languages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**LanguageBatchInput**](LanguageBatchInput.md)| Collection of documents to analyze. | 
 **model_version** | **str**| (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.  | [optional] 
 **show_stats** | **bool**| (Optional) if set to true, response will contain input and document level statistics. | [optional] 

### Return type

[**LanguageResult**](LanguageResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call results in the detected language with the highest probability for each valid document |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sentiment**
> SentimentResponse sentiment(input, model_version=model_version, show_stats=show_stats)

Sentiment

The API returns a sentiment prediction, as well as sentiment scores for each sentiment class (Positive, Negative, and Neutral) for the document and each sentence within it. See the <a href=\"https://aka.ms/talangs\">Supported languages in Text Analytics API</a> for the list of enabled languages.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.multi_language_batch_input import MultiLanguageBatchInput
from openapi_client.models.sentiment_response import SentimentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    input = openapi_client.MultiLanguageBatchInput() # MultiLanguageBatchInput | Collection of documents to analyze.
    model_version = 'model_version_example' # str | (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.  (optional)
    show_stats = True # bool | (Optional) if set to true, response will contain input and document level statistics. (optional)

    try:
        # Sentiment
        api_response = api_instance.sentiment(input, model_version=model_version, show_stats=show_stats)
        print("The response of DefaultApi->sentiment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sentiment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**MultiLanguageBatchInput**](MultiLanguageBatchInput.md)| Collection of documents to analyze. | 
 **model_version** | **str**| (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version.  | [optional] 
 **show_stats** | **bool**| (Optional) if set to true, response will contain input and document level statistics. | [optional] 

### Return type

[**SentimentResponse**](SentimentResponse.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call results in a document sentiment prediction, as well as sentiment scores for each sentiment class (Positive, Negative, and Neutral) |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

