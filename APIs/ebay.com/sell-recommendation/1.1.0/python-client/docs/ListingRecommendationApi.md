# openapi_client.ListingRecommendationApi

All URIs are relative to *https://api.ebay.com/sell/recommendation/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_listing_recommendations**](ListingRecommendationApi.md#find_listing_recommendations) | **POST** /find | 


# **find_listing_recommendations**
> PagedListingRecommendationCollection find_listing_recommendations(x_ebay_c_marketplace_id, filter=filter, limit=limit, offset=offset, find_listing_recommendation_request=find_listing_recommendation_request)



The find method currently returns information for a single recommendation type (AD) which contains information that sellers can use to configure Promoted Listings ad campaigns. The response from this method includes an array of the seller's listing IDs, where each element in the array contains recommendations related to the associated listing ID. For details on how to use this method, see Using the Recommendation API to help configure campaigns. The AD recommendation type The AD type contains two sets of information: The promoteWithAd indicator The promoteWithAd response field indicates whether or not eBay recommends you place the associated listing in a Promoted Listings ad campaign. The returned value is set to either RECOMMENDED or UNDETERMINED, where RECOMMENDED identifies the listings that will benefit the most from having them included in an ad campaign. The bid percentage Also known as the &quot;ad rate,&quot; the bidPercentage field provides the current trending bid percentage of similarly promoted items in the marketplace. The ad rate is a user-specified value that indicates the level of promotion that eBay applies to the campaign across the marketplace. The value is also used to calculate the Promotion Listings fee, which is assessed to the seller if a Promoted Listings action results in the sale of an item. Configuring the request You can configure a request to review all of a seller's currently active listings, or just a subset of them. All active listings &ndash; If you leave the request body empty, the request targets all the items currently listed by the seller. Here, the response is filtered to contain only the items where promoteWithAd equals RECOMMENDED. In this case, eBay recommends that all the returned listings should be included in a Promoted Listings ad campaign. Selected listing IDs &ndash; If you populate the request body with a set of listingIds, the response contains data for all the specified listing IDs. In this scenario, the response provides you with information on listings where the promoteWithAd can be either RECOMMENDED or UNDETERMINED. The paginated response Because the response can contain many listing IDs, the findListingRecommendations method paginates the response set. You can control size of the returned pages, as well as an offset that dictates where to start the pagination, using query parameters in the request.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.find_listing_recommendation_request import FindListingRecommendationRequest
from openapi_client.models.paged_listing_recommendation_collection import PagedListingRecommendationCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/recommendation/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/recommendation/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListingRecommendationApi(api_client)
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | Use this header to specify the eBay marketplace where you list the items for which you want to get recommendations.
    filter = 'filter_example' # str | Provide a list of key-value pairs to specify the criteria you want to use to filter the response. In the list, separate each filter key from its associated value with a colon (&quot;:&quot;). Currently, the only supported filter value is recommendationTypes and it supports only the (&quot;AD&quot;) type. Follow the recommendationTypes specifier with the filter type(s) enclosed in curly braces (&quot;{ }&quot;), and separate multiple types with commas. Example: filter=recommendationTypes:{AD} Default: recommendationTypes:{AD} (optional)
    limit = 'limit_example' # str | Use this query parameter to set the maximum number of ads to return on a page from the paginated response. Default: 10 Maximum: 500 (optional)
    offset = 'offset_example' # str | Specifies the number of ads to skip in the result set before returning the first ad in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0 (optional)
    find_listing_recommendation_request = openapi_client.FindListingRecommendationRequest() # FindListingRecommendationRequest |  (optional)

    try:
        api_response = api_instance.find_listing_recommendations(x_ebay_c_marketplace_id, filter=filter, limit=limit, offset=offset, find_listing_recommendation_request=find_listing_recommendation_request)
        print("The response of ListingRecommendationApi->find_listing_recommendations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListingRecommendationApi->find_listing_recommendations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_ebay_c_marketplace_id** | **str**| Use this header to specify the eBay marketplace where you list the items for which you want to get recommendations. | 
 **filter** | **str**| Provide a list of key-value pairs to specify the criteria you want to use to filter the response. In the list, separate each filter key from its associated value with a colon (&amp;quot;:&amp;quot;). Currently, the only supported filter value is recommendationTypes and it supports only the (&amp;quot;AD&amp;quot;) type. Follow the recommendationTypes specifier with the filter type(s) enclosed in curly braces (&amp;quot;{ }&amp;quot;), and separate multiple types with commas. Example: filter&#x3D;recommendationTypes:{AD} Default: recommendationTypes:{AD} | [optional] 
 **limit** | **str**| Use this query parameter to set the maximum number of ads to return on a page from the paginated response. Default: 10 Maximum: 500 | [optional] 
 **offset** | **str**| Specifies the number of ads to skip in the result set before returning the first ad in the paginated response. Combine offset with the limit query parameter to control the items returned in the response. For example, if you supply an offset of 0 and a limit of 10, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If offset is 10 and limit is 20, the first page of the response contains items 11-30 from the complete result set. Default: 0 | [optional] 
 **find_listing_recommendation_request** | [**FindListingRecommendationRequest**](FindListingRecommendationRequest.md)|  | [optional] 

### Return type

[**PagedListingRecommendationCollection**](PagedListingRecommendationCollection.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

