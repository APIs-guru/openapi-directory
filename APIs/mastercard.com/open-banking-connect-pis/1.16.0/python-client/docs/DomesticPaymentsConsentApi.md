# openapi_client.DomesticPaymentsConsentApi

All URIs are relative to */openbanking/sandbox/connect/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payments_domestic_credit_transfers_consents_post**](DomesticPaymentsConsentApi.md#payments_domestic_credit_transfers_consents_post) | **POST** /payments/domestic-credit-transfers/consents | Request consent initiation via redirect


# **payments_domestic_credit_transfers_consents_post**
> PostPaymentsDomesticCreditTransfersConsentsOKBody payments_domestic_credit_transfers_consents_post(body)

Request consent initiation via redirect

Request Payment Initiation Consent for a domestic credit transfer on behalf of the PSU.

### Example


```python
import openapi_client
from openapi_client.models.post_payments_domestic_credit_transfers_consents_ok_body import PostPaymentsDomesticCreditTransfersConsentsOKBody
from openapi_client.models.post_payments_domestic_credit_transfers_consents_params_body import PostPaymentsDomesticCreditTransfersConsentsParamsBody
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
    api_instance = openapi_client.DomesticPaymentsConsentApi(api_client)
    body = openapi_client.PostPaymentsDomesticCreditTransfersConsentsParamsBody() # PostPaymentsDomesticCreditTransfersConsentsParamsBody | Domestic Payment consent to be wired via Faster Payment System

    try:
        # Request consent initiation via redirect
        api_response = api_instance.payments_domestic_credit_transfers_consents_post(body)
        print("The response of DomesticPaymentsConsentApi->payments_domestic_credit_transfers_consents_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomesticPaymentsConsentApi->payments_domestic_credit_transfers_consents_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostPaymentsDomesticCreditTransfersConsentsParamsBody**](PostPaymentsDomesticCreditTransfersConsentsParamsBody.md)| Domestic Payment consent to be wired via Faster Payment System | 

### Return type

[**PostPaymentsDomesticCreditTransfersConsentsOKBody**](PostPaymentsDomesticCreditTransfersConsentsOKBody.md)

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

