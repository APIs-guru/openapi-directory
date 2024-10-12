# openapi_client.TerminationInquiryRequestApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fraud_merchant_v3_termination_inquiry_post**](TerminationInquiryRequestApi.md#fraud_merchant_v3_termination_inquiry_post) | **POST** /fraud/merchant/v3/termination-inquiry | Returns information on merchants that have been terminated and merchants that have inquired upon. Provides the acquiring bank with information, such as, if a Merchant or individual has been terminated by another acquirer already, the reason for termination, the history of fraudulent or risky business practices that led to that termination and the inquiry that was made already on the Merchant or individual by own or another acquiring bank (if opted).


# **fraud_merchant_v3_termination_inquiry_post**
> TerminationInquirySchema fraud_merchant_v3_termination_inquiry_post(page_offset, page_length, termination_inquiry_request)

Returns information on merchants that have been terminated and merchants that have inquired upon. Provides the acquiring bank with information, such as, if a Merchant or individual has been terminated by another acquirer already, the reason for termination, the history of fraudulent or risky business practices that led to that termination and the inquiry that was made already on the Merchant or individual by own or another acquiring bank (if opted).

Returns information on merchants that have been terminated and merchants which have been inquired upon. MATCH can provide the acquiring bank with information, such as, if a Merchant or individual has been terminated by another acquirer already, the reason for termination, the history of fraudulent or risky business practices that led to that termination and the inquiry that was made already on the Merchant or individual by own or another acquiring bank (If opted) 

### Example


```python
import openapi_client
from openapi_client.models.termination_inquiry_request_schema import TerminationInquiryRequestSchema
from openapi_client.models.termination_inquiry_schema import TerminationInquirySchema
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
    api_instance = openapi_client.TerminationInquiryRequestApi(api_client)
    page_offset = 0 # float | The zero-based offset to start at. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests.
    page_length = 10 # float | The maximum number of items to retrieve within the current \"page\" of results.
    termination_inquiry_request = openapi_client.TerminationInquiryRequestSchema() # TerminationInquiryRequestSchema | Body of the Termination Inquiry Request

    try:
        # Returns information on merchants that have been terminated and merchants that have inquired upon. Provides the acquiring bank with information, such as, if a Merchant or individual has been terminated by another acquirer already, the reason for termination, the history of fraudulent or risky business practices that led to that termination and the inquiry that was made already on the Merchant or individual by own or another acquiring bank (if opted).
        api_response = api_instance.fraud_merchant_v3_termination_inquiry_post(page_offset, page_length, termination_inquiry_request)
        print("The response of TerminationInquiryRequestApi->fraud_merchant_v3_termination_inquiry_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TerminationInquiryRequestApi->fraud_merchant_v3_termination_inquiry_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_offset** | **float**| The zero-based offset to start at. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests. | 
 **page_length** | **float**| The maximum number of items to retrieve within the current \&quot;page\&quot; of results. | 
 **termination_inquiry_request** | [**TerminationInquiryRequestSchema**](TerminationInquiryRequestSchema.md)| Body of the Termination Inquiry Request | 

### Return type

[**TerminationInquirySchema**](TerminationInquirySchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The termination inquiry response object. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

