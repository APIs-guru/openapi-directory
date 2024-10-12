# openapi_client.HolidaysApi

All URIs are relative to *https://canada-holidays.ca*

Method | HTTP request | Description
------------- | ------------- | -------------
[**holiday**](HolidaysApi.md#holiday) | **GET** /api/v1/holidays/{holidayId} | Get a holiday by id
[**holidays**](HolidaysApi.md#holidays) | **GET** /api/v1/holidays | Get all holidays


# **holiday**
> Holiday200Response holiday(holiday_id, year=year, optional=optional)

Get a holiday by id

Returns one Canadian statutory holiday by integer id. Returns a 404 response for invalid ids.

### Example


```python
import openapi_client
from openapi_client.models.holiday200_response import Holiday200Response
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
    api_instance = openapi_client.HolidaysApi(api_client)
    holiday_id = 2 # int | Primary key for a holiday
    year = 2023 # int | A calendar year (optional) (default to 2023)
    optional = false # str | A boolean parameter. If false or 0 (default), will return provinces for which this is a legislated holiday. If true or 1, will return provinces which optionally celebrate this holiday. (optional) (default to false)

    try:
        # Get a holiday by id
        api_response = api_instance.holiday(holiday_id, year=year, optional=optional)
        print("The response of HolidaysApi->holiday:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaysApi->holiday: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **holiday_id** | **int**| Primary key for a holiday | 
 **year** | **int**| A calendar year | [optional] [default to 2023]
 **optional** | **str**| A boolean parameter. If false or 0 (default), will return provinces for which this is a legislated holiday. If true or 1, will return provinces which optionally celebrate this holiday. | [optional] [default to false]

### Return type

[**Holiday200Response**](Holiday200Response.md)

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

# **holidays**
> Holidays200Response holidays(year=year, federal=federal, optional=optional)

Get all holidays

Returns Canadian public holidays. Each holiday lists the regions that observe it.

### Example


```python
import openapi_client
from openapi_client.models.holidays200_response import Holidays200Response
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
    api_instance = openapi_client.HolidaysApi(api_client)
    year = 2023 # int | A calendar year (optional) (default to 2023)
    federal = 'federal_example' # str | A boolean parameter. If true or 1, will return only federal holidays. If false or 0, will return no federal holidays. (optional)
    optional = false # str | A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC. (optional) (default to false)

    try:
        # Get all holidays
        api_response = api_instance.holidays(year=year, federal=federal, optional=optional)
        print("The response of HolidaysApi->holidays:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaysApi->holidays: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **int**| A calendar year | [optional] [default to 2023]
 **federal** | **str**| A boolean parameter. If true or 1, will return only federal holidays. If false or 0, will return no federal holidays. | [optional] 
 **optional** | **str**| A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC. | [optional] [default to false]

### Return type

[**Holidays200Response**](Holidays200Response.md)

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

