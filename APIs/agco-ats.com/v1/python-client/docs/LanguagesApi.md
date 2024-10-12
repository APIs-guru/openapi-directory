# openapi_client.LanguagesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**languages_create_language**](LanguagesApi.md#languages_create_language) | **POST** /api/v2/Languages | Add a Language to support for translations. Accepts a Language object. Returns the Id of the created object.
[**languages_delete_language**](LanguagesApi.md#languages_delete_language) | **DELETE** /api/v2/Languages/{LocaleID} | Remove a Language from those supported for translations. Marks language as deleted.
[**languages_get_language**](LanguagesApi.md#languages_get_language) | **GET** /api/v2/Languages/{LocaleID} | Get a language by its id. Returns a Language object
[**languages_get_languages**](LanguagesApi.md#languages_get_languages) | **GET** /api/v2/Languages | Get a list of the languages for which translations are supported. Returns a PagedResponse of Language objects.
[**languages_update_language**](LanguagesApi.md#languages_update_language) | **PUT** /api/v2/Languages/{LocaleID} | Update a language’s description. Accepts a Language object.


# **languages_create_language**
> int languages_create_language(global_resources_shared_models_language)

Add a Language to support for translations. Accepts a Language object. Returns the Id of the created object.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_language import GlobalResourcesSharedModelsLanguage
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
    api_instance = openapi_client.LanguagesApi(api_client)
    global_resources_shared_models_language = openapi_client.GlobalResourcesSharedModelsLanguage() # GlobalResourcesSharedModelsLanguage | 

    try:
        # Add a Language to support for translations. Accepts a Language object. Returns the Id of the created object.
        api_response = api_instance.languages_create_language(global_resources_shared_models_language)
        print("The response of LanguagesApi->languages_create_language:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LanguagesApi->languages_create_language: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_resources_shared_models_language** | [**GlobalResourcesSharedModelsLanguage**](GlobalResourcesSharedModelsLanguage.md)|  | 

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **languages_delete_language**
> languages_delete_language(locale_id)

Remove a Language from those supported for translations. Marks language as deleted.

No Documentation Found.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.LanguagesApi(api_client)
    locale_id = 56 # int | 

    try:
        # Remove a Language from those supported for translations. Marks language as deleted.
        api_instance.languages_delete_language(locale_id)
    except Exception as e:
        print("Exception when calling LanguagesApi->languages_delete_language: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locale_id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **languages_get_language**
> GlobalResourcesSharedModelsLanguage languages_get_language(locale_id)

Get a language by its id. Returns a Language object

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_language import GlobalResourcesSharedModelsLanguage
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
    api_instance = openapi_client.LanguagesApi(api_client)
    locale_id = 56 # int | 

    try:
        # Get a language by its id. Returns a Language object
        api_response = api_instance.languages_get_language(locale_id)
        print("The response of LanguagesApi->languages_get_language:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LanguagesApi->languages_get_language: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locale_id** | **int**|  | 

### Return type

[**GlobalResourcesSharedModelsLanguage**](GlobalResourcesSharedModelsLanguage.md)

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

# **languages_get_languages**
> APIIPagedResponseGlobalResourcesSharedModelsLanguage languages_get_languages(limit=limit, offset=offset, include_deleted=include_deleted)

Get a list of the languages for which translations are supported. Returns a PagedResponse of Language objects.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_global_resources_shared_models_language import APIIPagedResponseGlobalResourcesSharedModelsLanguage
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
    api_instance = openapi_client.LanguagesApi(api_client)
    limit = 56 # int | limit the number of Language objects returned. Optional (defaults to 10). (optional)
    offset = 56 # int | the number of Language objects to skip. Optional (defaults to 0). (optional)
    include_deleted = True # bool | whether to include languages marked as deleted. Defaults to false (optional)

    try:
        # Get a list of the languages for which translations are supported. Returns a PagedResponse of Language objects.
        api_response = api_instance.languages_get_languages(limit=limit, offset=offset, include_deleted=include_deleted)
        print("The response of LanguagesApi->languages_get_languages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LanguagesApi->languages_get_languages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| limit the number of Language objects returned. Optional (defaults to 10). | [optional] 
 **offset** | **int**| the number of Language objects to skip. Optional (defaults to 0). | [optional] 
 **include_deleted** | **bool**| whether to include languages marked as deleted. Defaults to false | [optional] 

### Return type

[**APIIPagedResponseGlobalResourcesSharedModelsLanguage**](APIIPagedResponseGlobalResourcesSharedModelsLanguage.md)

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

# **languages_update_language**
> languages_update_language(locale_id, global_resources_shared_models_language)

Update a language’s description. Accepts a Language object.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_language import GlobalResourcesSharedModelsLanguage
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
    api_instance = openapi_client.LanguagesApi(api_client)
    locale_id = 56 # int | 
    global_resources_shared_models_language = openapi_client.GlobalResourcesSharedModelsLanguage() # GlobalResourcesSharedModelsLanguage | 

    try:
        # Update a language’s description. Accepts a Language object.
        api_instance.languages_update_language(locale_id, global_resources_shared_models_language)
    except Exception as e:
        print("Exception when calling LanguagesApi->languages_update_language: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locale_id** | **int**|  | 
 **global_resources_shared_models_language** | [**GlobalResourcesSharedModelsLanguage**](GlobalResourcesSharedModelsLanguage.md)|  | 

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

