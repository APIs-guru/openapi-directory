# openapi_client.TotalsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_daily_report_totals**](TotalsApi.md#get_daily_report_totals) | **GET** /report/totals | getDailyReportTotals
[**get_latest_totals**](TotalsApi.md#get_latest_totals) | **GET** /totals | getLatestTotals


# **get_daily_report_totals**
> List[GetDailyReportTotals200ResponseInner] get_daily_report_totals(var_date=var_date, date_format=date_format, format=format)

getDailyReportTotals

Get daily report data for whole world.

### Example


```python
import openapi_client
from openapi_client.models.get_daily_report_totals200_response_inner import GetDailyReportTotals200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TotalsApi(api_client)
    var_date = 'var_date_example' # str | Date of the report. If you don't put this field all dates will be returned. (optional)
    date_format = YYYY-MM-DD # str | Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format. (optional) (default to YYYY-MM-DD)
    format = json # str | Format of the response. If you don't put this field JSON will be response format. (optional) (default to json)

    try:
        # getDailyReportTotals
        api_response = api_instance.get_daily_report_totals(var_date=var_date, date_format=date_format, format=format)
        print("The response of TotalsApi->get_daily_report_totals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TotalsApi->get_daily_report_totals: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **str**| Date of the report. If you don&#39;t put this field all dates will be returned. | [optional] 
 **date_format** | **str**| Date format. If you dont want to use ISO 8601 standard (YYYY-MM-DD), you can provide different format. | [optional] [default to YYYY-MM-DD]
 **format** | **str**| Format of the response. If you don&#39;t put this field JSON will be response format. | [optional] [default to json]

### Return type

[**List[GetDailyReportTotals200ResponseInner]**](GetDailyReportTotals200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data about COVID-19 for whole world |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_latest_totals**
> List[GetLatestTotals200ResponseInner] get_latest_totals(format=format)

getLatestTotals

Get latest data for whole world.

### Example


```python
import openapi_client
from openapi_client.models.get_latest_totals200_response_inner import GetLatestTotals200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TotalsApi(api_client)
    format = json # str | Format of the response (optional) (default to json)

    try:
        # getLatestTotals
        api_response = api_instance.get_latest_totals(format=format)
        print("The response of TotalsApi->get_latest_totals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TotalsApi->get_latest_totals: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| Format of the response | [optional] [default to json]

### Return type

[**List[GetLatestTotals200ResponseInner]**](GetLatestTotals200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Latest data about COVID-19 for whole world |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

