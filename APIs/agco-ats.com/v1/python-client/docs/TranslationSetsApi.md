# openapi_client.TranslationSetsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**translation_sets_delete_translation_set_attribute**](TranslationSetsApi.md#translation_sets_delete_translation_set_attribute) | **DELETE** /api/v2/TranslationSetAttributes/{ID} | Delete a set of TranslationSetAttribute object
[**translation_sets_get_source_strings**](TranslationSetsApi.md#translation_sets_get_source_strings) | **GET** /api/v2/TranslationSets/{ID}/SourceStrings | Gets the information needed to translate a string in a translation set
[**translation_sets_get_statistics**](TranslationSetsApi.md#translation_sets_get_statistics) | **GET** /api/v2/TranslationSets/{ID}/Statistics | Gets the statistics for translation sets such as the language ids and count of string definitions.
[**translation_sets_get_translation_set**](TranslationSetsApi.md#translation_sets_get_translation_set) | **GET** /api/v2/TranslationSets/{ID} | Get a TranslationSet object by its id. Related TranslationSetStrings are NOT returned.
[**translation_sets_get_translation_set_attributes**](TranslationSetsApi.md#translation_sets_get_translation_set_attributes) | **GET** /api/v2/TranslationSets/{ID}/Attributes | Get a PagedResponse of TranslationSetAttribute objects
[**translation_sets_get_translation_set_strings**](TranslationSetsApi.md#translation_sets_get_translation_set_strings) | **GET** /api/v2/TranslationSets/{ID}/Strings | Get a PagedResponse of TranslationSetString objects
[**translation_sets_get_translation_sets**](TranslationSetsApi.md#translation_sets_get_translation_sets) | **GET** /api/v2/TranslationSets | Get a PagedResponse of TranslationSet objects. Related TranslationSetStrings are NOT returned
[**translation_sets_post_translation_set_attribute**](TranslationSetsApi.md#translation_sets_post_translation_set_attribute) | **POST** /api/v2/TranslationSets/{ID}/Attributes | Create a TranslationSetAttribute object
[**translation_sets_post_translation_set_attributes**](TranslationSetsApi.md#translation_sets_post_translation_set_attributes) | **POST** /api/v2/TranslationSets/{ID}/Attributes/Batch | No Documentation Found.
[**translation_sets_update_translation_set**](TranslationSetsApi.md#translation_sets_update_translation_set) | **PUT** /api/v2/TranslationSets/{ID} | Update a Translation Set. Accepts a TranslationSet object. Only the state property may be updated.
[**translation_sets_update_translation_set_attribute**](TranslationSetsApi.md#translation_sets_update_translation_set_attribute) | **PUT** /api/v2/TranslationSetAttributes/{ID} | Update a TranslationSetAttribute object
[**translation_sets_update_translation_set_attributes**](TranslationSetsApi.md#translation_sets_update_translation_set_attributes) | **PUT** /api/v2/TranslationSetAttributes/Batch | No Documentation Found.
[**translation_sets_update_translation_set_strings**](TranslationSetsApi.md#translation_sets_update_translation_set_strings) | **PUT** /api/v2/TranslationSets/{ID}/Strings | No Documentation Found.


# **translation_sets_delete_translation_set_attribute**
> translation_sets_delete_translation_set_attribute(id)

Delete a set of TranslationSetAttribute object

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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    id = 56 # int | 

    try:
        # Delete a set of TranslationSetAttribute object
        api_instance.translation_sets_delete_translation_set_attribute(id)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_delete_translation_set_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

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

# **translation_sets_get_source_strings**
> APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString translation_sets_get_source_strings(id, limit=limit, offset=offset)

Gets the information needed to translate a string in a translation set

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_global_resources_shared_models_translation_set_source_string import APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString
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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    id = 56 # int | 
    limit = 56 # int |  (optional)
    offset = 56 # int |  (optional)

    try:
        # Gets the information needed to translate a string in a translation set
        api_response = api_instance.translation_sets_get_source_strings(id, limit=limit, offset=offset)
        print("The response of TranslationSetsApi->translation_sets_get_source_strings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_get_source_strings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **limit** | **int**|  | [optional] 
 **offset** | **int**|  | [optional] 

### Return type

[**APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString**](APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString.md)

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

# **translation_sets_get_statistics**
> GlobalResourcesSharedModelsTranslationSetStatistics translation_sets_get_statistics(id)

Gets the statistics for translation sets such as the language ids and count of string definitions.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_translation_set_statistics import GlobalResourcesSharedModelsTranslationSetStatistics
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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    id = 56 # int | 

    try:
        # Gets the statistics for translation sets such as the language ids and count of string definitions.
        api_response = api_instance.translation_sets_get_statistics(id)
        print("The response of TranslationSetsApi->translation_sets_get_statistics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_get_statistics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**GlobalResourcesSharedModelsTranslationSetStatistics**](GlobalResourcesSharedModelsTranslationSetStatistics.md)

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

# **translation_sets_get_translation_set**
> GlobalResourcesSharedModelsTranslationSet translation_sets_get_translation_set(id, include_attributes=include_attributes)

Get a TranslationSet object by its id. Related TranslationSetStrings are NOT returned.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_translation_set import GlobalResourcesSharedModelsTranslationSet
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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    id = 56 # int | 
    include_attributes = 'include_attributes_example' # str | Names of Attributes to include when retrieving this Translation set. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included. (optional)

    try:
        # Get a TranslationSet object by its id. Related TranslationSetStrings are NOT returned.
        api_response = api_instance.translation_sets_get_translation_set(id, include_attributes=include_attributes)
        print("The response of TranslationSetsApi->translation_sets_get_translation_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_get_translation_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **include_attributes** | **str**| Names of Attributes to include when retrieving this Translation set. This should be a comma-separated list. If not provided, Attributes are not included. If &#39;*&#39;, all Attributes are included. | [optional] 

### Return type

[**GlobalResourcesSharedModelsTranslationSet**](GlobalResourcesSharedModelsTranslationSet.md)

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

# **translation_sets_get_translation_set_attributes**
> APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute translation_sets_get_translation_set_attributes(id, limit=limit, offset=offset, name=name)

Get a PagedResponse of TranslationSetAttribute objects

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_global_resources_shared_models_translation_set_attribute import APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute
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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    id = 56 # int | 
    limit = 56 # int |  (optional)
    offset = 56 # int |  (optional)
    name = 'name_example' # str |  (optional)

    try:
        # Get a PagedResponse of TranslationSetAttribute objects
        api_response = api_instance.translation_sets_get_translation_set_attributes(id, limit=limit, offset=offset, name=name)
        print("The response of TranslationSetsApi->translation_sets_get_translation_set_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_get_translation_set_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **limit** | **int**|  | [optional] 
 **offset** | **int**|  | [optional] 
 **name** | **str**|  | [optional] 

### Return type

[**APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute**](APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute.md)

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

# **translation_sets_get_translation_set_strings**
> APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString translation_sets_get_translation_set_strings(id, limit=limit, offset=offset)

Get a PagedResponse of TranslationSetString objects

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_global_resources_shared_models_translation_set_string import APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString
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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    id = 56 # int | 
    limit = 56 # int |  (optional)
    offset = 56 # int |  (optional)

    try:
        # Get a PagedResponse of TranslationSetString objects
        api_response = api_instance.translation_sets_get_translation_set_strings(id, limit=limit, offset=offset)
        print("The response of TranslationSetsApi->translation_sets_get_translation_set_strings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_get_translation_set_strings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **limit** | **int**|  | [optional] 
 **offset** | **int**|  | [optional] 

### Return type

[**APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString**](APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString.md)

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

# **translation_sets_get_translation_sets**
> APIIPagedResponseGlobalResourcesSharedModelsTranslationSet translation_sets_get_translation_sets(limit=limit, offset=offset, translation_request_id=translation_request_id, state=state, string_id=string_id, language_id=language_id, include_attributes=include_attributes)

Get a PagedResponse of TranslationSet objects. Related TranslationSetStrings are NOT returned

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_global_resources_shared_models_translation_set import APIIPagedResponseGlobalResourcesSharedModelsTranslationSet
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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    limit = 56 # int |  (optional)
    offset = 56 # int |  (optional)
    translation_request_id = 56 # int |  (optional)
    state = 'state_example' # str |  (optional)
    string_id = 'string_id_example' # str |  (optional)
    language_id = 56 # int |  (optional)
    include_attributes = 'include_attributes_example' # str | Names of Attributes to include when retrieving this submission. This should be a comma-separated list. If not provided, Attributes are not included. If '*', all Attributes are included. (optional)

    try:
        # Get a PagedResponse of TranslationSet objects. Related TranslationSetStrings are NOT returned
        api_response = api_instance.translation_sets_get_translation_sets(limit=limit, offset=offset, translation_request_id=translation_request_id, state=state, string_id=string_id, language_id=language_id, include_attributes=include_attributes)
        print("The response of TranslationSetsApi->translation_sets_get_translation_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_get_translation_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] 
 **offset** | **int**|  | [optional] 
 **translation_request_id** | **int**|  | [optional] 
 **state** | **str**|  | [optional] 
 **string_id** | **str**|  | [optional] 
 **language_id** | **int**|  | [optional] 
 **include_attributes** | **str**| Names of Attributes to include when retrieving this submission. This should be a comma-separated list. If not provided, Attributes are not included. If &#39;*&#39;, all Attributes are included. | [optional] 

### Return type

[**APIIPagedResponseGlobalResourcesSharedModelsTranslationSet**](APIIPagedResponseGlobalResourcesSharedModelsTranslationSet.md)

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

# **translation_sets_post_translation_set_attribute**
> int translation_sets_post_translation_set_attribute(id, global_resources_shared_models_translation_set_attribute)

Create a TranslationSetAttribute object

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_translation_set_attribute import GlobalResourcesSharedModelsTranslationSetAttribute
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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    id = 56 # int | 
    global_resources_shared_models_translation_set_attribute = openapi_client.GlobalResourcesSharedModelsTranslationSetAttribute() # GlobalResourcesSharedModelsTranslationSetAttribute | 

    try:
        # Create a TranslationSetAttribute object
        api_response = api_instance.translation_sets_post_translation_set_attribute(id, global_resources_shared_models_translation_set_attribute)
        print("The response of TranslationSetsApi->translation_sets_post_translation_set_attribute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_post_translation_set_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **global_resources_shared_models_translation_set_attribute** | [**GlobalResourcesSharedModelsTranslationSetAttribute**](GlobalResourcesSharedModelsTranslationSetAttribute.md)|  | 

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

# **translation_sets_post_translation_set_attributes**
> translation_sets_post_translation_set_attributes(id, global_resources_shared_models_translation_set_attribute)

No Documentation Found.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_translation_set_attribute import GlobalResourcesSharedModelsTranslationSetAttribute
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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    id = 56 # int | 
    global_resources_shared_models_translation_set_attribute = [openapi_client.GlobalResourcesSharedModelsTranslationSetAttribute()] # List[GlobalResourcesSharedModelsTranslationSetAttribute] | 

    try:
        # No Documentation Found.
        api_instance.translation_sets_post_translation_set_attributes(id, global_resources_shared_models_translation_set_attribute)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_post_translation_set_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **global_resources_shared_models_translation_set_attribute** | [**List[GlobalResourcesSharedModelsTranslationSetAttribute]**](GlobalResourcesSharedModelsTranslationSetAttribute.md)|  | 

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

# **translation_sets_update_translation_set**
> translation_sets_update_translation_set(id, global_resources_shared_models_translation_set)

Update a Translation Set. Accepts a TranslationSet object. Only the state property may be updated.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_translation_set import GlobalResourcesSharedModelsTranslationSet
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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    id = 56 # int | 
    global_resources_shared_models_translation_set = openapi_client.GlobalResourcesSharedModelsTranslationSet() # GlobalResourcesSharedModelsTranslationSet | 

    try:
        # Update a Translation Set. Accepts a TranslationSet object. Only the state property may be updated.
        api_instance.translation_sets_update_translation_set(id, global_resources_shared_models_translation_set)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_update_translation_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **global_resources_shared_models_translation_set** | [**GlobalResourcesSharedModelsTranslationSet**](GlobalResourcesSharedModelsTranslationSet.md)|  | 

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

# **translation_sets_update_translation_set_attribute**
> translation_sets_update_translation_set_attribute(id, global_resources_shared_models_translation_set_attribute)

Update a TranslationSetAttribute object

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_translation_set_attribute import GlobalResourcesSharedModelsTranslationSetAttribute
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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    id = 56 # int | 
    global_resources_shared_models_translation_set_attribute = openapi_client.GlobalResourcesSharedModelsTranslationSetAttribute() # GlobalResourcesSharedModelsTranslationSetAttribute | 

    try:
        # Update a TranslationSetAttribute object
        api_instance.translation_sets_update_translation_set_attribute(id, global_resources_shared_models_translation_set_attribute)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_update_translation_set_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **global_resources_shared_models_translation_set_attribute** | [**GlobalResourcesSharedModelsTranslationSetAttribute**](GlobalResourcesSharedModelsTranslationSetAttribute.md)|  | 

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

# **translation_sets_update_translation_set_attributes**
> translation_sets_update_translation_set_attributes(global_resources_shared_models_translation_set_attribute)

No Documentation Found.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_translation_set_attribute import GlobalResourcesSharedModelsTranslationSetAttribute
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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    global_resources_shared_models_translation_set_attribute = [openapi_client.GlobalResourcesSharedModelsTranslationSetAttribute()] # List[GlobalResourcesSharedModelsTranslationSetAttribute] | 

    try:
        # No Documentation Found.
        api_instance.translation_sets_update_translation_set_attributes(global_resources_shared_models_translation_set_attribute)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_update_translation_set_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_resources_shared_models_translation_set_attribute** | [**List[GlobalResourcesSharedModelsTranslationSetAttribute]**](GlobalResourcesSharedModelsTranslationSetAttribute.md)|  | 

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

# **translation_sets_update_translation_set_strings**
> translation_sets_update_translation_set_strings(id, global_resources_shared_models_translation_set_string)

No Documentation Found.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_translation_set_string import GlobalResourcesSharedModelsTranslationSetString
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
    api_instance = openapi_client.TranslationSetsApi(api_client)
    id = 56 # int | 
    global_resources_shared_models_translation_set_string = [openapi_client.GlobalResourcesSharedModelsTranslationSetString()] # List[GlobalResourcesSharedModelsTranslationSetString] | 

    try:
        # No Documentation Found.
        api_instance.translation_sets_update_translation_set_strings(id, global_resources_shared_models_translation_set_string)
    except Exception as e:
        print("Exception when calling TranslationSetsApi->translation_sets_update_translation_set_strings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **global_resources_shared_models_translation_set_string** | [**List[GlobalResourcesSharedModelsTranslationSetString]**](GlobalResourcesSharedModelsTranslationSetString.md)|  | 

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

