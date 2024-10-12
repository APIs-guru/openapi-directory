# openapi_client.CrossBorderPaymentsStatusApi

All URIs are relative to */openbanking/sandbox/connect/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payments_cross_border_credit_transfers_payment_status_post**](CrossBorderPaymentsStatusApi.md#payments_cross_border_credit_transfers_payment_status_post) | **POST** /payments/cross-border-credit-transfers/payment-status | Get payment status


# **payments_cross_border_credit_transfers_payment_status_post**
> PostPaymentsCrossBorderCreditTransfersPaymentStatusOKBody payments_cross_border_credit_transfers_payment_status_post(body)

Get payment status

### Example


```python
import openapi_client
from openapi_client.models.post_payments_cross_border_credit_transfers_payment_status_ok_body import PostPaymentsCrossBorderCreditTransfersPaymentStatusOKBody
from openapi_client.models.post_payments_cross_border_credit_transfers_payment_status_params_body import PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /openbanking/sandbox/connect/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/openbanking/sandbox/connect/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrossBorderPaymentsStatusApi(api_client)
    body = openapi_client.PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody() # PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody | Request Body

    try:
        # Get payment status
        api_response = api_instance.payments_cross_border_credit_transfers_payment_status_post(body)
        print("The response of CrossBorderPaymentsStatusApi->payments_cross_border_credit_transfers_payment_status_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrossBorderPaymentsStatusApi->payments_cross_border_credit_transfers_payment_status_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody**](PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody.md)| Request Body | 

### Return type

[**PostPaymentsCrossBorderCreditTransfersPaymentStatusOKBody**](PostPaymentsCrossBorderCreditTransfersPaymentStatusOKBody.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**500** | Error |  -  |
**504** | Server while acting as a gateway or proxy, cannot get a response in time. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

