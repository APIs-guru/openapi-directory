# openapi_client.AddTerminatedMerchantApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fraud_merchant_v3_add_merchant_post**](AddTerminatedMerchantApi.md#fraud_merchant_v3_add_merchant_post) | **POST** /fraud/merchant/v3/add-merchant | Used by Acquirers to add a terminated a merchant in the MATCH system. Merchant information, and up to five principal owners per merchant, can be provided by an acquiring bank as part of the listing.


# **fraud_merchant_v3_add_merchant_post**
> AddTerminatedMerchantResponseSchema fraud_merchant_v3_add_merchant_post(add_terminated_merchant_request_schema)

Used by Acquirers to add a terminated a merchant in the MATCH system. Merchant information, and up to five principal owners per merchant, can be provided by an acquiring bank as part of the listing.

Used by Acquirers to add a terminated a merchant in the MATCH system. Merchant information, and up to five principal owners per merchant, can be provided by an acquiring bank as part of the listing. 

### Example


```python
import openapi_client
from openapi_client.models.add_terminated_merchant_request_schema import AddTerminatedMerchantRequestSchema
from openapi_client.models.add_terminated_merchant_response_schema import AddTerminatedMerchantResponseSchema
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
    api_instance = openapi_client.AddTerminatedMerchantApi(api_client)
    add_terminated_merchant_request_schema = openapi_client.AddTerminatedMerchantRequestSchema() # AddTerminatedMerchantRequestSchema | Body of the Add Terminated Merchant Request

    try:
        # Used by Acquirers to add a terminated a merchant in the MATCH system. Merchant information, and up to five principal owners per merchant, can be provided by an acquiring bank as part of the listing.
        api_response = api_instance.fraud_merchant_v3_add_merchant_post(add_terminated_merchant_request_schema)
        print("The response of AddTerminatedMerchantApi->fraud_merchant_v3_add_merchant_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddTerminatedMerchantApi->fraud_merchant_v3_add_merchant_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **add_terminated_merchant_request_schema** | [**AddTerminatedMerchantRequestSchema**](AddTerminatedMerchantRequestSchema.md)| Body of the Add Terminated Merchant Request | 

### Return type

[**AddTerminatedMerchantResponseSchema**](AddTerminatedMerchantResponseSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The add terminated merchant response object. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

