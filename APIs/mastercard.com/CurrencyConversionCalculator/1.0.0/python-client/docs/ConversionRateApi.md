# openapi_client.ConversionRateApi

All URIs are relative to *http://api.mastercard.com/mcapi/settlement/currencyrate*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_conversion_detail_using_get**](ConversionRateApi.md#get_conversion_detail_using_get) | **GET** /conversion-rate | Get the currency conversion rate details.


# **get_conversion_detail_using_get**
> ConversionRateRequest get_conversion_detail_using_get(fx_date, trans_curr, crdhld_bill_curr, trans_amt, bank_fee=bank_fee)

Get the currency conversion rate details.

Get the currency conversion rate details.

### Example


```python
import openapi_client
from openapi_client.models.conversion_rate_request import ConversionRateRequest
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
    api_instance = openapi_client.ConversionRateApi(api_client)
    fx_date = 'fx_date_example' # str | Date of the requested FX rates.
    trans_curr = 'trans_curr_example' # str | Currency of the transaction.
    crdhld_bill_curr = 'crdhld_bill_curr_example' # str | Cardholder billing currency.
    trans_amt = 3.4 # float | Amount in the transaction currency.
    bank_fee = 3.4 # float | Additional fees imposed by the bank. (optional)

    try:
        # Get the currency conversion rate details.
        api_response = api_instance.get_conversion_detail_using_get(fx_date, trans_curr, crdhld_bill_curr, trans_amt, bank_fee=bank_fee)
        print("The response of ConversionRateApi->get_conversion_detail_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConversionRateApi->get_conversion_detail_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fx_date** | **str**| Date of the requested FX rates. | 
 **trans_curr** | **str**| Currency of the transaction. | 
 **crdhld_bill_curr** | **str**| Cardholder billing currency. | 
 **trans_amt** | **float**| Amount in the transaction currency. | 
 **bank_fee** | **float**| Additional fees imposed by the bank. | [optional] 

### Return type

[**ConversionRateRequest**](ConversionRateRequest.md)

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

