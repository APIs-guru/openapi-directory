# openapi_client.TranslationsApi

All URIs are relative to *https://translation.googleapis.com/language/translate*

Method | HTTP request | Description
------------- | ------------- | -------------
[**language_translations_list**](TranslationsApi.md#language_translations_list) | **GET** /v2 | 
[**language_translations_translate**](TranslationsApi.md#language_translations_translate) | **POST** /v2 | 


# **language_translations_list**
> TranslationsListResponse language_translations_list(q, target, xgafv=xgafv, access_token=access_token, alt=alt, bearer_token=bearer_token, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pp=pp, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, cid=cid, format=format, model=model, source=source)



Translates input text, returning translated text.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.translations_list_response import TranslationsListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://translation.googleapis.com/language/translate
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://translation.googleapis.com/language/translate"
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
    api_instance = openapi_client.TranslationsApi(api_client)
    q = ['q_example'] # List[str] | The input text to translate. Repeat this parameter to perform translation operations on multiple text inputs.
    target = 'target_example' # str | The language to use for translation of the input text, set to one of the language codes listed in Language Support.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    bearer_token = 'bearer_token_example' # str | OAuth bearer token. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pp = True # bool | Pretty-print response. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    cid = ['cid_example'] # List[str] | The customization id for translate (optional)
    format = 'format_example' # str | The format of the source text, in either HTML (default) or plain-text. A value of \"html\" indicates HTML and a value of \"text\" indicates plain-text. (optional)
    model = 'model_example' # str | The `model` type requested for this translation. Valid values are listed in public documentation. (optional)
    source = 'source_example' # str | The language of the source text, set to one of the language codes listed in Language Support. If the source language is not specified, the API will attempt to identify the source language automatically and return it within the response. (optional)

    try:
        api_response = api_instance.language_translations_list(q, target, xgafv=xgafv, access_token=access_token, alt=alt, bearer_token=bearer_token, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pp=pp, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, cid=cid, format=format, model=model, source=source)
        print("The response of TranslationsApi->language_translations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationsApi->language_translations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**List[str]**](str.md)| The input text to translate. Repeat this parameter to perform translation operations on multiple text inputs. | 
 **target** | **str**| The language to use for translation of the input text, set to one of the language codes listed in Language Support. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **bearer_token** | **str**| OAuth bearer token. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pp** | **bool**| Pretty-print response. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **cid** | [**List[str]**](str.md)| The customization id for translate | [optional] 
 **format** | **str**| The format of the source text, in either HTML (default) or plain-text. A value of \&quot;html\&quot; indicates HTML and a value of \&quot;text\&quot; indicates plain-text. | [optional] 
 **model** | **str**| The &#x60;model&#x60; type requested for this translation. Valid values are listed in public documentation. | [optional] 
 **source** | **str**| The language of the source text, set to one of the language codes listed in Language Support. If the source language is not specified, the API will attempt to identify the source language automatically and return it within the response. | [optional] 

### Return type

[**TranslationsListResponse**](TranslationsListResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **language_translations_translate**
> TranslationsListResponse language_translations_translate(xgafv=xgafv, access_token=access_token, alt=alt, bearer_token=bearer_token, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pp=pp, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, translate_text_request=translate_text_request)



Translates input text, returning translated text.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.translate_text_request import TranslateTextRequest
from openapi_client.models.translations_list_response import TranslationsListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://translation.googleapis.com/language/translate
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://translation.googleapis.com/language/translate"
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
    api_instance = openapi_client.TranslationsApi(api_client)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    bearer_token = 'bearer_token_example' # str | OAuth bearer token. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pp = True # bool | Pretty-print response. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    translate_text_request = openapi_client.TranslateTextRequest() # TranslateTextRequest |  (optional)

    try:
        api_response = api_instance.language_translations_translate(xgafv=xgafv, access_token=access_token, alt=alt, bearer_token=bearer_token, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pp=pp, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, translate_text_request=translate_text_request)
        print("The response of TranslationsApi->language_translations_translate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationsApi->language_translations_translate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **bearer_token** | **str**| OAuth bearer token. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pp** | **bool**| Pretty-print response. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **translate_text_request** | [**TranslateTextRequest**](TranslateTextRequest.md)|  | [optional] 

### Return type

[**TranslationsListResponse**](TranslationsListResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

