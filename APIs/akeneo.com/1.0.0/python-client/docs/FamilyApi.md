# openapi_client.FamilyApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_families**](FamilyApi.md#get_families) | **GET** /api/rest/v1/families | Get list of families
[**get_families_code**](FamilyApi.md#get_families_code) | **GET** /api/rest/v1/families/{code} | Get a family
[**patch_families**](FamilyApi.md#patch_families) | **PATCH** /api/rest/v1/families | Update/create several families
[**patch_families_code**](FamilyApi.md#patch_families_code) | **PATCH** /api/rest/v1/families/{code} | Update/create a family
[**post_families**](FamilyApi.md#post_families) | **POST** /api/rest/v1/families | Create a new family
[**post_families_family_code_variants**](FamilyApi.md#post_families_family_code_variants) | **POST** /api/rest/v1/families/{family_code}/variants | Create a new family variant


# **get_families**
> Families get_families(search=search, page=page, limit=limit, with_count=with_count)

Get list of families

This endpoint allows you to get a list of families. Families are paginated and sorted by code.

### Example


```python
import openapi_client
from openapi_client.models.families import Families
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
    api_instance = openapi_client.FamilyApi(api_client)
    search = 'search_example' # str | Filter families, for more details see the <a href=\"/documentation/filter.html#filter-families\">Filters</a> section. (optional)
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)

    try:
        # Get list of families
        api_response = api_instance.get_families(search=search, page=page, limit=limit, with_count=with_count)
        print("The response of FamilyApi->get_families:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FamilyApi->get_families: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Filter families, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#filter-families\&quot;&gt;Filters&lt;/a&gt; section. | [optional] 
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]

### Return type

[**Families**](Families.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, current_page, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return families paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_families_code**
> PostFamiliesRequest get_families_code(code)

Get a family

This endpoint allows you to get the information about a given family.

### Example


```python
import openapi_client
from openapi_client.models.post_families_request import PostFamiliesRequest
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
    api_instance = openapi_client.FamilyApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Get a family
        api_response = api_instance.get_families_code(code)
        print("The response of FamilyApi->get_families_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FamilyApi->get_families_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

[**PostFamiliesRequest**](PostFamiliesRequest.md)

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
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_families**
> PatchAssetCategories200Response patch_families(body=body)

Update/create several families

This endpoint allows you to update and/or create several families at once.

### Example


```python
import openapi_client
from openapi_client.models.patch_asset_categories200_response import PatchAssetCategories200Response
from openapi_client.models.patch_families_request import PatchFamiliesRequest
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
    api_instance = openapi_client.FamilyApi(api_client)
    body = openapi_client.PatchFamiliesRequest() # PatchFamiliesRequest |  (optional)

    try:
        # Update/create several families
        api_response = api_instance.patch_families(body=body)
        print("The response of FamilyApi->patch_families:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FamilyApi->patch_families: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PatchFamiliesRequest**](PatchFamiliesRequest.md)|  | [optional] 

### Return type

[**PatchAssetCategories200Response**](PatchAssetCategories200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, x-example-1, x-example-2, x-example-3, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**413** | Request Entity Too Large |  -  |
**415** | Unsupported Media type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_families_code**
> patch_families_code(code, body)

Update/create a family

This endpoint allows you to update a given family. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no family exists for the given code, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.post_families_request import PostFamiliesRequest
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
    api_instance = openapi_client.FamilyApi(api_client)
    code = 'code_example' # str | Code of the resource
    body = openapi_client.PostFamiliesRequest() # PostFamiliesRequest | 

    try:
        # Update/create a family
        api_instance.patch_families_code(code, body)
    except Exception as e:
        print("Exception when calling FamilyApi->patch_families_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **body** | [**PostFamiliesRequest**](PostFamiliesRequest.md)|  | 

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
**400** | Bad request |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_families**
> post_families(body=body)

Create a new family

This endpoint allows you to create a new family.

### Example


```python
import openapi_client
from openapi_client.models.post_families_request import PostFamiliesRequest
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
    api_instance = openapi_client.FamilyApi(api_client)
    body = openapi_client.PostFamiliesRequest() # PostFamiliesRequest |  (optional)

    try:
        # Create a new family
        api_instance.post_families(body=body)
    except Exception as e:
        print("Exception when calling FamilyApi->post_families: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostFamiliesRequest**](PostFamiliesRequest.md)|  | [optional] 

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
**400** | Bad request |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_families_family_code_variants**
> post_families_family_code_variants(family_code, body=body)

Create a new family variant

This endpoint allows you to create a family variant.

### Example


```python
import openapi_client
from openapi_client.models.post_families_family_code_variants_request import PostFamiliesFamilyCodeVariantsRequest
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
    api_instance = openapi_client.FamilyApi(api_client)
    family_code = 'family_code_example' # str | Code of the family
    body = openapi_client.PostFamiliesFamilyCodeVariantsRequest() # PostFamiliesFamilyCodeVariantsRequest |  (optional)

    try:
        # Create a new family variant
        api_instance.post_families_family_code_variants(family_code, body=body)
    except Exception as e:
        print("Exception when calling FamilyApi->post_families_family_code_variants: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **family_code** | **str**| Code of the family | 
 **body** | [**PostFamiliesFamilyCodeVariantsRequest**](PostFamiliesFamilyCodeVariantsRequest.md)|  | [optional] 

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
**400** | Bad request |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

