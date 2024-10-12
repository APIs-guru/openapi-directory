# openapi_client.OfferApi

All URIs are relative to *https://api.ebay.com/sell/negotiation/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_eligible_items**](OfferApi.md#find_eligible_items) | **GET** /find_eligible_items | 
[**send_offer_to_interested_buyers**](OfferApi.md#send_offer_to_interested_buyers) | **POST** /send_offer_to_interested_buyers | 


# **find_eligible_items**
> PagedEligibleItemCollection find_eligible_items(x_ebay_c_marketplace_id, limit=limit, offset=offset)



This method evaluates a seller's current listings and returns the set of IDs that are eligible for a seller-initiated discount offer to a buyer. A listing ID is returned only when one or more buyers have shown an &quot;interest&quot; in the listing. If any buyers have shown interest in a listing, the seller can initiate a &quot;negotiation&quot; with them by calling sendOfferToInterestedBuyers, which sends all interested buyers a message that offers the listing at a discount. For details about how to create seller offers to buyers, see Sending offers to buyers.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.paged_eligible_item_collection import PagedEligibleItemCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/negotiation/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/negotiation/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OfferApi(api_client)
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | The eBay marketplace on which you want to search for eligible listings. For a complete list of supported marketplaces, see Negotiation API requirements and restrictions.
    limit = 'limit_example' # str | This query parameter specifies the maximum number of items to return from the result set on a page in the paginated response. Minimum: 1 &nbsp; &nbsp;Maximum: 200 Default: 10 (optional)
    offset = 'offset_example' # str | This query parameter specifies the number of results to skip in the result set before returning the first result in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 results from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0 (optional)

    try:
        api_response = api_instance.find_eligible_items(x_ebay_c_marketplace_id, limit=limit, offset=offset)
        print("The response of OfferApi->find_eligible_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferApi->find_eligible_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_ebay_c_marketplace_id** | **str**| The eBay marketplace on which you want to search for eligible listings. For a complete list of supported marketplaces, see Negotiation API requirements and restrictions. | 
 **limit** | **str**| This query parameter specifies the maximum number of items to return from the result set on a page in the paginated response. Minimum: 1 &amp;nbsp; &amp;nbsp;Maximum: 200 Default: 10 | [optional] 
 **offset** | **str**| This query parameter specifies the number of results to skip in the result set before returning the first result in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 results from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0 | [optional] 

### Return type

[**PagedEligibleItemCollection**](PagedEligibleItemCollection.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_offer_to_interested_buyers**
> SendOfferToInterestedBuyersCollectionResponse send_offer_to_interested_buyers(x_ebay_c_marketplace_id, create_offers_request=create_offers_request)



This method sends eligible buyers offers to purchase items in a listing at a discount. When a buyer has shown interest in a listing, they become &quot;eligible&quot; to receive a seller-initiated offer to purchase the item(s). Sellers use findEligibleItems to get the set of listings that have interested buyers. If a listing has interested buyers, sellers can use this method (sendOfferToInterestedBuyers) to send an offer to the buyers who are interested in the listing. The offer gives buyers the ability to purchase the associated listings at a discounted price. For details about how to create seller offers to buyers, see Sending offers to buyers.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.create_offers_request import CreateOffersRequest
from openapi_client.models.send_offer_to_interested_buyers_collection_response import SendOfferToInterestedBuyersCollectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/negotiation/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/negotiation/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OfferApi(api_client)
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | The eBay marketplace on which your listings with &quot;eligible&quot; buyers appear. For a complete list of supported marketplaces, see Negotiation API requirements and restrictions.
    create_offers_request = openapi_client.CreateOffersRequest() # CreateOffersRequest | Send offer to eligible items request. (optional)

    try:
        api_response = api_instance.send_offer_to_interested_buyers(x_ebay_c_marketplace_id, create_offers_request=create_offers_request)
        print("The response of OfferApi->send_offer_to_interested_buyers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferApi->send_offer_to_interested_buyers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_ebay_c_marketplace_id** | **str**| The eBay marketplace on which your listings with &amp;quot;eligible&amp;quot; buyers appear. For a complete list of supported marketplaces, see Negotiation API requirements and restrictions. | 
 **create_offers_request** | [**CreateOffersRequest**](CreateOffersRequest.md)| Send offer to eligible items request. | [optional] 

### Return type

[**SendOfferToInterestedBuyersCollectionResponse**](SendOfferToInterestedBuyersCollectionResponse.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

