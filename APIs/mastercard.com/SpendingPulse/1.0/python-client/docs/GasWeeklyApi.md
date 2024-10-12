# openapi_client.GasWeeklyApi

All URIs are relative to *https://api.mastercard.com/spendingpulse/v1/spulse.svc*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gasweekly_get**](GasWeeklyApi.md#gasweekly_get) | **GET** /gasweekly | Returns the weekly gasoline report. This resource pulls back the report with ProductLine &#x3D; \&quot;US Weekly Gasoline Demand Report\&quot;. Keep in mind that you must be subscribed to the gasoline weekly report to be able to receive data back from this resource.


# **gasweekly_get**
> GasWeeklyListResponse gasweekly_get(current_row=current_row, offset=offset)

Returns the weekly gasoline report. This resource pulls back the report with ProductLine = \"US Weekly Gasoline Demand Report\". Keep in mind that you must be subscribed to the gasoline weekly report to be able to receive data back from this resource.

Returns the weekly gasoline report. This resource pulls back the report with ProductLine = \"US Weekly Gasoline Demand Report\". Keep in mind that you must be subscribed to the gasoline weekly report to be able to receive data back from this resource. 

### Example


```python
import openapi_client
from openapi_client.models.gas_weekly_list_response import GasWeeklyListResponse
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
    api_instance = openapi_client.GasWeeklyApi(api_client)
    current_row = '1' # str | Starting record number to return. (optional)
    offset = '25' # str | Used to restrict the number of records returned if needed to be less than max. (optional)

    try:
        # Returns the weekly gasoline report. This resource pulls back the report with ProductLine = \"US Weekly Gasoline Demand Report\". Keep in mind that you must be subscribed to the gasoline weekly report to be able to receive data back from this resource.
        api_response = api_instance.gasweekly_get(current_row=current_row, offset=offset)
        print("The response of GasWeeklyApi->gasweekly_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GasWeeklyApi->gasweekly_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_row** | **str**| Starting record number to return. | [optional] 
 **offset** | **str**| Used to restrict the number of records returned if needed to be less than max. | [optional] 

### Return type

[**GasWeeklyListResponse**](GasWeeklyListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of subscriptions. |  -  |
**0** | Unexpected errors |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

