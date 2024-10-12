# openapi_client.SalesReportsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sales_reports_get_collection**](SalesReportsApi.md#sales_reports_get_collection) | **GET** /v1/salesReports | 


# **sales_reports_get_collection**
> bytearray sales_reports_get_collection(filter_frequency, filter_report_sub_type, filter_report_type, filter_vendor_number, filter_report_date=filter_report_date, filter_version=filter_version)



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
    api_instance = openapi_client.SalesReportsApi(api_client)
    filter_frequency = ['filter_frequency_example'] # List[str] | filter by attribute 'frequency'
    filter_report_sub_type = ['filter_report_sub_type_example'] # List[str] | filter by attribute 'reportSubType'
    filter_report_type = ['filter_report_type_example'] # List[str] | filter by attribute 'reportType'
    filter_vendor_number = ['filter_vendor_number_example'] # List[str] | filter by attribute 'vendorNumber'
    filter_report_date = ['filter_report_date_example'] # List[str] | filter by attribute 'reportDate' (optional)
    filter_version = ['filter_version_example'] # List[str] | filter by attribute 'version' (optional)

    try:
        api_response = api_instance.sales_reports_get_collection(filter_frequency, filter_report_sub_type, filter_report_type, filter_vendor_number, filter_report_date=filter_report_date, filter_version=filter_version)
        print("The response of SalesReportsApi->sales_reports_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SalesReportsApi->sales_reports_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_frequency** | [**List[str]**](str.md)| filter by attribute &#39;frequency&#39; | 
 **filter_report_sub_type** | [**List[str]**](str.md)| filter by attribute &#39;reportSubType&#39; | 
 **filter_report_type** | [**List[str]**](str.md)| filter by attribute &#39;reportType&#39; | 
 **filter_vendor_number** | [**List[str]**](str.md)| filter by attribute &#39;vendorNumber&#39; | 
 **filter_report_date** | [**List[str]**](str.md)| filter by attribute &#39;reportDate&#39; | [optional] 
 **filter_version** | [**List[str]**](str.md)| filter by attribute &#39;version&#39; | [optional] 

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
**200** | List of SalesReports |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

