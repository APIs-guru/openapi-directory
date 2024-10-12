# openapi_client.StringDefinitionsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**string_definitions_get_definition**](StringDefinitionsApi.md#string_definitions_get_definition) | **GET** /api/v2/StringDefinitions/{ID} | Get a paged response of Global String Definitions.
[**string_definitions_get_definitions**](StringDefinitionsApi.md#string_definitions_get_definitions) | **GET** /api/v2/StringDefinitions | Get a paged response of Global String Definitions.
[**string_definitions_post_definition**](StringDefinitionsApi.md#string_definitions_post_definition) | **POST** /api/v2/StringDefinitions/Batch | Create StringDefinition object. The originating translation must be provided. Accepts an array of StringDefinition objects. Returns nothing.
[**string_definitions_update_definitions**](StringDefinitionsApi.md#string_definitions_update_definitions) | **PUT** /api/v2/StringDefinitions/Batch | Update StringDefinition objects. Accepts an array of StringDefinition objects. This endpoint will add StringDefinitionChange objects to the database. The DescriptionForTranslator may not be modified after a String is submitted for translation.


# **string_definitions_get_definition**
> GlobalResourcesSharedModelsStringDefinition string_definitions_get_definition(id, include_translations=include_translations, include_deleted_languages=include_deleted_languages, language_ids=language_ids)

Get a paged response of Global String Definitions.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_string_definition import GlobalResourcesSharedModelsStringDefinition
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
    api_instance = openapi_client.StringDefinitionsApi(api_client)
    id = 'id_example' # str | 
    include_translations = True # bool | Optional. Indicates whether to include the StringTranslations for the StringDefinition. Defaults to false. (optional)
    include_deleted_languages = True # bool | Optional. Indicates whether to include languages marked as deleted. includeTranslations must be true. Defaults to false. (optional)
    language_ids = 'language_ids_example' # str | Optional. A comma-delimited list of language ids. Only StringTranslation objects with a matching language id will be returned. Optional. By default all locales are returned. includeTranslations must be true. The StringDefinition is still returned even if the filtered translations list is empty. (optional)

    try:
        # Get a paged response of Global String Definitions.
        api_response = api_instance.string_definitions_get_definition(id, include_translations=include_translations, include_deleted_languages=include_deleted_languages, language_ids=language_ids)
        print("The response of StringDefinitionsApi->string_definitions_get_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StringDefinitionsApi->string_definitions_get_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **include_translations** | **bool**| Optional. Indicates whether to include the StringTranslations for the StringDefinition. Defaults to false. | [optional] 
 **include_deleted_languages** | **bool**| Optional. Indicates whether to include languages marked as deleted. includeTranslations must be true. Defaults to false. | [optional] 
 **language_ids** | **str**| Optional. A comma-delimited list of language ids. Only StringTranslation objects with a matching language id will be returned. Optional. By default all locales are returned. includeTranslations must be true. The StringDefinition is still returned even if the filtered translations list is empty. | [optional] 

### Return type

[**GlobalResourcesSharedModelsStringDefinition**](GlobalResourcesSharedModelsStringDefinition.md)

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

# **string_definitions_get_definitions**
> APIIPagedResponseGlobalResourcesSharedModelsStringDefinition string_definitions_get_definitions(limit=limit, modified_after_timestamp=modified_after_timestamp, include_translations=include_translations, string_text=string_text, description_text=description_text, use_full_text=use_full_text, include_deleted_languages=include_deleted_languages, language_ids=language_ids, string_ids=string_ids, matching_translations_only=matching_translations_only)

Get a paged response of Global String Definitions.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_global_resources_shared_models_string_definition import APIIPagedResponseGlobalResourcesSharedModelsStringDefinition
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
    api_instance = openapi_client.StringDefinitionsApi(api_client)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. Ignored if 'stringIds' is provided. (optional)
    modified_after_timestamp = 'modified_after_timestamp_example' # str | Optional. Return only the StringDefinition objects that have a Timestamp value greater than that provided. This will be an encoded byte array. (optional)
    include_translations = True # bool | Optional. Indicates whether to include the StringTranslations for the StringDefinition. Defaults to false. (optional)
    string_text = 'string_text_example' # str | Optional. The text for which to search in the StringDefinition object’s translations. Only StringDefinition objects for matching StringTranslation objects are returned. Does not filter if no value is provided. Supports beginning and/or ending wildcards. includeTranslations must be true. (optional)
    description_text = 'description_text_example' # str | Optional. The text for which to search in the StringDefinition description field. Only matching objects are returned. Does not filter if no value is provided. Supports beginning and/or ending wildcards. (optional)
    use_full_text = True # bool | Optional. This flag is used to determin whether to use the FullText Search or not. (optional)
    include_deleted_languages = True # bool | Optional. Indicates whether to include languages marked as deleted. includeTranslations must be true. Defaults to false. (optional)
    language_ids = 'language_ids_example' # str | Optional. A comma-delimited list of language ids. Only StringTranslation objects with a matching language id will be returned. Optional. By default all locales are returned. includeTranslations must be true. The StringDefinition is still returned even if the filtered translations list is empty. (optional)
    string_ids = 'string_ids_example' # str | Optional. A comma-delimited list of string ids. Up to 40 string IDs may be provided. May not be used with 'modifiedAfterTimestamp', 'stringText', 'descriptionText', or 'useFullText'. (optional)
    matching_translations_only = True # bool | Optional. If false, all translations for returned String Definitions are included. Must be used with 'stringText' provided and 'includeTranslations' = true. (optional)

    try:
        # Get a paged response of Global String Definitions.
        api_response = api_instance.string_definitions_get_definitions(limit=limit, modified_after_timestamp=modified_after_timestamp, include_translations=include_translations, string_text=string_text, description_text=description_text, use_full_text=use_full_text, include_deleted_languages=include_deleted_languages, language_ids=language_ids, string_ids=string_ids, matching_translations_only=matching_translations_only)
        print("The response of StringDefinitionsApi->string_definitions_get_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StringDefinitionsApi->string_definitions_get_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit. The default page limit is 10. Ignored if &#39;stringIds&#39; is provided. | [optional] 
 **modified_after_timestamp** | **str**| Optional. Return only the StringDefinition objects that have a Timestamp value greater than that provided. This will be an encoded byte array. | [optional] 
 **include_translations** | **bool**| Optional. Indicates whether to include the StringTranslations for the StringDefinition. Defaults to false. | [optional] 
 **string_text** | **str**| Optional. The text for which to search in the StringDefinition object’s translations. Only StringDefinition objects for matching StringTranslation objects are returned. Does not filter if no value is provided. Supports beginning and/or ending wildcards. includeTranslations must be true. | [optional] 
 **description_text** | **str**| Optional. The text for which to search in the StringDefinition description field. Only matching objects are returned. Does not filter if no value is provided. Supports beginning and/or ending wildcards. | [optional] 
 **use_full_text** | **bool**| Optional. This flag is used to determin whether to use the FullText Search or not. | [optional] 
 **include_deleted_languages** | **bool**| Optional. Indicates whether to include languages marked as deleted. includeTranslations must be true. Defaults to false. | [optional] 
 **language_ids** | **str**| Optional. A comma-delimited list of language ids. Only StringTranslation objects with a matching language id will be returned. Optional. By default all locales are returned. includeTranslations must be true. The StringDefinition is still returned even if the filtered translations list is empty. | [optional] 
 **string_ids** | **str**| Optional. A comma-delimited list of string ids. Up to 40 string IDs may be provided. May not be used with &#39;modifiedAfterTimestamp&#39;, &#39;stringText&#39;, &#39;descriptionText&#39;, or &#39;useFullText&#39;. | [optional] 
 **matching_translations_only** | **bool**| Optional. If false, all translations for returned String Definitions are included. Must be used with &#39;stringText&#39; provided and &#39;includeTranslations&#39; &#x3D; true. | [optional] 

### Return type

[**APIIPagedResponseGlobalResourcesSharedModelsStringDefinition**](APIIPagedResponseGlobalResourcesSharedModelsStringDefinition.md)

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

# **string_definitions_post_definition**
> string_definitions_post_definition(global_resources_shared_models_string_definition)

Create StringDefinition object. The originating translation must be provided. Accepts an array of StringDefinition objects. Returns nothing.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_string_definition import GlobalResourcesSharedModelsStringDefinition
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
    api_instance = openapi_client.StringDefinitionsApi(api_client)
    global_resources_shared_models_string_definition = [openapi_client.GlobalResourcesSharedModelsStringDefinition()] # List[GlobalResourcesSharedModelsStringDefinition] | The StringDefinition Object array, along with originating translation.

    try:
        # Create StringDefinition object. The originating translation must be provided. Accepts an array of StringDefinition objects. Returns nothing.
        api_instance.string_definitions_post_definition(global_resources_shared_models_string_definition)
    except Exception as e:
        print("Exception when calling StringDefinitionsApi->string_definitions_post_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_resources_shared_models_string_definition** | [**List[GlobalResourcesSharedModelsStringDefinition]**](GlobalResourcesSharedModelsStringDefinition.md)| The StringDefinition Object array, along with originating translation. | 

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

# **string_definitions_update_definitions**
> string_definitions_update_definitions(global_resources_shared_models_string_definition)

Update StringDefinition objects. Accepts an array of StringDefinition objects. This endpoint will add StringDefinitionChange objects to the database. The DescriptionForTranslator may not be modified after a String is submitted for translation.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_string_definition import GlobalResourcesSharedModelsStringDefinition
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
    api_instance = openapi_client.StringDefinitionsApi(api_client)
    global_resources_shared_models_string_definition = [openapi_client.GlobalResourcesSharedModelsStringDefinition()] # List[GlobalResourcesSharedModelsStringDefinition] | The Array of Definitions to update

    try:
        # Update StringDefinition objects. Accepts an array of StringDefinition objects. This endpoint will add StringDefinitionChange objects to the database. The DescriptionForTranslator may not be modified after a String is submitted for translation.
        api_instance.string_definitions_update_definitions(global_resources_shared_models_string_definition)
    except Exception as e:
        print("Exception when calling StringDefinitionsApi->string_definitions_update_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_resources_shared_models_string_definition** | [**List[GlobalResourcesSharedModelsStringDefinition]**](GlobalResourcesSharedModelsStringDefinition.md)| The Array of Definitions to update | 

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

