# openapi_client.GetPaymentAccountReferenceApi

All URIs are relative to *https://sandbox.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**par_paymentaccountreference10_get_payment_account_reference_post**](GetPaymentAccountReferenceApi.md#par_paymentaccountreference10_get_payment_account_reference_post) | **POST** /par/paymentaccountreference/1/0/getPaymentAccountReference | Submit an encrypted PAN to obtain the PAR linked to the account.


# **par_paymentaccountreference10_get_payment_account_reference_post**
> GetPaymentAccountReferenceResponseSchema par_paymentaccountreference10_get_payment_account_reference_post(get_payment_account_reference_request_schema=get_payment_account_reference_request_schema)

Submit an encrypted PAN to obtain the PAR linked to the account.

The API performs a PAR query into the PAR Vault with the supplied PAN. When a PAR is returned from the PAR vault the API will encrypt it using the wrapped encryption method with the  Mastercard Customer?s Encryption Public Key and include it in the API response. 

### Example


```python
import openapi_client
from openapi_client.models.get_payment_account_reference_request_schema import GetPaymentAccountReferenceRequestSchema
from openapi_client.models.get_payment_account_reference_response_schema import GetPaymentAccountReferenceResponseSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sandbox.mastercard.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://sandbox.mastercard.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GetPaymentAccountReferenceApi(api_client)
    get_payment_account_reference_request_schema = openapi_client.GetPaymentAccountReferenceRequestSchema() # GetPaymentAccountReferenceRequestSchema | Contains the details of the get PAR API request message. (optional)

    try:
        # Submit an encrypted PAN to obtain the PAR linked to the account.
        api_response = api_instance.par_paymentaccountreference10_get_payment_account_reference_post(get_payment_account_reference_request_schema=get_payment_account_reference_request_schema)
        print("The response of GetPaymentAccountReferenceApi->par_paymentaccountreference10_get_payment_account_reference_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GetPaymentAccountReferenceApi->par_paymentaccountreference10_get_payment_account_reference_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_payment_account_reference_request_schema** | [**GetPaymentAccountReferenceRequestSchema**](GetPaymentAccountReferenceRequestSchema.md)| Contains the details of the get PAR API request message. | [optional] 

### Return type

[**GetPaymentAccountReferenceResponseSchema**](GetPaymentAccountReferenceResponseSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains the details of the get PAR API response message. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

