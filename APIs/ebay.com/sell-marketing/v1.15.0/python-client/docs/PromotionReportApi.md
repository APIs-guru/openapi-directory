# openapi_client.PromotionReportApi

All URIs are relative to *https://api.ebay.com/sell/marketing/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_promotion_reports**](PromotionReportApi.md#get_promotion_reports) | **GET** /promotion_report | 


# **get_promotion_reports**
> PromotionsReportPagedCollection get_promotion_reports(marketplace_id, limit=limit, offset=offset, promotion_status=promotion_status, promotion_type=promotion_type, q=q)



This method generates a report that lists the seller's running, paused, and ended promotions for the specified eBay marketplace. The result set can be filtered by the promotion status and the number of results to return. You can also supply <i>keywords</i> to limit the report to promotions that contain the specified keywords. <br><br>Specify the eBay marketplace for which you want the report run using the <b>marketplace_id</b> query parameter. Supply additional query parameters to control the report as needed.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.promotions_report_paged_collection import PromotionsReportPagedCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PromotionReportApi(api_client)
    marketplace_id = 'marketplace_id_example' # str | The eBay marketplace ID of the site for which you want the promotions report.  <p><b>Valid values:</b>  </p><ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul>
    limit = 'limit_example' # str | Specifies the maximum number of promotions returned on a page from the result set.  <br><br><b>Default:</b> 200 <br><b>Maximum:</b> 200 (optional)
    offset = 'offset_example' # str | Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p> (optional)
    promotion_status = 'promotion_status_example' # str | Limits the results to the promotions that are in the state specified by this query parameter.  <br><br><b>Valid values:</b> <ul><li><code>DRAFT</code></li> <li><code>SCHEDULED</code></li> <li><code>RUNNING</code></li> <li><code>PAUSED</code></li> <li><code>ENDED</code></li></ul><b>Maximum number of values supported:</b> 1 (optional)
    promotion_type = 'promotion_type_example' # str | Filters the returned promotions in the report based on their campaign promotion type. Specify one of the following values to indicate the promotion type you want returned in the report: <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul> (optional)
    q = 'q_example' # str | A string consisting of one or more <i>keywords</i>. eBay filters the response by returning only the promotions that contain the supplied keywords in the promotion title.  <br><br><b>Example:</b> \"iPhone\" or \"Harry Potter.\"  <br><br>Commas that separate keywords are ignored. For example, a keyword string of \"iPhone, iPad\" equals \"iPhone iPad\", and each results in a response that contains promotions with both \"iPhone\" and \"iPad\" in the title. (optional)

    try:
        api_response = api_instance.get_promotion_reports(marketplace_id, limit=limit, offset=offset, promotion_status=promotion_status, promotion_type=promotion_type, q=q)
        print("The response of PromotionReportApi->get_promotion_reports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PromotionReportApi->get_promotion_reports: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_id** | **str**| The eBay marketplace ID of the site for which you want the promotions report.  &lt;p&gt;&lt;b&gt;Valid values:&lt;/b&gt;  &lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;EBAY_AU&lt;/code&gt; &#x3D; Australia&lt;/li&gt; &lt;li&gt;&lt;code&gt;EBAY_DE&lt;/code&gt; &#x3D; Germany&lt;/li&gt; &lt;li&gt;&lt;code&gt;EBAY_ES&lt;/code&gt; &#x3D; Spain&lt;/li&gt; &lt;li&gt;&lt;code&gt;EBAY_FR&lt;/code&gt; &#x3D; France&lt;/li&gt; &lt;li&gt;&lt;code&gt;EBAY_GB&lt;/code&gt; &#x3D; Great Britain&lt;/li&gt; &lt;li&gt;&lt;code&gt;EBAY_IT&lt;/code&gt; &#x3D; Italy&lt;/li&gt; &lt;li&gt;&lt;code&gt;EBAY_US&lt;/code&gt; &#x3D; United States&lt;/li&gt;&lt;/ul&gt; | 
 **limit** | **str**| Specifies the maximum number of promotions returned on a page from the result set.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Default:&lt;/b&gt; 200 &lt;br&gt;&lt;b&gt;Maximum:&lt;/b&gt; 200 | [optional] 
 **offset** | **str**| Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response.  &lt;p&gt;Combine &lt;b&gt;offset&lt;/b&gt; with the &lt;b&gt;limit&lt;/b&gt; query parameter to control the items returned in the response. For example, if you supply an &lt;b&gt;offset&lt;/b&gt; of &lt;code&gt;0&lt;/code&gt; and a &lt;b&gt;limit&lt;/b&gt; of &lt;code&gt;10&lt;/code&gt;, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If &lt;b&gt;offset&lt;/b&gt; is &lt;code&gt;10&lt;/code&gt; and &lt;b&gt;limit&lt;/b&gt; is &lt;code&gt;20&lt;/code&gt;, the first page of the response contains items 11-30 from the complete result set.&lt;/p&gt; &lt;p&gt;&lt;b&gt;Default:&lt;/b&gt; 0&lt;/p&gt; | [optional] 
 **promotion_status** | **str**| Limits the results to the promotions that are in the state specified by this query parameter.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Valid values:&lt;/b&gt; &lt;ul&gt;&lt;li&gt;&lt;code&gt;DRAFT&lt;/code&gt;&lt;/li&gt; &lt;li&gt;&lt;code&gt;SCHEDULED&lt;/code&gt;&lt;/li&gt; &lt;li&gt;&lt;code&gt;RUNNING&lt;/code&gt;&lt;/li&gt; &lt;li&gt;&lt;code&gt;PAUSED&lt;/code&gt;&lt;/li&gt; &lt;li&gt;&lt;code&gt;ENDED&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt;&lt;b&gt;Maximum number of values supported:&lt;/b&gt; 1 | [optional] 
 **promotion_type** | **str**| Filters the returned promotions in the report based on their campaign promotion type. Specify one of the following values to indicate the promotion type you want returned in the report: &lt;ul&gt;&lt;li&gt;&lt;code&gt;CODED_COUPON&lt;/code&gt; &amp;ndash; A coupon code promotion set with &lt;b&gt;createItemPromotion&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;&lt;code&gt;MARKDOWN_SALE&lt;/code&gt; &amp;ndash; A markdown promotion set with &lt;b&gt;createItemPriceMarkdownPromotion&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;&lt;code&gt;ORDER_DISCOUNT&lt;/code&gt; &amp;ndash; A threshold promotion set with &lt;b&gt;createItemPromotion&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;&lt;code&gt;VOLUME_DISCOUNT&lt;/code&gt; &amp;ndash; A volume pricing promotion set with &lt;b&gt;createItemPromotion&lt;/b&gt;.&lt;/li&gt;&lt;/ul&gt; | [optional] 
 **q** | **str**| A string consisting of one or more &lt;i&gt;keywords&lt;/i&gt;. eBay filters the response by returning only the promotions that contain the supplied keywords in the promotion title.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; \&quot;iPhone\&quot; or \&quot;Harry Potter.\&quot;  &lt;br&gt;&lt;br&gt;Commas that separate keywords are ignored. For example, a keyword string of \&quot;iPhone, iPad\&quot; equals \&quot;iPhone iPad\&quot;, and each results in a response that contains promotions with both \&quot;iPhone\&quot; and \&quot;iPad\&quot; in the title. | [optional] 

### Return type

[**PromotionsReportPagedCollection**](PromotionsReportPagedCollection.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

