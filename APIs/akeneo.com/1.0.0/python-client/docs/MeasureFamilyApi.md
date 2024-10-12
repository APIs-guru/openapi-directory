# openapi_client.MeasureFamilyApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**measure_families_get**](MeasureFamilyApi.md#measure_families_get) | **GET** /api/rest/v1/measure-families/{code} | Get a measure family
[**measure_families_get_list**](MeasureFamilyApi.md#measure_families_get_list) | **GET** /api/rest/v1/measure-families | Get list of measure familiy


# **measure_families_get**
> MeasureFamiliesGet200Response measure_families_get(code)

Get a measure family

This endpoint allows you to get the information about a given measure family.

### Example


```python
import openapi_client
from openapi_client.models.measure_families_get200_response import MeasureFamiliesGet200Response
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
    api_instance = openapi_client.MeasureFamilyApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Get a measure family
        api_response = api_instance.measure_families_get(code)
        print("The response of MeasureFamilyApi->measure_families_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeasureFamilyApi->measure_families_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

[**MeasureFamiliesGet200Response**](MeasureFamiliesGet200Response.md)

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

# **measure_families_get_list**
> MeasureFamilies measure_families_get_list()

Get list of measure familiy

This endpoint allows you to get a list of measure families. Measure families are paginated and sorted by code.

### Example


```python
import openapi_client
from openapi_client.models.measure_families import MeasureFamilies
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
    api_instance = openapi_client.MeasureFamilyApi(api_client)

    try:
        # Get list of measure familiy
        api_response = api_instance.measure_families_get_list()
        print("The response of MeasureFamilyApi->measure_families_get_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeasureFamilyApi->measure_families_get_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**MeasureFamilies**](MeasureFamilies.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, current_page, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return measure families paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

