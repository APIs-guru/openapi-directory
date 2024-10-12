# openapi_client.MerchandisedProductApi

All URIs are relative to *https://api.ebay.com/buy/marketing/v1_beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_merchandised_products**](MerchandisedProductApi.md#get_merchandised_products) | **GET** /merchandised_product | 


# **get_merchandised_products**
> BestSellingProductResponse get_merchandised_products(category_id, metric_name, aspect_filter=aspect_filter, limit=limit)



This method returns an array of products based on the category and metric specified. This includes details of the product, such as the eBay product ID (EPID), title, and user reviews and ratings for the product. You can use the <code>epid</code> returned by this method in the Browse API <b>search</b> method to retrieve items for this product. <h3><b>Restrictions </b></h3> <ul><li>To test <b> getMerchandisedProducts</b> in Sandbox, you must use category ID 9355 and the response will be mock data.  </li>   <li>For a list of supported sites and other restrictions, see <a href=\"/api-docs/buy/marketing/overview.html#API\">API Restrictions</a>.</li>  </ul>

### Example

* OAuth Authentication (Client_Credentials):

```python
import openapi_client
from openapi_client.models.best_selling_product_response import BestSellingProductResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/buy/marketing/v1_beta
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/buy/marketing/v1_beta"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MerchandisedProductApi(api_client)
    category_id = 'category_id_example' # str | This query parameter limits the products returned to a specific eBay category.  <br /> <br />The list of eBay category IDs is not published and category IDs are not all the same across all the eBay maketplace. You can use the following techniques to find a category by site: <ul> <li>Use the <a href=\"https://pages.ebay.com/sellerinformation/news/categorychanges.html\" target=\"_blank\">Category Changes page</a>.</li> <li>Use the Taxonomy API. For details see <a href=\"/api-docs/buy/buy-categories.html\">Get Categories for Buy APIs</a>. </li>  <li>Use the Browse API and submit the following method to get the <b> dominantCategoryId</b> for an item. <br /><code>/buy/browse/v1/item_summary/search?q=<em>keyword</em>&fieldgroups=ASPECT_REFINEMENTS  </code></li></ul>  <b> Maximum: </b> 1 <br /> <b> Required: </b> 1 
    metric_name = 'metric_name_example' # str | This value filters the result set by the specified metric. Only products in this metric are returned. Currently, the only metric supported is <code> BEST_SELLING</code>. <br /><br /><b> Default: </b>BEST_SELLING <br /> <b> Maximum: </b> 1 <br /> <b> Required: </b> 1
    aspect_filter = 'aspect_filter_example' # str | The aspect name/value pairs used to further refine product results. <br /><br /> For example: <br />&nbsp;&nbsp;&nbsp;<code>/buy/marketing/v1_beta/merchandised_product?category_id=31388&metric_name=BEST_SELLING&aspect_filter=Brand:Canon</code>  <br /><br />You can use the Browse API <b>search</b> method with the <code>fieldgroups=ASPECT_REFINEMENTS</code> field to return the aspects of a product. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/buy/marketing/types/gct:MarketingAspectFilter (optional)
    limit = 'limit_example' # str | This value specifies the maximum number of products to return in a result set. <br /> <br /><span class=\"tablenote\"> <b>Note:</b> Maximum value means the method will return up <em>to</em> that many products per set, but it can be less than this value. If the number of products found is less than this value, the method will return all of the products matching the criteria.</span>  <br /><br /><b> Default:</b> 8<br /><b> Maximum: </b>100 (optional)

    try:
        api_response = api_instance.get_merchandised_products(category_id, metric_name, aspect_filter=aspect_filter, limit=limit)
        print("The response of MerchandisedProductApi->get_merchandised_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MerchandisedProductApi->get_merchandised_products: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| This query parameter limits the products returned to a specific eBay category.  &lt;br /&gt; &lt;br /&gt;The list of eBay category IDs is not published and category IDs are not all the same across all the eBay maketplace. You can use the following techniques to find a category by site: &lt;ul&gt; &lt;li&gt;Use the &lt;a href&#x3D;\&quot;https://pages.ebay.com/sellerinformation/news/categorychanges.html\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Category Changes page&lt;/a&gt;.&lt;/li&gt; &lt;li&gt;Use the Taxonomy API. For details see &lt;a href&#x3D;\&quot;/api-docs/buy/buy-categories.html\&quot;&gt;Get Categories for Buy APIs&lt;/a&gt;. &lt;/li&gt;  &lt;li&gt;Use the Browse API and submit the following method to get the &lt;b&gt; dominantCategoryId&lt;/b&gt; for an item. &lt;br /&gt;&lt;code&gt;/buy/browse/v1/item_summary/search?q&#x3D;&lt;em&gt;keyword&lt;/em&gt;&amp;fieldgroups&#x3D;ASPECT_REFINEMENTS  &lt;/code&gt;&lt;/li&gt;&lt;/ul&gt;  &lt;b&gt; Maximum: &lt;/b&gt; 1 &lt;br /&gt; &lt;b&gt; Required: &lt;/b&gt; 1  | 
 **metric_name** | **str**| This value filters the result set by the specified metric. Only products in this metric are returned. Currently, the only metric supported is &lt;code&gt; BEST_SELLING&lt;/code&gt;. &lt;br /&gt;&lt;br /&gt;&lt;b&gt; Default: &lt;/b&gt;BEST_SELLING &lt;br /&gt; &lt;b&gt; Maximum: &lt;/b&gt; 1 &lt;br /&gt; &lt;b&gt; Required: &lt;/b&gt; 1 | 
 **aspect_filter** | **str**| The aspect name/value pairs used to further refine product results. &lt;br /&gt;&lt;br /&gt; For example: &lt;br /&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;/buy/marketing/v1_beta/merchandised_product?category_id&#x3D;31388&amp;metric_name&#x3D;BEST_SELLING&amp;aspect_filter&#x3D;Brand:Canon&lt;/code&gt;  &lt;br /&gt;&lt;br /&gt;You can use the Browse API &lt;b&gt;search&lt;/b&gt; method with the &lt;code&gt;fieldgroups&#x3D;ASPECT_REFINEMENTS&lt;/code&gt; field to return the aspects of a product. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/buy/marketing/types/gct:MarketingAspectFilter | [optional] 
 **limit** | **str**| This value specifies the maximum number of products to return in a result set. &lt;br /&gt; &lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt; &lt;b&gt;Note:&lt;/b&gt; Maximum value means the method will return up &lt;em&gt;to&lt;/em&gt; that many products per set, but it can be less than this value. If the number of products found is less than this value, the method will return all of the products matching the criteria.&lt;/span&gt;  &lt;br /&gt;&lt;br /&gt;&lt;b&gt; Default:&lt;/b&gt; 8&lt;br /&gt;&lt;b&gt; Maximum: &lt;/b&gt;100 | [optional] 

### Return type

[**BestSellingProductResponse**](BestSellingProductResponse.md)

### Authorization

[Client_Credentials](../README.md#Client_Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

