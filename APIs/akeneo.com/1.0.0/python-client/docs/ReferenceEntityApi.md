# openapi_client.ReferenceEntityApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_reference_entities**](ReferenceEntityApi.md#get_reference_entities) | **GET** /api/rest/v1/reference-entities | Get list of reference entities
[**get_reference_entities_code**](ReferenceEntityApi.md#get_reference_entities_code) | **GET** /api/rest/v1/reference-entities/{code} | Get a reference entity
[**patch_reference_entity_code**](ReferenceEntityApi.md#patch_reference_entity_code) | **PATCH** /api/rest/v1/reference-entities/{code} | Update/create a reference entity


# **get_reference_entities**
> ReferenceEntities get_reference_entities(search_after=search_after)

Get list of reference entities

This endpoint allows you to get a list of reference entities. Reference entities are paginated.

### Example


```python
import openapi_client
from openapi_client.models.reference_entities import ReferenceEntities
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReferenceEntityApi(api_client)
    search_after = 'cursor to the first page' # str | Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 'cursor to the first page')

    try:
        # Get list of reference entities
        api_response = api_instance.get_reference_entities(search_after=search_after)
        print("The response of ReferenceEntityApi->get_reference_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceEntityApi->get_reference_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_after** | **str**| Cursor when using the &#x60;search_after&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to &#39;cursor to the first page&#39;]

### Return type

[**ReferenceEntities**](ReferenceEntities.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return reference entities paginated |  -  |
**401** | Authentication required |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_reference_entities_code**
> GetReferenceEntitiesCode200Response get_reference_entities_code(code)

Get a reference entity

This endpoint allows you to get the information about a given reference entity.

### Example


```python
import openapi_client
from openapi_client.models.get_reference_entities_code200_response import GetReferenceEntitiesCode200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReferenceEntityApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Get a reference entity
        api_response = api_instance.get_reference_entities_code(code)
        print("The response of ReferenceEntityApi->get_reference_entities_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceEntityApi->get_reference_entities_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

[**GetReferenceEntitiesCode200Response**](GetReferenceEntitiesCode200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication required |  -  |
**404** | Resource not found |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_reference_entity_code**
> patch_reference_entity_code(code, body)

Update/create a reference entity

This endpoint allows you to update a given reference entity. Note that if the reference entity does not already exist, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.patch_reference_entity_code_request import PatchReferenceEntityCodeRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReferenceEntityApi(api_client)
    code = 'code_example' # str | Code of the resource
    body = openapi_client.PatchReferenceEntityCodeRequest() # PatchReferenceEntityCodeRequest | 

    try:
        # Update/create a reference entity
        api_instance.patch_reference_entity_code(code, body)
    except Exception as e:
        print("Exception when calling ReferenceEntityApi->patch_reference_entity_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **body** | [**PatchReferenceEntityCodeRequest**](PatchReferenceEntityCodeRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message, _links

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location - URI of the created resource <br>  |
**204** | No content to return |  * Location - URI of the created resource <br>  |
**401** | Authentication required |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

