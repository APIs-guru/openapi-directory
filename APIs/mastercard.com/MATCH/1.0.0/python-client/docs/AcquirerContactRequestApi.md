# openapi_client.AcquirerContactRequestApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fraud_merchant_v3_common_contact_details_post**](AcquirerContactRequestApi.md#fraud_merchant_v3_common_contact_details_post) | **POST** /fraud/merchant/v3/common/contact-details | Returns the contact information for the acquirer id requested. When MATCH returns a possible merchant match, this resource assists users by retrieving the contact information associated with the Acquirer ID/ICA that added the merchant to MATCH.


# **fraud_merchant_v3_common_contact_details_post**
> ContactResponseSchema fraud_merchant_v3_common_contact_details_post(contact_request)

Returns the contact information for the acquirer id requested. When MATCH returns a possible merchant match, this resource assists users by retrieving the contact information associated with the Acquirer ID/ICA that added the merchant to MATCH.

Returns the contact information for the acquirer id requested. When MATCH returns a possible merchant match, this resource assists users by retrieving the contact information associated with the Acquirer ID/ICA that added the merchant to MATCH. 

### Example


```python
import openapi_client
from openapi_client.models.contact_request_schema import ContactRequestSchema
from openapi_client.models.contact_response_schema import ContactResponseSchema
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
    api_instance = openapi_client.AcquirerContactRequestApi(api_client)
    contact_request = openapi_client.ContactRequestSchema() # ContactRequestSchema | The contact request object

    try:
        # Returns the contact information for the acquirer id requested. When MATCH returns a possible merchant match, this resource assists users by retrieving the contact information associated with the Acquirer ID/ICA that added the merchant to MATCH.
        api_response = api_instance.fraud_merchant_v3_common_contact_details_post(contact_request)
        print("The response of AcquirerContactRequestApi->fraud_merchant_v3_common_contact_details_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcquirerContactRequestApi->fraud_merchant_v3_common_contact_details_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_request** | [**ContactRequestSchema**](ContactRequestSchema.md)| The contact request object | 

### Return type

[**ContactResponseSchema**](ContactResponseSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The acquirer contact response object. |  -  |
**400** | Bad request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

