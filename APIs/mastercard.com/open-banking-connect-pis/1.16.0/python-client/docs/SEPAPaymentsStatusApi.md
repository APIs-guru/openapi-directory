# openapi_client.SEPAPaymentsStatusApi

All URIs are relative to */openbanking/sandbox/connect/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payments_sepa_credit_transfers_payment_status_post**](SEPAPaymentsStatusApi.md#payments_sepa_credit_transfers_payment_status_post) | **POST** /payments/sepa-credit-transfers/payment-status | Get payment status


# **payments_sepa_credit_transfers_payment_status_post**
> PostPaymentsSepaCreditTransfersPaymentStatusOKBody payments_sepa_credit_transfers_payment_status_post(body)

Get payment status

Get the status of an existing SEPA credit transfer

### Example


```python
import openapi_client
from openapi_client.models.post_payments_sepa_credit_transfers_payment_status_ok_body import PostPaymentsSepaCreditTransfersPaymentStatusOKBody
from openapi_client.models.post_payments_sepa_credit_transfers_payment_status_params_body import PostPaymentsSepaCreditTransfersPaymentStatusParamsBody
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
    api_instance = openapi_client.SEPAPaymentsStatusApi(api_client)
    body = openapi_client.PostPaymentsSepaCreditTransfersPaymentStatusParamsBody() # PostPaymentsSepaCreditTransfersPaymentStatusParamsBody | Request Body

    try:
        # Get payment status
        api_response = api_instance.payments_sepa_credit_transfers_payment_status_post(body)
        print("The response of SEPAPaymentsStatusApi->payments_sepa_credit_transfers_payment_status_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SEPAPaymentsStatusApi->payments_sepa_credit_transfers_payment_status_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostPaymentsSepaCreditTransfersPaymentStatusParamsBody**](PostPaymentsSepaCreditTransfersPaymentStatusParamsBody.md)| Request Body | 

### Return type

[**PostPaymentsSepaCreditTransfersPaymentStatusOKBody**](PostPaymentsSepaCreditTransfersPaymentStatusOKBody.md)

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

