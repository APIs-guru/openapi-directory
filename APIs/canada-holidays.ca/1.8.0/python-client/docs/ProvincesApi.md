# openapi_client.ProvincesApi

All URIs are relative to *https://canada-holidays.ca*

Method | HTTP request | Description
------------- | ------------- | -------------
[**province**](ProvincesApi.md#province) | **GET** /api/v1/provinces/{provinceId} | Get a province or territory by abbreviation
[**provinces**](ProvincesApi.md#provinces) | **GET** /api/v1/provinces | Get all provinces


# **province**
> Province200Response province(province_id, year=year, optional=optional)

Get a province or territory by abbreviation

Returns a Canadian province or territory with its associated holidays. Returns a 404 response for invalid abbreviations.

### Example


```python
import openapi_client
from openapi_client.models.province200_response import Province200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canada-holidays.ca
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://canada-holidays.ca"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProvincesApi(api_client)
    province_id = 'MB' # str | A Canadian province abbreviation
    year = 2023 # int | A calendar year (optional) (default to 2023)
    optional = false # str | A boolean parameter (AB and BC only). If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC. (optional) (default to false)

    try:
        # Get a province or territory by abbreviation
        api_response = api_instance.province(province_id, year=year, optional=optional)
        print("The response of ProvincesApi->province:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProvincesApi->province: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **province_id** | **str**| A Canadian province abbreviation | 
 **year** | **int**| A calendar year | [optional] [default to 2023]
 **optional** | **str**| A boolean parameter (AB and BC only). If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC. | [optional] [default to false]

### Return type

[**Province200Response**](Province200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provinces**
> Provinces200Response provinces(year=year, optional=optional)

Get all provinces

Returns provinces and territories in Canada. Each province or territory lists its associated holidays.

### Example


```python
import openapi_client
from openapi_client.models.provinces200_response import Provinces200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://canada-holidays.ca
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://canada-holidays.ca"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProvincesApi(api_client)
    year = 2023 # int | A calendar year (optional) (default to 2023)
    optional = false # str | A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC. (optional) (default to false)

    try:
        # Get all provinces
        api_response = api_instance.provinces(year=year, optional=optional)
        print("The response of ProvincesApi->provinces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProvincesApi->provinces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **int**| A calendar year | [optional] [default to 2023]
 **optional** | **str**| A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC. | [optional] [default to false]

### Return type

[**Provinces200Response**](Provinces200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

