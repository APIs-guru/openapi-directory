# openapi_client.ComplaintsApi

All URIs are relative to *https://api.callcontrol.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complaints_complaints**](ComplaintsApi.md#complaints_complaints) | **GET** /api/2015-11-01/Complaints/{phoneNumber} | Complaints: Free service (with registration), providing community and government complaint lookup by phone number for up to 2,000 queries per month.  Details include number complaint rates from (FTC, FCC, IRS, Indiana Attorney  General) and key entity tag extractions from complaints.


# **complaints_complaints**
> Complaints complaints_complaints(phone_number)

Complaints: Free service (with registration), providing community and government complaint lookup by phone number for up to 2,000 queries per month.  Details include number complaint rates from (FTC, FCC, IRS, Indiana Attorney  General) and key entity tag extractions from complaints.

This is the main funciton to get data out of the call control reporting system<br />              Try with api_key 'demo' and phone numbers 18008472911, 13157244022, 17275567300, 18008276655, and 12061231234 (last one not spam)

### Example


```python
import openapi_client
from openapi_client.models.complaints import Complaints
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.callcontrol.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.callcontrol.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ComplaintsApi(api_client)
    phone_number = 'phone_number_example' # str | phone number to search

    try:
        # Complaints: Free service (with registration), providing community and government complaint lookup by phone number for up to 2,000 queries per month.  Details include number complaint rates from (FTC, FCC, IRS, Indiana Attorney  General) and key entity tag extractions from complaints.
        api_response = api_instance.complaints_complaints(phone_number)
        print("The response of ComplaintsApi->complaints_complaints:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplaintsApi->complaints_complaints: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone_number** | **str**| phone number to search | 

### Return type

[**Complaints**](Complaints.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

