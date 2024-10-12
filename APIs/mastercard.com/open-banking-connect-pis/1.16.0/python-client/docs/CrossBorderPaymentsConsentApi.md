# openapi_client.CrossBorderPaymentsConsentApi

All URIs are relative to */openbanking/sandbox/connect/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payments_cross_border_credit_transfers_consents_post**](CrossBorderPaymentsConsentApi.md#payments_cross_border_credit_transfers_consents_post) | **POST** /payments/cross-border-credit-transfers/consents | Request consent initiation via redirect


# **payments_cross_border_credit_transfers_consents_post**
> PostPaymentsCrossBorderCreditTransfersConsentsOKBody payments_cross_border_credit_transfers_consents_post(body)

Request consent initiation via redirect

### Example


```python
import openapi_client
from openapi_client.models.post_payments_cross_border_credit_transfers_consents_ok_body import PostPaymentsCrossBorderCreditTransfersConsentsOKBody
from openapi_client.models.post_payments_cross_border_credit_transfers_consents_params_body import PostPaymentsCrossBorderCreditTransfersConsentsParamsBody
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
    api_instance = openapi_client.CrossBorderPaymentsConsentApi(api_client)
    body = openapi_client.PostPaymentsCrossBorderCreditTransfersConsentsParamsBody() # PostPaymentsCrossBorderCreditTransfersConsentsParamsBody | Cross border payment consent

    try:
        # Request consent initiation via redirect
        api_response = api_instance.payments_cross_border_credit_transfers_consents_post(body)
        print("The response of CrossBorderPaymentsConsentApi->payments_cross_border_credit_transfers_consents_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrossBorderPaymentsConsentApi->payments_cross_border_credit_transfers_consents_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PostPaymentsCrossBorderCreditTransfersConsentsParamsBody**](PostPaymentsCrossBorderCreditTransfersConsentsParamsBody.md)| Cross border payment consent | 

### Return type

[**PostPaymentsCrossBorderCreditTransfersConsentsOKBody**](PostPaymentsCrossBorderCreditTransfersConsentsOKBody.md)

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

