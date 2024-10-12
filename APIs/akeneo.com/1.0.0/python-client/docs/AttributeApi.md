# openapi_client.AttributeApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_attributes**](AttributeApi.md#get_attributes) | **GET** /api/rest/v1/attributes | Get list of attributes
[**get_attributes_code**](AttributeApi.md#get_attributes_code) | **GET** /api/rest/v1/attributes/{code} | Get an attribute
[**patch_attributes**](AttributeApi.md#patch_attributes) | **PATCH** /api/rest/v1/attributes | Update/create several attributes
[**patch_attributes_code**](AttributeApi.md#patch_attributes_code) | **PATCH** /api/rest/v1/attributes/{code} | Update/create an attribute
[**post_attributes**](AttributeApi.md#post_attributes) | **POST** /api/rest/v1/attributes | Create a new attribute


# **get_attributes**
> Attributes get_attributes(search=search, page=page, limit=limit, with_count=with_count, with_table_select_options=with_table_select_options)

Get list of attributes

This endpoint allows you to get a list of attributes. Attributes are paginated and sorted by code.

### Example


```python
import openapi_client
from openapi_client.models.attributes import Attributes
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
    api_instance = openapi_client.AttributeApi(api_client)
    search = 'search_example' # str | Filter attributes, for more details see the <a href=\"/documentation/filter.html#filter-attributes\">Filters</a> section. (optional)
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)
    with_table_select_options = False # bool | Return the options of 'select' column types (of a table attribute) in the response. (Only available since the 7.0 version) (optional) (default to False)

    try:
        # Get list of attributes
        api_response = api_instance.get_attributes(search=search, page=page, limit=limit, with_count=with_count, with_table_select_options=with_table_select_options)
        print("The response of AttributeApi->get_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->get_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Filter attributes, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#filter-attributes\&quot;&gt;Filters&lt;/a&gt; section. | [optional] 
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]
 **with_table_select_options** | **bool**| Return the options of &#39;select&#39; column types (of a table attribute) in the response. (Only available since the 7.0 version) | [optional] [default to False]

### Return type

[**Attributes**](Attributes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, current_page, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return attributes paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_attributes_code**
> PostAttributesRequest get_attributes_code(code, with_table_select_options=with_table_select_options)

Get an attribute

This endpoint allows you to get the information about a given attribute.

### Example


```python
import openapi_client
from openapi_client.models.post_attributes_request import PostAttributesRequest
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
    api_instance = openapi_client.AttributeApi(api_client)
    code = 'code_example' # str | Code of the resource
    with_table_select_options = False # bool | Return the options of 'select' column types (of a table attribute) in the response. (Only available since the 7.0 version) (optional) (default to False)

    try:
        # Get an attribute
        api_response = api_instance.get_attributes_code(code, with_table_select_options=with_table_select_options)
        print("The response of AttributeApi->get_attributes_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->get_attributes_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **with_table_select_options** | **bool**| Return the options of &#39;select&#39; column types (of a table attribute) in the response. (Only available since the 7.0 version) | [optional] [default to False]

### Return type

[**PostAttributesRequest**](PostAttributesRequest.md)

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

# **patch_attributes**
> PatchAssetCategories200Response patch_attributes(body=body)

Update/create several attributes

This endpoint allows you to update and/or create several attributes at once.

### Example


```python
import openapi_client
from openapi_client.models.patch_asset_categories200_response import PatchAssetCategories200Response
from openapi_client.models.patch_attributes_request import PatchAttributesRequest
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
    api_instance = openapi_client.AttributeApi(api_client)
    body = openapi_client.PatchAttributesRequest() # PatchAttributesRequest |  (optional)

    try:
        # Update/create several attributes
        api_response = api_instance.patch_attributes(body=body)
        print("The response of AttributeApi->patch_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->patch_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PatchAttributesRequest**](PatchAttributesRequest.md)|  | [optional] 

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

# **patch_attributes_code**
> patch_attributes_code(code, body)

Update/create an attribute

This endpoint allows you to update a given attribute. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no attribute exists for the given code, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.post_attributes_request import PostAttributesRequest
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
    api_instance = openapi_client.AttributeApi(api_client)
    code = 'code_example' # str | Code of the resource
    body = openapi_client.PostAttributesRequest() # PostAttributesRequest | 

    try:
        # Update/create an attribute
        api_instance.patch_attributes_code(code, body)
    except Exception as e:
        print("Exception when calling AttributeApi->patch_attributes_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 
 **body** | [**PostAttributesRequest**](PostAttributesRequest.md)|  | 

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

# **post_attributes**
> post_attributes(body=body)

Create a new attribute

This endpoint allows you to create a new attribute.

### Example


```python
import openapi_client
from openapi_client.models.post_attributes_request import PostAttributesRequest
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
    api_instance = openapi_client.AttributeApi(api_client)
    body = openapi_client.PostAttributesRequest() # PostAttributesRequest |  (optional)

    try:
        # Create a new attribute
        api_instance.post_attributes(body=body)
    except Exception as e:
        print("Exception when calling AttributeApi->post_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostAttributesRequest**](PostAttributesRequest.md)|  | [optional] 

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

