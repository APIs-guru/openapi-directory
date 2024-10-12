# openapi_client.MerchantRefundApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_merchant_refund**](MerchantRefundApi.md#create_merchant_refund) | **POST** /send/#env/v1/partners/{partnerId}/merchant/transfers/refund | Initiates a Mastercard Merchant Presented QR Refund transaction by pushing funds from a merchant account back to the customer&#39;s account.


# **create_merchant_refund**
> MerchantTransfer104Wrapper create_merchant_refund(partner_id, merchant_refund_transfer=merchant_refund_transfer)

Initiates a Mastercard Merchant Presented QR Refund transaction by pushing funds from a merchant account back to the customer's account.

Initiates a Mastercard Merchant Presented QR Refund transaction by pushing funds from a merchant account back to the customer's account.

### Example


```python
import openapi_client
from openapi_client.models.merchant_refund_transfer93_wrapper import MerchantRefundTransfer93Wrapper
from openapi_client.models.merchant_transfer104_wrapper import MerchantTransfer104Wrapper
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
    api_instance = openapi_client.MerchantRefundApi(api_client)
    partner_id = 'partner_id_example' # str | Path Param - Provider assigned partner id. Details - string, 32
    merchant_refund_transfer = openapi_client.MerchantRefundTransfer93Wrapper() # MerchantRefundTransfer93Wrapper | Contains the details of the request message. (optional)

    try:
        # Initiates a Mastercard Merchant Presented QR Refund transaction by pushing funds from a merchant account back to the customer's account.
        api_response = api_instance.create_merchant_refund(partner_id, merchant_refund_transfer=merchant_refund_transfer)
        print("The response of MerchantRefundApi->create_merchant_refund:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerchantRefundApi->create_merchant_refund: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Details - string, 32 | 
 **merchant_refund_transfer** | [**MerchantRefundTransfer93Wrapper**](MerchantRefundTransfer93Wrapper.md)| Contains the details of the request message. | [optional] 

### Return type

[**MerchantTransfer104Wrapper**](MerchantTransfer104Wrapper.md)

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

