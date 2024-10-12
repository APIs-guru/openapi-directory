# openapi_client.RateIssuedApi

All URIs are relative to *http://api.mastercard.com/mcapi/settlement/currencyrate*

Method | HTTP request | Description
------------- | ------------- | -------------
[**is_rate_issued_using_get**](RateIssuedApi.md#is_rate_issued_using_get) | **GET** /conversion-rate-issued | Determine if the settlement rate has been issued.


# **is_rate_issued_using_get**
> SettlementRateIssuedRequest is_rate_issued_using_get(var_date=var_date)

Determine if the settlement rate has been issued.

Determine if the settlement rate has been issued.

### Example


```python
import openapi_client
from openapi_client.models.settlement_rate_issued_request import SettlementRateIssuedRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.mastercard.com/mcapi/settlement/currencyrate
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.mastercard.com/mcapi/settlement/currencyrate"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RateIssuedApi(api_client)
    var_date = 'var_date_example' # str | The date by which the rate would have been issued. (optional)

    try:
        # Determine if the settlement rate has been issued.
        api_response = api_instance.is_rate_issued_using_get(var_date=var_date)
        print("The response of RateIssuedApi->is_rate_issued_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RateIssuedApi->is_rate_issued_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **str**| The date by which the rate would have been issued. | [optional] 

### Return type

[**SettlementRateIssuedRequest**](SettlementRateIssuedRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

