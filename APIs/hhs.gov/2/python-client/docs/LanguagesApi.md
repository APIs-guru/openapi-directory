# openapi_client.LanguagesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resources_languages_id_json_get**](LanguagesApi.md#resources_languages_id_json_get) | **GET** /resources/languages/{id}.json | Get Language by ID
[**resources_languages_json_get**](LanguagesApi.md#resources_languages_json_get) | **GET** /resources/languages.json | Get Languages


# **resources_languages_id_json_get**
> List[LanguageWrapped] resources_languages_id_json_get(id)

Get Language by ID

Information about a specific language

### Example


```python
import openapi_client
from openapi_client.models.language_wrapped import LanguageWrapped
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LanguagesApi(api_client)
    id = 56 # int | The id of the language to look up

    try:
        # Get Language by ID
        api_response = api_instance.resources_languages_id_json_get(id)
        print("The response of LanguagesApi->resources_languages_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LanguagesApi->resources_languages_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the language to look up | 

### Return type

[**List[LanguageWrapped]**](LanguageWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the Language identified by the &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resources_languages_json_get**
> List[LanguageWrapped] resources_languages_json_get(max=max, offset=offset, sort=sort)

Get Languages

Language Listings

### Example


```python
import openapi_client
from openapi_client.models.language_wrapped import LanguageWrapped
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LanguagesApi(api_client)
    max = 56 # int | The maximum number of records to return (optional)
    offset = 56 # int | Return records starting at the offset index. (optional)
    sort = 'sort_example' # str | The name of the property to which sorting will be applied (optional)

    try:
        # Get Languages
        api_response = api_instance.resources_languages_json_get(max=max, offset=offset, sort=sort)
        print("The response of LanguagesApi->resources_languages_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LanguagesApi->resources_languages_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **max** | **int**| The maximum number of records to return | [optional] 
 **offset** | **int**| Return records starting at the offset index. | [optional] 
 **sort** | **str**| The name of the property to which sorting will be applied | [optional] 

### Return type

[**List[LanguageWrapped]**](LanguageWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list Languages. |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

