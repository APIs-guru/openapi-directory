# openapi_client.TextModerationApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**text_moderation_detect_language**](TextModerationApi.md#text_moderation_detect_language) | **POST** /contentmoderator/moderate/v1.0/ProcessText/DetectLanguage | 
[**text_moderation_screen_text**](TextModerationApi.md#text_moderation_screen_text) | **POST** /contentmoderator/moderate/v1.0/ProcessText/Screen/ | Detect profanity and match against custom and shared blacklists


# **text_moderation_detect_language**
> DetectedLanguage text_moderation_detect_language(content_type, text_content)



This operation will detect the language of given input content. Returns the <a href=\"http://www-01.sil.org/iso639-3/codes.asp\">ISO 639-3 code</a> for the predominant language comprising the submitted text. Over 110 languages supported.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.detected_language import DetectedLanguage
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
    api_instance = openapi_client.TextModerationApi(api_client)
    content_type = 'content_type_example' # str | The content type.
    text_content = None # object | Content to screen.

    try:
        api_response = api_instance.text_moderation_detect_language(content_type, text_content)
        print("The response of TextModerationApi->text_moderation_detect_language:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextModerationApi->text_moderation_detect_language: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| The content type. | 
 **text_content** | **object**| Content to screen. | 

### Return type

[**DetectedLanguage**](DetectedLanguage.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: text/plain, text/html, text/xml, text/markdown
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The detected language result. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **text_moderation_screen_text**
> Screen text_moderation_screen_text(content_type, text_content, language=language, autocorrect=autocorrect, pii=pii, list_id=list_id, classify=classify)

Detect profanity and match against custom and shared blacklists

Detects profanity in more than 100 languages and match against custom and shared blacklists.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.screen import Screen
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
    api_instance = openapi_client.TextModerationApi(api_client)
    content_type = 'content_type_example' # str | The content type.
    text_content = None # object | Content to screen.
    language = 'language_example' # str | Language of the text. (optional)
    autocorrect = False # bool | Autocorrect text. (optional) (default to False)
    pii = False # bool | Detect personal identifiable information. (optional) (default to False)
    list_id = 'list_id_example' # str | The list Id. (optional)
    classify = False # bool | Classify input. (optional) (default to False)

    try:
        # Detect profanity and match against custom and shared blacklists
        api_response = api_instance.text_moderation_screen_text(content_type, text_content, language=language, autocorrect=autocorrect, pii=pii, list_id=list_id, classify=classify)
        print("The response of TextModerationApi->text_moderation_screen_text:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextModerationApi->text_moderation_screen_text: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| The content type. | 
 **text_content** | **object**| Content to screen. | 
 **language** | **str**| Language of the text. | [optional] 
 **autocorrect** | **bool**| Autocorrect text. | [optional] [default to False]
 **pii** | **bool**| Detect personal identifiable information. | [optional] [default to False]
 **list_id** | **str**| The list Id. | [optional] 
 **classify** | **bool**| Classify input. | [optional] [default to False]

### Return type

[**Screen**](Screen.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: text/plain, text/html, text/xml, text/markdown
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

