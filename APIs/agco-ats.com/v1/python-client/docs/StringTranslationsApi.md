# openapi_client.StringTranslationsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**string_translations_get_translation**](StringTranslationsApi.md#string_translations_get_translation) | **GET** /api/v2/StringTranslations/{stringId}/{languageId} | Get a single translation based upon stringId and languageId
[**string_translations_get_translations**](StringTranslationsApi.md#string_translations_get_translations) | **GET** /api/v2/StringTranslations | Get a paged response of Global String Translations.
[**string_translations_update_translation**](StringTranslationsApi.md#string_translations_update_translation) | **PUT** /api/v2/StringTranslations/{stringId}/{languageId} | Update a string value or a state for a string translation.
[**string_translations_update_translations**](StringTranslationsApi.md#string_translations_update_translations) | **PUT** /api/v2/StringTranslations/Batch | Update corrections to string translations


# **string_translations_get_translation**
> GlobalResourcesSharedModelsStringTranslation string_translations_get_translation(string_id, language_id)

Get a single translation based upon stringId and languageId

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_string_translation import GlobalResourcesSharedModelsStringTranslation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StringTranslationsApi(api_client)
    string_id = 'string_id_example' # str | 
    language_id = 56 # int | 

    try:
        # Get a single translation based upon stringId and languageId
        api_response = api_instance.string_translations_get_translation(string_id, language_id)
        print("The response of StringTranslationsApi->string_translations_get_translation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StringTranslationsApi->string_translations_get_translation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **string_id** | **str**|  | 
 **language_id** | **int**|  | 

### Return type

[**GlobalResourcesSharedModelsStringTranslation**](GlobalResourcesSharedModelsStringTranslation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **string_translations_get_translations**
> APIIPagedResponseGlobalResourcesSharedModelsStringTranslation string_translations_get_translations(limit=limit, modified_after_timestamp=modified_after_timestamp)

Get a paged response of Global String Translations.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_global_resources_shared_models_string_translation import APIIPagedResponseGlobalResourcesSharedModelsStringTranslation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StringTranslationsApi(api_client)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    modified_after_timestamp = 'modified_after_timestamp_example' # str | Optional. Return only the StringDefinition objects that have a Timestamp value greater than that provided. This will be an encoded byte array. (optional)

    try:
        # Get a paged response of Global String Translations.
        api_response = api_instance.string_translations_get_translations(limit=limit, modified_after_timestamp=modified_after_timestamp)
        print("The response of StringTranslationsApi->string_translations_get_translations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StringTranslationsApi->string_translations_get_translations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **modified_after_timestamp** | **str**| Optional. Return only the StringDefinition objects that have a Timestamp value greater than that provided. This will be an encoded byte array. | [optional] 

### Return type

[**APIIPagedResponseGlobalResourcesSharedModelsStringTranslation**](APIIPagedResponseGlobalResourcesSharedModelsStringTranslation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **string_translations_update_translation**
> string_translations_update_translation(string_id, language_id, global_resources_shared_models_string_translation)

Update a string value or a state for a string translation.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_string_translation import GlobalResourcesSharedModelsStringTranslation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StringTranslationsApi(api_client)
    string_id = 'string_id_example' # str | 
    language_id = 56 # int | 
    global_resources_shared_models_string_translation = openapi_client.GlobalResourcesSharedModelsStringTranslation() # GlobalResourcesSharedModelsStringTranslation | 

    try:
        # Update a string value or a state for a string translation.
        api_instance.string_translations_update_translation(string_id, language_id, global_resources_shared_models_string_translation)
    except Exception as e:
        print("Exception when calling StringTranslationsApi->string_translations_update_translation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **string_id** | **str**|  | 
 **language_id** | **int**|  | 
 **global_resources_shared_models_string_translation** | [**GlobalResourcesSharedModelsStringTranslation**](GlobalResourcesSharedModelsStringTranslation.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **string_translations_update_translations**
> string_translations_update_translations(global_resources_shared_models_string_translation)

Update corrections to string translations

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_string_translation import GlobalResourcesSharedModelsStringTranslation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StringTranslationsApi(api_client)
    global_resources_shared_models_string_translation = [openapi_client.GlobalResourcesSharedModelsStringTranslation()] # List[GlobalResourcesSharedModelsStringTranslation] | 

    try:
        # Update corrections to string translations
        api_instance.string_translations_update_translations(global_resources_shared_models_string_translation)
    except Exception as e:
        print("Exception when calling StringTranslationsApi->string_translations_update_translations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_resources_shared_models_string_translation** | [**List[GlobalResourcesSharedModelsStringTranslation]**](GlobalResourcesSharedModelsStringTranslation.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

