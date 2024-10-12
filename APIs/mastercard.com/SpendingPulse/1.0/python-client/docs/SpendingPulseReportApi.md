# openapi_client.SpendingPulseReportApi

All URIs are relative to *https://api.mastercard.com/spendingpulse/v1/spulse.svc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**spendingpulse_get**](SpendingPulseReportApi.md#spendingpulse_get) | **GET** /spendingpulse | Returns all Spending Pulse reports (with the exception of the gasoline weekly report, which has its own resource), that one is subscribed to.


# **spendingpulse_get**
> SpendingPulseListResponse spendingpulse_get(current_row=current_row, offset=offset, product_line=product_line, publication_coverage_period=publication_coverage_period, country=country, report_type=report_type, period=period, sector=sector, ecomm=ecomm)

Returns all Spending Pulse reports (with the exception of the gasoline weekly report, which has its own resource), that one is subscribed to.

Returns all Spending Pulse reports (with the exception of the gasoline weekly report, which has its own resource), that one is subscribed to. 

### Example


```python
import openapi_client
from openapi_client.models.spending_pulse_list_response import SpendingPulseListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com/spendingpulse/v1/spulse.svc
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com/spendingpulse/v1/spulse.svc"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SpendingPulseReportApi(api_client)
    current_row = '1' # str | Starting record number to return. (optional)
    offset = '25' # str | Used to restrict the number of records returned if needed to be less than max. (optional)
    product_line = 'Weekly Sales' # str | Product Line.  Either ?US Executive Report? or ?Weekly Sales? (optional)
    publication_coverage_period = 'March 2015' # str | Publication Coverage Period indicates what period is to be covered, often the current report will include the month prior. (optional)
    country = 'US' # str | Country code. (optional)
    report_type = 'reportA' # str | Report type name, today the only report supported is \"monitor\". (optional)
    period = 'Weekly' # str | Indicates the period covered by the data with possible values of - day, week, month, quarter, annual (optional)
    sector = 'sectorA' # str | Sector name. (optional)
    ecomm = 'Y' # str | Ecommerce indicator. (optional)

    try:
        # Returns all Spending Pulse reports (with the exception of the gasoline weekly report, which has its own resource), that one is subscribed to.
        api_response = api_instance.spendingpulse_get(current_row=current_row, offset=offset, product_line=product_line, publication_coverage_period=publication_coverage_period, country=country, report_type=report_type, period=period, sector=sector, ecomm=ecomm)
        print("The response of SpendingPulseReportApi->spendingpulse_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpendingPulseReportApi->spendingpulse_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_row** | **str**| Starting record number to return. | [optional] 
 **offset** | **str**| Used to restrict the number of records returned if needed to be less than max. | [optional] 
 **product_line** | **str**| Product Line.  Either ?US Executive Report? or ?Weekly Sales? | [optional] 
 **publication_coverage_period** | **str**| Publication Coverage Period indicates what period is to be covered, often the current report will include the month prior. | [optional] 
 **country** | **str**| Country code. | [optional] 
 **report_type** | **str**| Report type name, today the only report supported is \&quot;monitor\&quot;. | [optional] 
 **period** | **str**| Indicates the period covered by the data with possible values of - day, week, month, quarter, annual | [optional] 
 **sector** | **str**| Sector name. | [optional] 
 **ecomm** | **str**| Ecommerce indicator. | [optional] 

### Return type

[**SpendingPulseListResponse**](SpendingPulseListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of Spending Pulse Reports. |  -  |
**0** | Unexpected errors |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

