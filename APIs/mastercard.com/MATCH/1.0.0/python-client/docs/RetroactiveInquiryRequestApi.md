# openapi_client.RetroactiveInquiryRequestApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fraud_merchant_v3_retro_retro_list_post**](RetroactiveInquiryRequestApi.md#fraud_merchant_v3_retro_retro_list_post) | **POST** /fraud/merchant/v3/retro/retro-list | Returns the summary of Retro matches for the given Acquirer Id. This resource will return the summary of Retroactive Inquiry matches for the given Acquirer ID/ICA. If an initial inquiry does not result in a possible match, it is still possible that the merchant listing could appear sometime in the next 360 days. This may occur when another acquirer enters the merchant into the MATCH database. The system will automatically continue to search the MATCH system for 360 days. To view these notifications, acquirers must use the Retroactive Inquiry service.


# **fraud_merchant_v3_retro_retro_list_post**
> RetroResponseSchema fraud_merchant_v3_retro_retro_list_post(retro_request)

Returns the summary of Retro matches for the given Acquirer Id. This resource will return the summary of Retroactive Inquiry matches for the given Acquirer ID/ICA. If an initial inquiry does not result in a possible match, it is still possible that the merchant listing could appear sometime in the next 360 days. This may occur when another acquirer enters the merchant into the MATCH database. The system will automatically continue to search the MATCH system for 360 days. To view these notifications, acquirers must use the Retroactive Inquiry service.

Returns the summary of Retro matches for the given Acquirer Id. This resource will return the summary of Retroactive Inquiry matches for the given Acquirer ID/ICA. If an initial inquiry does not result in a possible match, it is still possible that the merchant listing could appear sometime in the next 360 days. This may occur when another acquirer enters the merchant into the MATCH database. The system will automatically continue to search the MATCH system for 360 days. To view these notifications, acquirers must use the Retroactive Inquiry service. 

### Example


```python
import openapi_client
from openapi_client.models.retro_request_schema import RetroRequestSchema
from openapi_client.models.retro_response_schema import RetroResponseSchema
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
    api_instance = openapi_client.RetroactiveInquiryRequestApi(api_client)
    retro_request = openapi_client.RetroRequestSchema() # RetroRequestSchema | The retro request object

    try:
        # Returns the summary of Retro matches for the given Acquirer Id. This resource will return the summary of Retroactive Inquiry matches for the given Acquirer ID/ICA. If an initial inquiry does not result in a possible match, it is still possible that the merchant listing could appear sometime in the next 360 days. This may occur when another acquirer enters the merchant into the MATCH database. The system will automatically continue to search the MATCH system for 360 days. To view these notifications, acquirers must use the Retroactive Inquiry service.
        api_response = api_instance.fraud_merchant_v3_retro_retro_list_post(retro_request)
        print("The response of RetroactiveInquiryRequestApi->fraud_merchant_v3_retro_retro_list_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RetroactiveInquiryRequestApi->fraud_merchant_v3_retro_retro_list_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **retro_request** | [**RetroRequestSchema**](RetroRequestSchema.md)| The retro request object | 

### Return type

[**RetroResponseSchema**](RetroResponseSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retroactive request response object. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

