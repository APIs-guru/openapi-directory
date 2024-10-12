# openapi_client.MatchedOffersApi

All URIs are relative to *https://api.mastercard.com/plo/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**matchedoffers_get**](MatchedOffersApi.md#matchedoffers_get) | **GET** /matchedoffers | Returns Matched Offers


# **matchedoffers_get**
> MatchedOffersResponse matchedoffers_get(fid, user_token, lang=lang, merchant_name=merchant_name, category=category, offer_type=offer_type, page_number=page_number, items_per_page=items_per_page)

Returns Matched Offers

This resource returns offers that are available to the user and conform to the search criteria (if specified). 

### Example


```python
import openapi_client
from openapi_client.models.matched_offers_response import MatchedOffersResponse
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
    api_instance = openapi_client.MatchedOffersApi(api_client)
    fid = '999999' # str | Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
    user_token = 'user_token_example' # str | Session identifier as returned by the UserToken resource.
    lang = 'en_US' # str | When utilized with a multi-lingual implementation, may be the tongue and country of the user in ISO 639-1, underscore, ISO 3166-1 alpha-2 format. (optional)
    merchant_name = 'Example.com' # str | Fuzzy term to search retailers with offers for the user. In general, searching of Matched Offers is not advised as users generally have a modest selection of highly relevant promotions. (optional)
    category = 'DEPARTMENTSTORE' # str | Offer Categories. (optional)
    offer_type = 'POSTPAIDCREDIT' # str | The kind of deal. POSTPAIDCREDIT- Statement Credit Offer, which is a discount that is automatically applied to the card linked to the user and utilized to make the purchase. (optional)
    page_number = 1 # int | Segment of offers to return. (optional)
    items_per_page = 1 # int | Segment size of offer to be returned. Default is 25. (optional)

    try:
        # Returns Matched Offers
        api_response = api_instance.matchedoffers_get(fid, user_token, lang=lang, merchant_name=merchant_name, category=category, offer_type=offer_type, page_number=page_number, items_per_page=items_per_page)
        print("The response of MatchedOffersApi->matchedoffers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MatchedOffersApi->matchedoffers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | **str**| Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation. | 
 **user_token** | **str**| Session identifier as returned by the UserToken resource. | 
 **lang** | **str**| When utilized with a multi-lingual implementation, may be the tongue and country of the user in ISO 639-1, underscore, ISO 3166-1 alpha-2 format. | [optional] 
 **merchant_name** | **str**| Fuzzy term to search retailers with offers for the user. In general, searching of Matched Offers is not advised as users generally have a modest selection of highly relevant promotions. | [optional] 
 **category** | **str**| Offer Categories. | [optional] 
 **offer_type** | **str**| The kind of deal. POSTPAIDCREDIT- Statement Credit Offer, which is a discount that is automatically applied to the card linked to the user and utilized to make the purchase. | [optional] 
 **page_number** | **int**| Segment of offers to return. | [optional] 
 **items_per_page** | **int**| Segment size of offer to be returned. Default is 25. | [optional] 

### Return type

[**MatchedOffersResponse**](MatchedOffersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This resource returns offers that are available to the user and conform to the search criteria (if specified). |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

