# openapi_client.ItemPriorityApi

All URIs are relative to *https://api.ebay.com/buy/feed/v1_beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_item_priority_feed**](ItemPriorityApi.md#get_item_priority_feed) | **GET** /item_priority | 


# **get_item_priority_feed**
> ItemPriorityResponse get_item_priority_feed(accept, x_ebay_c_marketplace_id, range, category_id, var_date)



<p>Using this method, you can download a TSV_GZIP (tab separated value gzip) <b>Item Priority</b> feed file, which allows you to track changes (deltas) in the status of your priority items, such as when an item is added or removed from a campaign.  The delta feed tracks the changes to the status of items within a category you specify in the input URI. You can also specify a specific date for the feed you want returned.</p><p><span class=\"tablenote\"><span style=\"color:#FF0000\"> <b> Important:</b> </span> You must consume the daily feeds (<b>Item</b>, <b>Item Group</b>) before consuming the <b>Item Priority</b> feed. This ensures that your inventory is up to date.</span></p><h3><b>Downloading feed files </b></h3>             <p><span class=\"tablenote\"><b>Note: </b> Filters are applied to the feed files. For details, see <a href=\"/api-docs/buy/static/api-feed.html#feed-filters\">Feed File Filters</a>. When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p><p>Priority Item feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href=\"#range-header\">Range</a> request header. The <a href=\"#content-range\">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs  and the total number of bytes in the file.       For more information about using these headers, see <a href=\"/api-docs/buy/static/api-feed_beta.html#retrv-gzip\">Retrieving a gzip feed file</a>.    </p>    <p>In addition to the API, there is an open source <a href=\"https://github.com/eBay/FeedSDK\" target=\"_blank\">Feed SDK</a> written in Java that downloads, combines files into a single file when needed, and unzips the entire feed file. It also lets you specify field filters to curate the items in the file.</p>              <p><span class=\"tablenote\">  <b> Note:</b>  A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span>  </p>                <h3><b>Restrictions </b></h3>                <p>For a list of supported sites and other restrictions, see <a href=\"/api-docs/buy/feed/overview.html#API\">API Restrictions</a>.</p>

### Example

* OAuth Authentication (Client_Credentials):

