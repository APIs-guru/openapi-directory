# openapi_client.AttributeOptionApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_attributes_attribute_code_options**](AttributeOptionApi.md#get_attributes_attribute_code_options) | **GET** /api/rest/v1/attributes/{attribute_code}/options | Get list of attribute options
[**get_attributes_attribute_code_options_code**](AttributeOptionApi.md#get_attributes_attribute_code_options_code) | **GET** /api/rest/v1/attributes/{attribute_code}/options/{code} | Get an attribute option
[**patch_attributes_attribute_code_options**](AttributeOptionApi.md#patch_attributes_attribute_code_options) | **PATCH** /api/rest/v1/attributes/{attribute_code}/options | Update/create several attribute options
[**patch_attributes_attribute_code_options_code**](AttributeOptionApi.md#patch_attributes_attribute_code_options_code) | **PATCH** /api/rest/v1/attributes/{attribute_code}/options/{code} | Update/create an attribute option
[**post_attributes_attribute_code_options**](AttributeOptionApi.md#post_attributes_attribute_code_options) | **POST** /api/rest/v1/attributes/{attribute_code}/options | Create a new attribute option


# **get_attributes_attribute_code_options**
> AttributeOptions get_attributes_attribute_code_options(attribute_code, page=page, limit=limit, with_count=with_count)

Get list of attribute options

This endpoint allows you to get a list of attribute options. Attribute options are paginated and sorted by code.

### Example


```python
import openapi_client
from openapi_client.models.attribute_options import AttributeOptions
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
    api_instance = openapi_client.AttributeOptionApi(api_client)
    attribute_code = 'attribute_code_example' # str | Code of the attribute
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)

    try:
        # Get list of attribute options
        api_response = api_instance.get_attributes_attribute_code_options(attribute_code, page=page, limit=limit, with_count=with_count)
        print("The response of AttributeOptionApi->get_attributes_attribute_code_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeOptionApi->get_attributes_attribute_code_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attribute_code** | **str**| Code of the attribute | 
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]

### Return type

[**AttributeOptions**](AttributeOptions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, current_page, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return attribute options paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_attributes_attribute_code_options_code**
> PostAttributesAttributeCodeOptionsRequest get_attributes_attribute_code_options_code(attribute_code, code)

Get an attribute option

This endpoint allows you to get the information about a given attribute option.

### Example


```python
import openapi_client
from openapi_client.models.post_attributes_attribute_code_options_request import PostAttributesAttributeCodeOptionsRequest
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
    api_instance = openapi_client.AttributeOptionApi(api_client)
    attribute_code = 'attribute_code_example' # str | Code of the attribute
    code = 'code_example' # str | Code of the resource

    try:
        # Get an attribute option
        api_response = api_instance.get_attributes_attribute_code_options_code(attribute_code, code)
        print("The response of AttributeOptionApi->get_attributes_attribute_code_options_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeOptionApi->get_attributes_attribute_code_options_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attribute_code** | **str**| Code of the attribute | 
 **code** | **str**| Code of the resource | 

### Return type

[**PostAttributesAttributeCodeOptionsRequest**](PostAttributesAttributeCodeOptionsRequest.md)

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

# **patch_attributes_attribute_code_options**
> PatchAssetCategories200Response patch_attributes_attribute_code_options(attribute_code, body=body)

Update/create several attribute options

This endpoint allows you to update several attribute options at once.

### Example


```python
import openapi_client
from openapi_client.models.patch_asset_categories200_response import PatchAssetCategories200Response
from openapi_client.models.patch_attributes_attribute_code_options_request import PatchAttributesAttributeCodeOptionsRequest
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
    api_instance = openapi_client.AttributeOptionApi(api_client)
    attribute_code = 'attribute_code_example' # str | Code of the attribute
    body = openapi_client.PatchAttributesAttributeCodeOptionsRequest() # PatchAttributesAttributeCodeOptionsRequest |  (optional)

    try:
        # Update/create several attribute options
        api_response = api_instance.patch_attributes_attribute_code_options(attribute_code, body=body)
        print("The response of AttributeOptionApi->patch_attributes_attribute_code_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeOptionApi->patch_attributes_attribute_code_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attribute_code** | **str**| Code of the attribute | 
 **body** | [**PatchAttributesAttributeCodeOptionsRequest**](PatchAttributesAttributeCodeOptionsRequest.md)|  | [optional] 

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

# **patch_attributes_attribute_code_options_code**
> patch_attributes_attribute_code_options_code(attribute_code, code, body)

Update/create an attribute option

This endpoint allows you to update a given attribute option. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no attribute option exists for the given code, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.post_attributes_attribute_code_options_request import PostAttributesAttributeCodeOptionsRequest
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
    api_instance = openapi_client.AttributeOptionApi(api_client)
    attribute_code = 'attribute_code_example' # str | Code of the attribute
    code = 'code_example' # str | Code of the resource
    body = openapi_client.PostAttributesAttributeCodeOptionsRequest() # PostAttributesAttributeCodeOptionsRequest | 

    try:
        # Update/create an attribute option
        api_instance.patch_attributes_attribute_code_options_code(attribute_code, code, body)
    except Exception as e:
        print("Exception when calling AttributeOptionApi->patch_attributes_attribute_code_options_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attribute_code** | **str**| Code of the attribute | 
 **code** | **str**| Code of the resource | 
 **body** | [**PostAttributesAttributeCodeOptionsRequest**](PostAttributesAttributeCodeOptionsRequest.md)|  | 

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

# **post_attributes_attribute_code_options**
> post_attributes_attribute_code_options(attribute_code, body=body)

Create a new attribute option

This endpoint allows you to create a new attribute option.

### Example


```python
import openapi_client
from openapi_client.models.post_attributes_attribute_code_options_request import PostAttributesAttributeCodeOptionsRequest
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
    api_instance = openapi_client.AttributeOptionApi(api_client)
    attribute_code = 'attribute_code_example' # str | Code of the attribute
    body = openapi_client.PostAttributesAttributeCodeOptionsRequest() # PostAttributesAttributeCodeOptionsRequest |  (optional)

    try:
        # Create a new attribute option
        api_instance.post_attributes_attribute_code_options(attribute_code, body=body)
    except Exception as e:
        print("Exception when calling AttributeOptionApi->post_attributes_attribute_code_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attribute_code** | **str**| Code of the attribute | 
 **body** | [**PostAttributesAttributeCodeOptionsRequest**](PostAttributesAttributeCodeOptionsRequest.md)|  | [optional] 

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

