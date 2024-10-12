# openapi_client.AttributeGroupApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attribute_groups_get**](AttributeGroupApi.md#attribute_groups_get) | **GET** /api/rest/v1/attribute-groups/{code} | Get an attribute group
[**attribute_groups_get_list**](AttributeGroupApi.md#attribute_groups_get_list) | **GET** /api/rest/v1/attribute-groups | Get list of attribute groups
[**attribute_groups_patch**](AttributeGroupApi.md#attribute_groups_patch) | **PATCH** /api/rest/v1/attribute-groups/{code} | Update/create an attribute group
[**attribute_groups_post**](AttributeGroupApi.md#attribute_groups_post) | **POST** /api/rest/v1/attribute-groups | Create a new attribute group
[**several_attribute_groups_patch**](AttributeGroupApi.md#several_attribute_groups_patch) | **PATCH** /api/rest/v1/attribute-groups | Update/create several attribute groups


# **attribute_groups_get**
> AttributeGroupsPostRequest attribute_groups_get(code)

Get an attribute group

This endpoint allows you to get the information about a given attribute group.

### Example


```python
import openapi_client
from openapi_client.models.attribute_groups_post_request import AttributeGroupsPostRequest
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
    api_instance = openapi_client.AttributeGroupApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Get an attribute group
        api_response = api_instance.attribute_groups_get(code)
        print("The response of AttributeGroupApi->attribute_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeGroupApi->attribute_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

[**AttributeGroupsPostRequest**](AttributeGroupsPostRequest.md)

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

# **attribute_groups_get_list**
> AttributeGroups attribute_groups_get_list(search=search, page=page, limit=limit, with_count=with_count)

Get list of attribute groups

This endpoint allows you to get a list of attribute groups. Attribute groups are paginated and sorted by code.

### Example


```python
import openapi_client
from openapi_client.models.attribute_groups import AttributeGroups
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
    api_instance = openapi_client.AttributeGroupApi(api_client)
    search = 'search_example' # str | Filter attribute groups, for more details see the <a href=\"/documentation/filter.html#filter-attribute-groups\">Filters</a> section. (optional)
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)

    try:
        # Get list of attribute groups
        api_response = api_instance.attribute_groups_get_list(search=search, page=page, limit=limit, with_count=with_count)
        print("The response of AttributeGroupApi->attribute_groups_get_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeGroupApi->attribute_groups_get_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Filter attribute groups, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#filter-attribute-groups\&quot;&gt;Filters&lt;/a&gt; section. | [optional] 
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]

### Return type

[**AttributeGroups**](AttributeGroups.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, current_page, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return attribute groups paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_groups_patch**
> attribute_groups_patch(code, body)

Update/create an attribute group

This endpoint allows you to update a given attribute group. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no attribute group exists for the given code, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.attribute_groups_post_request import AttributeGroupsPostRequest
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
    api_instance = openapi_client.AttributeGroupApi(api_client)
    code = 'code_example' # str | Code of the resource
    body = openapi_client.AttributeGroupsPostRequest() # AttributeGroupsPostRequest | 

    try:
        # Update/create an attribute group
        api_instance.attribute_groups_patch(code, body)
    except Exception as e:
        print("Exception when calling AttributeGroupApi->attribute_groups_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **body** | [**AttributeGroupsPostRequest**](AttributeGroupsPostRequest.md)|  | 

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

# **attribute_groups_post**
> attribute_groups_post(body=body)

Create a new attribute group

This endpoint allows you to create a new attribute group.

### Example


```python
import openapi_client
from openapi_client.models.attribute_groups_post_request import AttributeGroupsPostRequest
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
    api_instance = openapi_client.AttributeGroupApi(api_client)
    body = openapi_client.AttributeGroupsPostRequest() # AttributeGroupsPostRequest |  (optional)

    try:
        # Create a new attribute group
        api_instance.attribute_groups_post(body=body)
    except Exception as e:
        print("Exception when calling AttributeGroupApi->attribute_groups_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AttributeGroupsPostRequest**](AttributeGroupsPostRequest.md)|  | [optional] 

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

# **several_attribute_groups_patch**
> PatchAssetCategories200Response several_attribute_groups_patch(body=body)

Update/create several attribute groups

This endpoint allows you to update and/or create several attribute groups at once.

### Example


```python
import openapi_client
from openapi_client.models.patch_asset_categories200_response import PatchAssetCategories200Response
from openapi_client.models.several_attribute_groups_patch_request import SeveralAttributeGroupsPatchRequest
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
    api_instance = openapi_client.AttributeGroupApi(api_client)
    body = openapi_client.SeveralAttributeGroupsPatchRequest() # SeveralAttributeGroupsPatchRequest |  (optional)

    try:
        # Update/create several attribute groups
        api_response = api_instance.several_attribute_groups_patch(body=body)
        print("The response of AttributeGroupApi->several_attribute_groups_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeGroupApi->several_attribute_groups_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SeveralAttributeGroupsPatchRequest**](SeveralAttributeGroupsPatchRequest.md)|  | [optional] 

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

