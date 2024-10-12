# openapi_client.RPPSPaymentValidatorAPIApi

All URIs are relative to *https://api.mastercard.com/billpayAPI/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**is_routing_valid_post**](RPPSPaymentValidatorAPIApi.md#is_routing_valid_post) | **POST** /isRoutingValid | Bill Payment Validator service returns the processing status for a potential RPPS transaction


# **is_routing_valid_post**
> BillPayResponse is_routing_valid_post(bill_pay_request=bill_pay_request)

Bill Payment Validator service returns the processing status for a potential RPPS transaction

Bill Payment Validator performs real time transaction validation against the specified Biller ID's account masks, account check digits and all other registered RPPS processing parameters.

### Example


```python
import openapi_client
from openapi_client.models.bill_pay_request import BillPayRequest
from openapi_client.models.bill_pay_response import BillPayResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com/billpayAPI/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com/billpayAPI/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RPPSPaymentValidatorAPIApi(api_client)
    bill_pay_request = openapi_client.BillPayRequest() # BillPayRequest | Contains the details of the get PAR API request message. (optional)

    try:
        # Bill Payment Validator service returns the processing status for a potential RPPS transaction
        api_response = api_instance.is_routing_valid_post(bill_pay_request=bill_pay_request)
        print("The response of RPPSPaymentValidatorAPIApi->is_routing_valid_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RPPSPaymentValidatorAPIApi->is_routing_valid_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bill_pay_request** | [**BillPayRequest**](BillPayRequest.md)| Contains the details of the get PAR API request message. | [optional] 

### Return type

[**BillPayResponse**](BillPayResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/JSON
 - **Accept**: application/JSON

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Bill Payment Validator response. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