```python
import openapi_client
from openapi_client.models.item_priority_response import ItemPriorityResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/buy/feed/v1_beta
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/buy/feed/v1_beta"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ItemPriorityApi(api_client)
    accept = 'accept_example' # str | The formats that the client accepts for the response.<br><br>A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate error codes that are returned in JSON format.<br><br><b>Default:</b> <code>application/json,text/tab-separated-values</code>
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | The ID of the eBay marketplace where the item is hosted. <b>Note: </b> This value is case sensitive.<br><br>For example: <br>&nbsp;&nbsp;<code>X-EBAY-C-MARKETPLACE-ID = EBAY_US</code>  <br><br> For a list of supported sites see, <a href=\"/api-docs/buy/static/ref-marketplace-supported.html\">Buy API Support by Marketplace</a>.
    range = 'range_example' # str | Header specifying content range to be retrieved. Only supported range is bytes.<br> <br><b>Example</b> : <code>bytes = 0-102400</code>.
    category_id = 'category_id_example' # str | An eBay top-level category ID of the items to be returned in the feed file.<br> <br>The list of eBay category IDs changes over time and category IDs are not the same across all the eBay marketplaces. To get a list of the top-level categories for a marketplaces, you can use the Taxonomy API <a href=\"/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategoryTree\">getCategoryTree</a> method. This method retrieves the complete category tree for the marketplace. The top-level categories are identified by the <b>categoryTreeNodeLevel</b> field.<br><br><b>For example:</b><br>&nbsp;&nbsp;<code>\"categoryTreeNodeLevel\": 1</code> <br><br>For details see <a href=\"/api-docs/buy/api-feed.html#Getcat\">Get the eBay categories of a marketplace</a>.</li></ul><br><br><b>Restriction:</b> Must be a top-level category other than Real Estate. Items listed under Real Estate L1 categories are excluded from all feeds in all marketplaces.
    var_date = 'var_date_example' # str | The date of the feed you want returned. This can be up to 14 days in the past but cannot be set to a date in the future.<br> <br><b>Format:</b> <code>yyyyMMdd</code><br ><br><span class=\"tablenote\"> <b>Note: </b><ul>  <li>The daily <b>Item</b> feed files are available each day after 9AM MST (US Mountain Standard Time), which is -7 hours UTC time.</li>    <li>There is a 48 hour latency when generating the <b> Item</b> feed files. This means you can download the file for July 10th on July 12 after 9AM MST. <br><br><b>Note: </b> For categories with a large number of items, the latency can be up to 72 hours.</li> </ul></span>

    try:
        api_response = api_instance.get_item_priority_feed(accept, x_ebay_c_marketplace_id, range, category_id, var_date)
        print("The response of ItemPriorityApi->get_item_priority_feed:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ItemPriorityApi->get_item_priority_feed: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **str**| The formats that the client accepts for the response.&lt;br&gt;&lt;br&gt;A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate error codes that are returned in JSON format.&lt;br&gt;&lt;br&gt;&lt;b&gt;Default:&lt;/b&gt; &lt;code&gt;application/json,text/tab-separated-values&lt;/code&gt; | 
 **x_ebay_c_marketplace_id** | **str**| The ID of the eBay marketplace where the item is hosted. &lt;b&gt;Note: &lt;/b&gt; This value is case sensitive.&lt;br&gt;&lt;br&gt;For example: &lt;br&gt;&amp;nbsp;&amp;nbsp;&lt;code&gt;X-EBAY-C-MARKETPLACE-ID &#x3D; EBAY_US&lt;/code&gt;  &lt;br&gt;&lt;br&gt; For a list of supported sites see, &lt;a href&#x3D;\&quot;/api-docs/buy/static/ref-marketplace-supported.html\&quot;&gt;Buy API Support by Marketplace&lt;/a&gt;. | 
 **range** | **str**| Header specifying content range to be retrieved. Only supported range is bytes.&lt;br&gt; &lt;br&gt;&lt;b&gt;Example&lt;/b&gt; : &lt;code&gt;bytes &#x3D; 0-102400&lt;/code&gt;. | 
 **category_id** | **str**| An eBay top-level category ID of the items to be returned in the feed file.&lt;br&gt; &lt;br&gt;The list of eBay category IDs changes over time and category IDs are not the same across all the eBay marketplaces. To get a list of the top-level categories for a marketplaces, you can use the Taxonomy API &lt;a href&#x3D;\&quot;/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategoryTree\&quot;&gt;getCategoryTree&lt;/a&gt; method. This method retrieves the complete category tree for the marketplace. The top-level categories are identified by the &lt;b&gt;categoryTreeNodeLevel&lt;/b&gt; field.&lt;br&gt;&lt;br&gt;&lt;b&gt;For example:&lt;/b&gt;&lt;br&gt;&amp;nbsp;&amp;nbsp;&lt;code&gt;\&quot;categoryTreeNodeLevel\&quot;: 1&lt;/code&gt; &lt;br&gt;&lt;br&gt;For details see &lt;a href&#x3D;\&quot;/api-docs/buy/api-feed.html#Getcat\&quot;&gt;Get the eBay categories of a marketplace&lt;/a&gt;.&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;&lt;br&gt;&lt;b&gt;Restriction:&lt;/b&gt; Must be a top-level category other than Real Estate. Items listed under Real Estate L1 categories are excluded from all feeds in all marketplaces. | 
 **var_date** | **str**| The date of the feed you want returned. This can be up to 14 days in the past but cannot be set to a date in the future.&lt;br&gt; &lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;yyyyMMdd&lt;/code&gt;&lt;br &gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt; &lt;b&gt;Note: &lt;/b&gt;&lt;ul&gt;  &lt;li&gt;The daily &lt;b&gt;Item&lt;/b&gt; feed files are available each day after 9AM MST (US Mountain Standard Time), which is -7 hours UTC time.&lt;/li&gt;    &lt;li&gt;There is a 48 hour latency when generating the &lt;b&gt; Item&lt;/b&gt; feed files. This means you can download the file for July 10th on July 12 after 9AM MST. &lt;br&gt;&lt;br&gt;&lt;b&gt;Note: &lt;/b&gt; For categories with a large number of items, the latency can be up to 72 hours.&lt;/li&gt; &lt;/ul&gt;&lt;/span&gt; | 

### Return type

[**ItemPriorityResponse**](ItemPriorityResponse.md)

### Authorization

[Client_Credentials](../README.md#Client_Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/tab-separated-values

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Partial Content |  * Content-range - &lt;a name&#x3D;\&quot;content-range\&quot;&gt;&lt;/a&gt;The &lt;b&gt;content-range&lt;/b&gt; response header indicates where in the full resource this partial chunk of data belongs. It returns the lower and upper values in bytes (specified by the &lt;b&gt; Range&lt;/b&gt; header) of the chunk and the total size of the file being downloaded in bytes. &lt;br&gt;&lt;br&gt;&lt;b&gt; Maximum range&lt;/b&gt;: 100 MB&lt;br&gt;&lt;br&gt;The following is an example of a &lt;b&gt;content-range&lt;/b&gt; response, where 0-10 is the lower and upper limit in bytes and 1000 is the total size of the file in bytes. &lt;br&gt;&lt;br&gt; &amp;nbsp;&amp;nbsp;&lt;code&gt;0-10/1000&lt;/code&gt;  &lt;br&gt;&lt;br&gt;The following example of a &lt;b&gt;content-range&lt;/b&gt; response indicates the value of the &lt;b&gt; Range&lt;/b&gt; header is invalid and a 416 status code is returned.&lt;br&gt;&lt;br&gt;&amp;nbsp;&amp;nbsp; &lt;code&gt;*/1000&lt;/code&gt; &lt;br&gt;&lt;br&gt;For more information and examples, see &lt;a href&#x3D;\&quot;/api-docs/buy/static/api-feed_beta.html#retrv-gzip\&quot;&gt;Retrieving a gzip feed file&lt;/a&gt;. <br>  * Last-Modified - Returns the generated date of the feed file, which will be the latest file available. For example:&lt;br&gt; &lt;b&gt;Last-Modified&lt;/b&gt;&amp;nbsp;&amp;nbsp;&lt;code&gt;Wed, 21 Oct 2015 07:28:00 GMT&lt;/code&gt; <br>  |
**204** | No Content |  -  |
**206** | Partial Content |  * Content-range - &lt;a name&#x3D;\&quot;content-range\&quot;&gt;&lt;/a&gt;The &lt;b&gt;content-range&lt;/b&gt; response header indicates where in the full resource this partial chunk of data belongs. It returns the lower and upper values in bytes (specified by the &lt;b&gt; Range&lt;/b&gt; header) of the chunk and the total size of the file being downloaded in bytes. &lt;br&gt;&lt;br&gt;&lt;b&gt; Maximum range&lt;/b&gt;: 100 MB&lt;br&gt;&lt;br&gt;The following is an example of a &lt;b&gt;content-range&lt;/b&gt; response, where 0-10 is the lower and upper limit in bytes and 1000 is the total size of the file in bytes. &lt;br&gt;&lt;br&gt; &amp;nbsp;&amp;nbsp;&lt;code&gt;0-10/1000&lt;/code&gt;  &lt;br&gt;&lt;br&gt;The following example of a &lt;b&gt;content-range&lt;/b&gt; response indicates the value of the &lt;b&gt; Range&lt;/b&gt; header is invalid and a 416 status code is returned.&lt;br&gt;&lt;br&gt;&amp;nbsp;&amp;nbsp; &lt;code&gt;*/1000&lt;/code&gt; &lt;br&gt;&lt;br&gt;For more information and examples, see &lt;a href&#x3D;\&quot;/api-docs/buy/static/api-feed_beta.html#retrv-gzip\&quot;&gt;Retrieving a gzip feed file&lt;/a&gt;. <br>  * Last-Modified - Returns the generated date of the feed file, which will be the latest file available. For example:&lt;br&gt; &lt;b&gt;Last-Modified&lt;/b&gt;&amp;nbsp;&amp;nbsp;&lt;code&gt;Wed, 21 Oct 2015 07:28:00 GMT&lt;/code&gt; <br>  |
**400** | Bad request |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**416** | Range not satisfiable |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

