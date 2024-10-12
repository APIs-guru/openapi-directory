# openapi_client.MerchantTransferPaymentApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_merchant_payment**](MerchantTransferPaymentApi.md#create_merchant_payment) | **POST** /send/#env/v1/partners/{partnerId}/merchant/transfers/payment | Initiates a Mastercard Merchant Presented QR purchase transaction by pushing funds to a merchant account.


# **create_merchant_payment**
> MerchantTransfer40Wrapper create_merchant_payment(partner_id, merchant_payment_transfer=merchant_payment_transfer)

Initiates a Mastercard Merchant Presented QR purchase transaction by pushing funds to a merchant account.

Initiates a Mastercard Merchant Presented QR purchase transaction by pushing funds to a merchant account.

### Example


```python
import openapi_client
from openapi_client.models.merchant_payment_transfer29_wrapper import MerchantPaymentTransfer29Wrapper
from openapi_client.models.merchant_transfer40_wrapper import MerchantTransfer40Wrapper
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
    api_instance = openapi_client.MerchantTransferPaymentApi(api_client)
    partner_id = 'partner_id_example' # str | Path Param - Provider assigned partner id. Details - string, 32
    merchant_payment_transfer = openapi_client.MerchantPaymentTransfer29Wrapper() # MerchantPaymentTransfer29Wrapper | Contains the details of the request message. (optional)

    try:
        # Initiates a Mastercard Merchant Presented QR purchase transaction by pushing funds to a merchant account.
        api_response = api_instance.create_merchant_payment(partner_id, merchant_payment_transfer=merchant_payment_transfer)
        print("The response of MerchantTransferPaymentApi->create_merchant_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerchantTransferPaymentApi->create_merchant_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Details - string, 32 | 
 **merchant_payment_transfer** | [**MerchantPaymentTransfer29Wrapper**](MerchantPaymentTransfer29Wrapper.md)| Contains the details of the request message. | [optional] 

### Return type

[**MerchantTransfer40Wrapper**](MerchantTransfer40Wrapper.md)

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

