# openapi_client.FamilyVariantApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_families_family_code_variants**](FamilyVariantApi.md#get_families_family_code_variants) | **GET** /api/rest/v1/families/{family_code}/variants | Get list of family variants
[**get_families_family_code_variants_code**](FamilyVariantApi.md#get_families_family_code_variants_code) | **GET** /api/rest/v1/families/{family_code}/variants/{code} | Get a family variant
[**patch_families_family_code_variants**](FamilyVariantApi.md#patch_families_family_code_variants) | **PATCH** /api/rest/v1/families/{family_code}/variants | Update/create several family variants
[**patch_families_family_code_variants_code**](FamilyVariantApi.md#patch_families_family_code_variants_code) | **PATCH** /api/rest/v1/families/{family_code}/variants/{code} | Update/create a family variant


# **get_families_family_code_variants**
> FamilyVariants get_families_family_code_variants(family_code, page=page, limit=limit, with_count=with_count)

Get list of family variants

This endpoint allows you to get a list of family variants. Family variants are paginated and sorted by code.

### Example


```python
import openapi_client
from openapi_client.models.family_variants import FamilyVariants
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
    api_instance = openapi_client.FamilyVariantApi(api_client)
    family_code = 'family_code_example' # str | Code of the family
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)

    try:
        # Get list of family variants
        api_response = api_instance.get_families_family_code_variants(family_code, page=page, limit=limit, with_count=with_count)
        print("The response of FamilyVariantApi->get_families_family_code_variants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FamilyVariantApi->get_families_family_code_variants: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **family_code** | **str**| Code of the family | 
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]

### Return type

[**FamilyVariants**](FamilyVariants.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, labels, variant_attribute_sets, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return family variants paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_families_family_code_variants_code**
> PostFamiliesFamilyCodeVariantsRequest get_families_family_code_variants_code(family_code, code)

Get a family variant

This endpoint allows you to get the information about a given family variant.

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
    api_instance = openapi_client.FamilyVariantApi(api_client)
    family_code = 'family_code_example' # str | Code of the family
    code = 'code_example' # str | Code of the resource

    try:
        # Get a family variant
        api_response = api_instance.get_families_family_code_variants_code(family_code, code)
        print("The response of FamilyVariantApi->get_families_family_code_variants_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FamilyVariantApi->get_families_family_code_variants_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **family_code** | **str**| Code of the family | 
 **code** | **str**| Code of the resource | 

### Return type

[**PostFamiliesFamilyCodeVariantsRequest**](PostFamiliesFamilyCodeVariantsRequest.md)

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

# **patch_families_family_code_variants**
> PatchAssetCategories200Response patch_families_family_code_variants(family_code, body=body)

Update/create several family variants

This endpoint allows you to update and/or create several family variants at once, for a given family.

### Example


```python
import openapi_client
from openapi_client.models.patch_asset_categories200_response import PatchAssetCategories200Response
from openapi_client.models.patch_families_family_code_variants_request import PatchFamiliesFamilyCodeVariantsRequest
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
    api_instance = openapi_client.FamilyVariantApi(api_client)
    family_code = 'family_code_example' # str | Code of the family
    body = openapi_client.PatchFamiliesFamilyCodeVariantsRequest() # PatchFamiliesFamilyCodeVariantsRequest |  (optional)

    try:
        # Update/create several family variants
        api_response = api_instance.patch_families_family_code_variants(family_code, body=body)
        print("The response of FamilyVariantApi->patch_families_family_code_variants:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FamilyVariantApi->patch_families_family_code_variants: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **family_code** | **str**| Code of the family | 
 **body** | [**PatchFamiliesFamilyCodeVariantsRequest**](PatchFamiliesFamilyCodeVariantsRequest.md)|  | [optional] 

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

# **patch_families_family_code_variants_code**
> patch_families_family_code_variants_code(family_code, code, body)

Update/create a family variant

This endpoint allows you to update a given family variant. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no family variant exists for the given code, it creates it.

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
    api_instance = openapi_client.FamilyVariantApi(api_client)
    family_code = 'family_code_example' # str | Code of the family
    code = 'code_example' # str | Code of the resource
    body = openapi_client.PostFamiliesFamilyCodeVariantsRequest() # PostFamiliesFamilyCodeVariantsRequest | 

    try:
        # Update/create a family variant
        api_instance.patch_families_family_code_variants_code(family_code, code, body)
    except Exception as e:
        print("Exception when calling FamilyVariantApi->patch_families_family_code_variants_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **family_code** | **str**| Code of the family | 
 **code** | **str**| Code of the resource | 
 **body** | [**PostFamiliesFamilyCodeVariantsRequest**](PostFamiliesFamilyCodeVariantsRequest.md)|  | 

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

