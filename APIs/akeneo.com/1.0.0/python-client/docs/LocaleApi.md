# openapi_client.LocaleApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_locales**](LocaleApi.md#get_locales) | **GET** /api/rest/v1/locales | Get a list of locales
[**get_locales_code**](LocaleApi.md#get_locales_code) | **GET** /api/rest/v1/locales/{code} | Get a locale


# **get_locales**
> Locales get_locales(search=search, page=page, limit=limit, with_count=with_count)

Get a list of locales

This endpoint allows you to get a list of locales. Locales are paginated and sorted by code.

### Example


```python
import openapi_client
from openapi_client.models.locales import Locales
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
    api_instance = openapi_client.LocaleApi(api_client)
    search = 'search_example' # str | Filter locales, for more details see the <a href=\"/documentation/filter.html\">Filters</a> section (optional)
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)

    try:
        # Get a list of locales
        api_response = api_instance.get_locales(search=search, page=page, limit=limit, with_count=with_count)
        print("The response of LocaleApi->get_locales:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocaleApi->get_locales: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Filter locales, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html\&quot;&gt;Filters&lt;/a&gt; section | [optional] 
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]

### Return type

[**Locales**](Locales.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, current_page, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return locales paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_locales_code**
> GetLocalesCode200Response get_locales_code(code)

Get a locale

This endpoint allows you to get the information about a given locale.

### Example


```python
import openapi_client
from openapi_client.models.get_locales_code200_response import GetLocalesCode200Response
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
    api_instance = openapi_client.LocaleApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Get a locale
        api_response = api_instance.get_locales_code(code)
        print("The response of LocaleApi->get_locales_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocaleApi->get_locales_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

[**GetLocalesCode200Response**](GetLocalesCode200Response.md)

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

