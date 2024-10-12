# openapi_client.OfferDetailsApi

All URIs are relative to *https://api.mastercard.com/plo/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offerdetails_get**](OfferDetailsApi.md#offerdetails_get) | **GET** /offerdetails | Returns Information on an Offer


# **offerdetails_get**
> OfferDetailsResponse offerdetails_get(fid, user_token, offer_id)

Returns Information on an Offer

This resource returns extended information for the requested offer, typically used to display a detail view. 

### Example


```python
import openapi_client
from openapi_client.models.offer_details_response import OfferDetailsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com/plo/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com/plo/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OfferDetailsApi(api_client)
    fid = '999999' # str | Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
    user_token = 'mh3WonUm5xmE' # str | Session identifier as returned by the UserToken resource.
    offer_id = 'c7dcfca7-cf35-36b0-9e67-d4f363d643e0' # str | System-wide identifier for the campaign, not intended for end-user display.

    try:
        # Returns Information on an Offer
        api_response = api_instance.offerdetails_get(fid, user_token, offer_id)
        print("The response of OfferDetailsApi->offerdetails_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferDetailsApi->offerdetails_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | **str**| Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation. | 
 **user_token** | **str**| Session identifier as returned by the UserToken resource. | 
 **offer_id** | **str**| System-wide identifier for the campaign, not intended for end-user display. | 

### Return type

[**OfferDetailsResponse**](OfferDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This resource returns extended information for the requested offer, typically used to display a detail view. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

