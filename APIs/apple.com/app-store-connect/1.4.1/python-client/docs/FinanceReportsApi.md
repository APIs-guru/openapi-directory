# openapi_client.FinanceReportsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**finance_reports_get_collection**](FinanceReportsApi.md#finance_reports_get_collection) | **GET** /v1/financeReports | 


# **finance_reports_get_collection**
> bytearray finance_reports_get_collection(filter_region_code, filter_report_date, filter_report_type, filter_vendor_number)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FinanceReportsApi(api_client)
    filter_region_code = ['filter_region_code_example'] # List[str] | filter by attribute 'regionCode'
    filter_report_date = ['filter_report_date_example'] # List[str] | filter by attribute 'reportDate'
    filter_report_type = ['filter_report_type_example'] # List[str] | filter by attribute 'reportType'
    filter_vendor_number = ['filter_vendor_number_example'] # List[str] | filter by attribute 'vendorNumber'

    try:
        api_response = api_instance.finance_reports_get_collection(filter_region_code, filter_report_date, filter_report_type, filter_vendor_number)
        print("The response of FinanceReportsApi->finance_reports_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FinanceReportsApi->finance_reports_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_region_code** | [**List[str]**](str.md)| filter by attribute &#39;regionCode&#39; | 
 **filter_report_date** | [**List[str]**](str.md)| filter by attribute &#39;reportDate&#39; | 
 **filter_report_type** | [**List[str]**](str.md)| filter by attribute &#39;reportType&#39; | 
 **filter_vendor_number** | [**List[str]**](str.md)| filter by attribute &#39;vendorNumber&#39; | 

### Return type

**bytearray**

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: gzip, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of FinanceReports |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

