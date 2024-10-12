# openapi_client.MerchantTransferFundingAndPaymentApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_merchant_transfer**](MerchantTransferFundingAndPaymentApi.md#create_merchant_transfer) | **POST** /send/#env/v1/partners/{partnerId}/merchant/transfer | Initiates a Mastercard Merchant Presented QR purchase transaction by securing funds from a consumer’s account with a Funding Transaction and pushing funds to a merchant account with a Payment Transaction.


# **create_merchant_transfer**
> MerchantTransfer14Wrapper create_merchant_transfer(partner_id, merchant_transfer)

Initiates a Mastercard Merchant Presented QR purchase transaction by securing funds from a consumer’s account with a Funding Transaction and pushing funds to a merchant account with a Payment Transaction.

Initiates a Mastercard Merchant Presented QR purchase transaction by securing funds from a consumer’s account with a Funding Transaction and pushing funds to a merchant account with a Payment Transaction.

### Example


```python
import openapi_client
from openapi_client.models.merchant_transfer14_wrapper import MerchantTransfer14Wrapper
from openapi_client.models.merchant_transfer1_wrapper import MerchantTransfer1Wrapper
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MerchantTransferFundingAndPaymentApi(api_client)
    partner_id = 'ptnr_A37V2q91WUqSonkfEG29Q-Bf4s9' # str | Path Param - Provider assigned partner id.   Type: Alphanumeric Special  [a-zA-Z0-9_-], Length: 32
    merchant_transfer = openapi_client.MerchantTransfer1Wrapper() # MerchantTransfer1Wrapper | Contains the details of the request message.

    try:
        # Initiates a Mastercard Merchant Presented QR purchase transaction by securing funds from a consumer’s account with a Funding Transaction and pushing funds to a merchant account with a Payment Transaction.
        api_response = api_instance.create_merchant_transfer(partner_id, merchant_transfer)
        print("The response of MerchantTransferFundingAndPaymentApi->create_merchant_transfer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerchantTransferFundingAndPaymentApi->create_merchant_transfer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id.   Type: Alphanumeric Special  [a-zA-Z0-9_-], Length: 32 | 
 **merchant_transfer** | [**MerchantTransfer1Wrapper**](MerchantTransfer1Wrapper.md)| Contains the details of the request message. | 

### Return type

[**MerchantTransfer14Wrapper**](MerchantTransfer14Wrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response details for a merchant transfer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

