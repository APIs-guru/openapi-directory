# openapi_client.ReferenceEntityRecordApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_reference_entity_records**](ReferenceEntityRecordApi.md#get_reference_entity_records) | **GET** /api/rest/v1/reference-entities/{reference_entity_code}/records | Get the list of the records of a reference entity
[**get_reference_entity_records_code**](ReferenceEntityRecordApi.md#get_reference_entity_records_code) | **GET** /api/rest/v1/reference-entities/{reference_entity_code}/records/{code} | Get a record of a given reference entity
[**patch_reference_entity_records**](ReferenceEntityRecordApi.md#patch_reference_entity_records) | **PATCH** /api/rest/v1/reference-entities/{reference_entity_code}/records | Update/create several reference entity records
[**patch_reference_entity_records_code**](ReferenceEntityRecordApi.md#patch_reference_entity_records_code) | **PATCH** /api/rest/v1/reference-entities/{reference_entity_code}/records/{code} | Update/create a record of a given reference entity


# **get_reference_entity_records**
> ReferenceEntityRecord get_reference_entity_records(reference_entity_code, search=search, channel=channel, locales=locales, search_after=search_after)

Get the list of the records of a reference entity

This endpoint allows you to get a list of records of a given reference entity. Records are paginated and can be filtered.

### Example


```python
import openapi_client
from openapi_client.models.reference_entity_record import ReferenceEntityRecord
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
    api_instance = openapi_client.ReferenceEntityRecordApi(api_client)
    reference_entity_code = 'reference_entity_code_example' # str | Code of the reference entity
    search = 'search_example' # str | Filter records of the reference entity, for more details see the <a href=\"/documentation/filter.html#filter-reference-entity-records\">Filters</a> section (optional)
    channel = 'channel_example' # str | Filter attribute values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the <a href=\"/documentation/filter.html#record-values-by-channel\">Filter attribute values by channel</a> section (optional)
    locales = 'locales_example' # str | Filter attribute values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the <a href=\"/documentation/filter.html#record-values-by-locale\">Filter attribute values by locale</a> section (optional)
    search_after = 'cursor to the first page' # str | Cursor when using the `search_after` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 'cursor to the first page')

    try:
        # Get the list of the records of a reference entity
        api_response = api_instance.get_reference_entity_records(reference_entity_code, search=search, channel=channel, locales=locales, search_after=search_after)
        print("The response of ReferenceEntityRecordApi->get_reference_entity_records:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceEntityRecordApi->get_reference_entity_records: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_entity_code** | **str**| Code of the reference entity | 
 **search** | **str**| Filter records of the reference entity, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#filter-reference-entity-records\&quot;&gt;Filters&lt;/a&gt; section | [optional] 
 **channel** | **str**| Filter attribute values to return scopable attributes for the given channel as well as the non localizable/non scopable attributes, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#record-values-by-channel\&quot;&gt;Filter attribute values by channel&lt;/a&gt; section | [optional] 
 **locales** | **str**| Filter attribute values to return localizable attributes for the given locales as well as the non localizable/non scopable attributes, for more details see the &lt;a href&#x3D;\&quot;/documentation/filter.html#record-values-by-locale\&quot;&gt;Filter attribute values by locale&lt;/a&gt; section | [optional] 
 **search_after** | **str**| Cursor when using the &#x60;search_after&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to &#39;cursor to the first page&#39;]

### Return type

[**ReferenceEntityRecord**](ReferenceEntityRecord.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the records of the given reference entity paginated |  -  |
**401** | Authentication required |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_reference_entity_records_code**
> PatchReferenceEntityRecordsRequestInner get_reference_entity_records_code(reference_entity_code, code)

Get a record of a given reference entity

This endpoint allows you to get the information about a given record for a given reference entity.

### Example


```python
import openapi_client
from openapi_client.models.patch_reference_entity_records_request_inner import PatchReferenceEntityRecordsRequestInner
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
    api_instance = openapi_client.ReferenceEntityRecordApi(api_client)
    reference_entity_code = 'reference_entity_code_example' # str | Code of the reference entity
    code = 'code_example' # str | Code of the resource

    try:
        # Get a record of a given reference entity
        api_response = api_instance.get_reference_entity_records_code(reference_entity_code, code)
        print("The response of ReferenceEntityRecordApi->get_reference_entity_records_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceEntityRecordApi->get_reference_entity_records_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_entity_code** | **str**| Code of the reference entity | 
 **code** | **str**| Code of the resource | 

### Return type

[**PatchReferenceEntityRecordsRequestInner**](PatchReferenceEntityRecordsRequestInner.md)

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

# **patch_reference_entity_records**
> List[PatchAssets200ResponseInner] patch_reference_entity_records(reference_entity_code, body)

Update/create several reference entity records

This endpoint allows you to update and/or create several records of one given reference entity at once. Learn more about <a href=\"/documentation/update.html#patch-reference-entity-record-values\">Update behavior</a>. Note that if the record does not already exist for the given reference entity, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.patch_assets200_response_inner import PatchAssets200ResponseInner
from openapi_client.models.patch_reference_entity_records_request_inner import PatchReferenceEntityRecordsRequestInner
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
    api_instance = openapi_client.ReferenceEntityRecordApi(api_client)
    reference_entity_code = 'reference_entity_code_example' # str | Code of the reference entity
    body = [openapi_client.PatchReferenceEntityRecordsRequestInner()] # List[PatchReferenceEntityRecordsRequestInner] | 

    try:
        # Update/create several reference entity records
        api_response = api_instance.patch_reference_entity_records(reference_entity_code, body)
        print("The response of ReferenceEntityRecordApi->patch_reference_entity_records:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceEntityRecordApi->patch_reference_entity_records: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_entity_code** | **str**| Code of the reference entity | 
 **body** | [**List[PatchReferenceEntityRecordsRequestInner]**](PatchReferenceEntityRecordsRequestInner.md)|  | 

### Return type

[**List[PatchAssets200ResponseInner]**](PatchAssets200ResponseInner.md)

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
**413** | Request Entity Too Large |  -  |
**415** | Unsupported Media type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_reference_entity_records_code**
> patch_reference_entity_records_code(reference_entity_code, code, body)

Update/create a record of a given reference entity

This endpoint allows you to update a given record of a given renference entity. Learn more about <a href=\"/documentation/update.html#patch-reference-entity-record-values\">Update behavior</a>. Note that if the record does not already exist for the given reference entity, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.patch_reference_entity_records_code_request import PatchReferenceEntityRecordsCodeRequest
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
    api_instance = openapi_client.ReferenceEntityRecordApi(api_client)
    reference_entity_code = 'reference_entity_code_example' # str | Code of the reference entity
    code = 'code_example' # str | Code of the resource
    body = openapi_client.PatchReferenceEntityRecordsCodeRequest() # PatchReferenceEntityRecordsCodeRequest | 

    try:
        # Update/create a record of a given reference entity
        api_instance.patch_reference_entity_records_code(reference_entity_code, code, body)
    except Exception as e:
        print("Exception when calling ReferenceEntityRecordApi->patch_reference_entity_records_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_entity_code** | **str**| Code of the reference entity | 
 **code** | **str**| Code of the resource | 
 **body** | [**PatchReferenceEntityRecordsCodeRequest**](PatchReferenceEntityRecordsCodeRequest.md)|  | 

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

