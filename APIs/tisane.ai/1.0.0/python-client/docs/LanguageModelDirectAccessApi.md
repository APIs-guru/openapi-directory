# openapi_client.LanguageModelDirectAccessApi

All URIs are relative to *https://api.tisane.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_family_details**](LanguageModelDirectAccessApi.md#get_family_details) | **GET** /lm/family | Get family details
[**list_feature_values**](LanguageModelDirectAccessApi.md#list_feature_values) | **GET** /values | List feature values
[**list_hypernyms**](LanguageModelDirectAccessApi.md#list_hypernyms) | **GET** /hypernyms | List hypernyms
[**list_hyponyms**](LanguageModelDirectAccessApi.md#list_hyponyms) | **GET** /hyponyms | List hyponyms
[**list_inflected_forms**](LanguageModelDirectAccessApi.md#list_inflected_forms) | **GET** /inflections | List inflected forms
[**list_word_senses**](LanguageModelDirectAccessApi.md#list_word_senses) | **GET** /senses | List word senses


# **get_family_details**
> GetFamilyDetails200Response get_family_details(id=id, ocp_apim_subscription_key=ocp_apim_subscription_key)

Get family details

Fetches and outputs metadata for a family from the Tisane language models.

### Example


```python
import openapi_client
from openapi_client.models.get_family_details200_response import GetFamilyDetails200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tisane.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tisane.ai"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LanguageModelDirectAccessApi(api_client)
    id = '{family_id}' # str | (Required) a numeric identifier of the family (optional)
    ocp_apim_subscription_key = '{{apiKey}}' # str | {{apiKeyDescription}} (optional)

    try:
        # Get family details
        api_response = api_instance.get_family_details(id=id, ocp_apim_subscription_key=ocp_apim_subscription_key)
        print("The response of LanguageModelDirectAccessApi->get_family_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LanguageModelDirectAccessApi->get_family_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| (Required) a numeric identifier of the family | [optional] 
 **ocp_apim_subscription_key** | **str**| {{apiKeyDescription}} | [optional] 

### Return type

[**GetFamilyDetails200Response**](GetFamilyDetails200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details of the family for &#39;plot twist&#39; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_feature_values**
> List[str] list_feature_values(language=language, type=type, description=description, ocp_apim_subscription_key=ocp_apim_subscription_key)

List feature values

Lists feature values for a particular category of features. This allows obtaining all the values such as entity types, subtypes, abuse types and tags, and more.  Returns the values as a JSON array of strings.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tisane.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tisane.ai"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LanguageModelDirectAccessApi(api_client)
    language = '{language_code}' # str | (Required) Language code (optional)
    type = '{Grammar/Style/Semantics}' # str | (Required) Feature type (optional)
    description = '{feature_list_name}' # str | (Required) Feature list name (localized) (optional)
    ocp_apim_subscription_key = '{{apiKey}}' # str | {{apiKeyDescription}} (optional)

    try:
        # List feature values
        api_response = api_instance.list_feature_values(language=language, type=type, description=description, ocp_apim_subscription_key=ocp_apim_subscription_key)
        print("The response of LanguageModelDirectAccessApi->list_feature_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LanguageModelDirectAccessApi->list_feature_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**| (Required) Language code | [optional] 
 **type** | **str**| (Required) Feature type | [optional] 
 **description** | **str**| (Required) Feature list name (localized) | [optional] 
 **ocp_apim_subscription_key** | **str**| {{apiKeyDescription}} | [optional] 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List entity subtypes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_hypernyms**
> List[List[ListHypernyms200ResponseInnerInner]] list_hypernyms(family=family, max_level=max_level, ocp_apim_subscription_key=ocp_apim_subscription_key)

List hypernyms

Lists all hypernyms related to a family. A hypernym is a parent concent. E.g. \"vehicle\" is a hypernym of \"truck\".

### Example


```python
import openapi_client
from openapi_client.models.list_hypernyms200_response_inner_inner import ListHypernyms200ResponseInnerInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tisane.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tisane.ai"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LanguageModelDirectAccessApi(api_client)
    family = '{family_id}' # str | (Required) a numeric identifier of the family (optional)
    max_level = '{max_number_of_levels}' # str | (Required) maximum distance from the family (optional)
    ocp_apim_subscription_key = '{{apiKey}}' # str | {{apiKeyDescription}} (optional)

    try:
        # List hypernyms
        api_response = api_instance.list_hypernyms(family=family, max_level=max_level, ocp_apim_subscription_key=ocp_apim_subscription_key)
        print("The response of LanguageModelDirectAccessApi->list_hypernyms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LanguageModelDirectAccessApi->list_hypernyms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **family** | **str**| (Required) a numeric identifier of the family | [optional] 
 **max_level** | **str**| (Required) maximum distance from the family | [optional] 
 **ocp_apim_subscription_key** | **str**| {{apiKeyDescription}} | [optional] 

### Return type

**List[List[ListHypernyms200ResponseInnerInner]]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Hypernyms of Darth Vader |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_hyponyms**
> list_hyponyms(family=family, max_level=max_level, ocp_apim_subscription_key=ocp_apim_subscription_key)

List hyponyms

Lists all hyponyms related to a family. A hyponym is a child concent. E.g. \"truck\" is a hypernym of \"vehicle\".

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tisane.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tisane.ai"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LanguageModelDirectAccessApi(api_client)
    family = '{family_id}' # str | (Required) a numeric identifier of the family (optional)
    max_level = '{max_number_of_levels}' # str | (Required) maximum distance from the family (optional)
    ocp_apim_subscription_key = '{{apiKey}}' # str | {{apiKeyDescription}} (optional)

    try:
        # List hyponyms
        api_instance.list_hyponyms(family=family, max_level=max_level, ocp_apim_subscription_key=ocp_apim_subscription_key)
    except Exception as e:
        print("Exception when calling LanguageModelDirectAccessApi->list_hyponyms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **family** | **str**| (Required) a numeric identifier of the family | [optional] 
 **max_level** | **str**| (Required) maximum distance from the family | [optional] 
 **ocp_apim_subscription_key** | **str**| {{apiKeyDescription}} | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_inflected_forms**
> List[ListInflectedForms200ResponseInner] list_inflected_forms(language=language, lexeme=lexeme, family=family, ocp_apim_subscription_key=ocp_apim_subscription_key)

List inflected forms

List inflected forms

### Example


```python
import openapi_client
from openapi_client.models.list_inflected_forms200_response_inner import ListInflectedForms200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tisane.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tisane.ai"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LanguageModelDirectAccessApi(api_client)
    language = '{language_code}' # str | (Required) The language code (optional)
    lexeme = '{lexeme_id}' # str | (Required) The lexeme to inspect (optional)
    family = '{family_id}' # str | (Required) The family to inspect (optional)
    ocp_apim_subscription_key = '{{apiKey}}' # str | {{apiKeyDescription}} (optional)

    try:
        # List inflected forms
        api_response = api_instance.list_inflected_forms(language=language, lexeme=lexeme, family=family, ocp_apim_subscription_key=ocp_apim_subscription_key)
        print("The response of LanguageModelDirectAccessApi->list_inflected_forms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LanguageModelDirectAccessApi->list_inflected_forms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**| (Required) The language code | [optional] 
 **lexeme** | **str**| (Required) The lexeme to inspect | [optional] 
 **family** | **str**| (Required) The family to inspect | [optional] 
 **ocp_apim_subscription_key** | **str**| {{apiKeyDescription}} | [optional] 

### Return type

[**List[ListInflectedForms200ResponseInner]**](ListInflectedForms200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inflected forms of \&quot;United States\&quot; in Russian |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_word_senses**
> List[ListWordSenses200ResponseInner] list_word_senses(language=language, word=word, ocp_apim_subscription_key=ocp_apim_subscription_key)

List word senses

Fetches and outputs all senses related to a word.

### Example


```python
import openapi_client
from openapi_client.models.list_word_senses200_response_inner import ListWordSenses200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tisane.ai
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tisane.ai"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LanguageModelDirectAccessApi(api_client)
    language = '{language_code}' # str | (Required) a standard culture code (ISO-639 language code with an optional country extension) (optional)
    word = '{word}' # str | (Required) the word to inspect (optional)
    ocp_apim_subscription_key = '{{apiKey}}' # str | {{apiKeyDescription}} (optional)

    try:
        # List word senses
        api_response = api_instance.list_word_senses(language=language, word=word, ocp_apim_subscription_key=ocp_apim_subscription_key)
        print("The response of LanguageModelDirectAccessApi->list_word_senses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LanguageModelDirectAccessApi->list_word_senses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**| (Required) a standard culture code (ISO-639 language code with an optional country extension) | [optional] 
 **word** | **str**| (Required) the word to inspect | [optional] 
 **ocp_apim_subscription_key** | **str**| {{apiKeyDescription}} | [optional] 

### Return type

[**List[ListWordSenses200ResponseInner]**](ListWordSenses200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Interpretations of \&quot;couscous\&quot; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

