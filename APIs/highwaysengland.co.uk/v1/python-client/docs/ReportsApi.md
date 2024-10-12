# openapi_client.ReportsApi

All URIs are relative to *https://webtris.highwaysengland.co.uk/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reports_index**](ReportsApi.md#reports_index) | **GET** /v{version}/reports/{report_type} | Gets the daily report.
[**vversion_reports_start_date_to_end_date_report_type_get**](ReportsApi.md#vversion_reports_start_date_to_end_date_report_type_get) | **GET** /v{version}/reports/{start_date}/to/{end_date}/{report_type} | Gets the daily report.


# **reports_index**
> object reports_index(report_type, sites, start_date, end_date, page, page_size, version, report_sub_type_id=report_sub_type_id)

Gets the daily report.

Get's the report.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://webtris.highwaysengland.co.uk/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://webtris.highwaysengland.co.uk/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    report_type = 'report_type_example' # str | Report Type Id (i.e Daily, Monthly, Annual)
    sites = 'sites_example' # str | Comma separated list of site Ids.
    start_date = 'start_date_example' # str | The start date of the report in the format ddmmyyyy (i.e 31012016)
    end_date = 'end_date_example' # str | The end date of the report in the format ddmmyyyy (i.e 31012016)
    page = 56 # int | The page offset to return.
    page_size = 56 # int | The number of rows to return.
    version = 'version_example' # str | 
    report_sub_type_id = 56 # int |  (optional)

    try:
        # Gets the daily report.
        api_response = api_instance.reports_index(report_type, sites, start_date, end_date, page, page_size, version, report_sub_type_id=report_sub_type_id)
        print("The response of ReportsApi->reports_index:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->reports_index: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_type** | **str**| Report Type Id (i.e Daily, Monthly, Annual) | 
 **sites** | **str**| Comma separated list of site Ids. | 
 **start_date** | **str**| The start date of the report in the format ddmmyyyy (i.e 31012016) | 
 **end_date** | **str**| The end date of the report in the format ddmmyyyy (i.e 31012016) | 
 **page** | **int**| The page offset to return. | 
 **page_size** | **int**| The number of rows to return. | 
 **version** | **str**|  | 
 **report_sub_type_id** | **int**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Bad request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vversion_reports_start_date_to_end_date_report_type_get**
> object vversion_reports_start_date_to_end_date_report_type_get(report_type, sites, start_date, end_date, page, page_size, version, report_sub_type_id=report_sub_type_id)

Gets the daily report.

Get's the report.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://webtris.highwaysengland.co.uk/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://webtris.highwaysengland.co.uk/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportsApi(api_client)
    report_type = 'report_type_example' # str | Report Type Id (i.e Daily, Monthly, Annual)
    sites = 'sites_example' # str | Comma separated list of site Ids.
    start_date = 'start_date_example' # str | The start date of the report in the format ddmmyyyy (i.e 31012016)
    end_date = 'end_date_example' # str | The end date of the report in the format ddmmyyyy (i.e 31012016)
    page = 56 # int | The page offset to return.
    page_size = 56 # int | The number of rows to return.
    version = 'version_example' # str | 
    report_sub_type_id = 56 # int |  (optional)

    try:
        # Gets the daily report.
        api_response = api_instance.vversion_reports_start_date_to_end_date_report_type_get(report_type, sites, start_date, end_date, page, page_size, version, report_sub_type_id=report_sub_type_id)
        print("The response of ReportsApi->vversion_reports_start_date_to_end_date_report_type_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->vversion_reports_start_date_to_end_date_report_type_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_type** | **str**| Report Type Id (i.e Daily, Monthly, Annual) | 
 **sites** | **str**| Comma separated list of site Ids. | 
 **start_date** | **str**| The start date of the report in the format ddmmyyyy (i.e 31012016) | 
 **end_date** | **str**| The end date of the report in the format ddmmyyyy (i.e 31012016) | 
 **page** | **int**| The page offset to return. | 
 **page_size** | **int**| The number of rows to return. | 
 **version** | **str**|  | 
 **report_sub_type_id** | **int**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Bad request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

