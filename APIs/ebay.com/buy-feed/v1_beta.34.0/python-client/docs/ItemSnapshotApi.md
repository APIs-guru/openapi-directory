# openapi_client.ItemSnapshotApi

All URIs are relative to *https://api.ebay.com/buy/feed/v1_beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_item_snapshot_feed**](ItemSnapshotApi.md#get_item_snapshot_feed) | **GET** /item_snapshot | 


# **get_item_snapshot_feed**
> ItemSnapshotResponse get_item_snapshot_feed(accept, x_ebay_c_marketplace_id, range, category_id, snapshot_date)



 <p>The <b> Hourly Snapshot</b> feed file is generated each hour every day for most categories. This method lets you download an <b> Hourly Snapshot</b> TSV_GZIP (tab-separated value gzip) feed file containing the details of all the items that have <a href=\"/api-docs/buy/static/api-feed.html#changed-items\">changed</a> <i> within</i> the specified day and hour for a specific category.  This means to generate the 8AM file of items that have changed from 8AM and 8:59AM, the service starts at 9AM. You can retrieve the 8AM snapshot file at 10AM.</p>    <p>Snapshot feeds now include new listings. You can check <a href=\"/api-docs/buy/feed/resources/item_snapshot/methods/getItemSnapshotFeed#response.items.itemCreationDate\">itemCreationDate</a> to identify listings that were newly created within the specified hour.</p>     <p><span class=\"tablenote\"><b>Note: </b>  Filters are applied to the feed files. For details, see <a href=\"/api-docs/buy/static/api-feed.html#feed-filters\">Feed File Filters</a>.  When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p>                  <p>You can use the response from this method to update the item details of items stored in your database. By looking at the value of <a href=\"/api-docs/buy/feed/resources/item_snapshot/methods/getItemSnapshotFeed#response.items.itemSnapshotDate\">itemSnapshotDate</a> for a given item, you will be able to tell which information is the latest.</p>   <p><span class=\"tablenote\"><span style=\"color:#FF0000\"> <b> Important:</b> </span> When the value of the <b> availability</b> column is <code>UNAVAILABLE</code>, only the <b>itemId</b> and <b> availability</b> columns are populated. </span></p><h3><b>Downloading feed files </b></h3><p>Hourly snapshot feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href=\"#range-header\">Range</a> request header. The <a href=\"#content-range\">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs and the total number of bytes in the file.       For more information about using these headers, see <a href=\"/api-docs/buy/static/api-feed_beta.html#retrv-gzip\">Retrieving a gzip feed file</a>.  </p>                                <p><span class=\"tablenote\">  <b> Note:</b> A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span></p><h3><b>Restrictions </b></h3><p>For a list of supported sites and other restrictions, see <a href=\"/api-docs/buy/feed/overview.html#API\">API Restrictions</a>.</p>  

### Example

* OAuth Authentication (Client_Credentials):

```python
import openapi_client
from openapi_client.models.item_snapshot_response import ItemSnapshotResponse
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
    api_instance = openapi_client.ItemSnapshotApi(api_client)
    accept = 'accept_example' # str | The formats that the client accepts for the response.<br><br>A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate error codes that are returned in JSON format.<br><br><b>Default:</b> <code>application/json,text/tab-separated-values</code>
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | The ID of the eBay marketplace where the item is hosted. <b>Note: </b> This value is case sensitive.<br><br>For example: <br>&nbsp;&nbsp;<code>X-EBAY-C-MARKETPLACE-ID = EBAY_US</code>  <br><br> For a list of supported sites see, <a href=\"/api-docs/buy/feed/overview.html#API\">API Restrictions</a>.
    range = 'range_example' # str | <a name=\"range-header\"></a>This header specifies the range in bytes of the chunks of the gzip file being returned. <br><br><b> Format:</b> <code>bytes=<em>startpos</em>-<em>endpos</em></code><br><br>  For example, the following retrieves the first 10 MBs of the feed file. <br><br>&nbsp;&nbsp;<code>Range bytes=0-10485760</code> <br><br>For more information about using this header, see <a href=\"/api-docs/buy/static/api-feed_beta.html#retrv-gzip\">Retrieving a gzip feed file</a>. <br><br><b>Maximum:</b> 100 MB (10MB in the Sandbox)
    category_id = 'category_id_example' # str | An eBay top-level category ID  of the items to be returned in the feed file.<br> <br>The list of eBay category IDs changes over time and category IDs are not the same across all the eBay marketplaces. To get a list of the top-level categories for a marketplace, you can use the Taxonomy API <a href=\"/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategoryTree\">getCategoryTree</a> method. This method retrieves the complete category tree for the marketplace. The top-level categories are identified by the <b>categoryTreeNodeLevel</b> field.<br><br><b>For example:</b><br>&nbsp;&nbsp;<code>\"categoryTreeNodeLevel\": 1</code> <br><br>For details see <a href=\"/api-docs/buy/buy-categories.html\">Get Categories for Buy APIs</a>.</li>  </ul> <br><br>   <b>Restriction:</b> Must be a top-level category other than Real Estate. Items listed under Real Estate L1 categories are excluded from all feeds in all marketplaces.
    snapshot_date = 'snapshot_date_example' # str | The date and hour of the snapshot feed file you want. Each file contains the items that changed within the hour in the specified category. So, the 9AM file contains the items that changed between 9AM and 9:59AM on the day specified.  It takes 2 hours to generate a snapshot file, which means to get the file for 9AM the earliest you could submit the call is at 11AM.<br><br>There are 7 days of <b> Hourly Snapshot</b> feed files available.<p><span class=\"tablenote\"><b>Note: </b> The Feed API uses GMT, so you must convert your local time to GMT. For example, if you lived in California and wanted the September 15th 7pm file, you would submit the following call: <br> <br><code>item_snapshot?category_id=625&snapshot_date=2017-09-16T02:00:00.000Z</code> </span></p>  <b>Format: </b>UTC <code>yyyy-MM-ddThh:00:00.000Z</code> <br><br>Files are generated on the hour, so minutes and seconds are <em> always</em> zeros.

    try:
        api_response = api_instance.get_item_snapshot_feed(accept, x_ebay_c_marketplace_id, range, category_id, snapshot_date)
        print("The response of ItemSnapshotApi->get_item_snapshot_feed:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ItemSnapshotApi->get_item_snapshot_feed: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | **str**| The formats that the client accepts for the response.&lt;br&gt;&lt;br&gt;A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate error codes that are returned in JSON format.&lt;br&gt;&lt;br&gt;&lt;b&gt;Default:&lt;/b&gt; &lt;code&gt;application/json,text/tab-separated-values&lt;/code&gt; | 
 **x_ebay_c_marketplace_id** | **str**| The ID of the eBay marketplace where the item is hosted. &lt;b&gt;Note: &lt;/b&gt; This value is case sensitive.&lt;br&gt;&lt;br&gt;For example: &lt;br&gt;&amp;nbsp;&amp;nbsp;&lt;code&gt;X-EBAY-C-MARKETPLACE-ID &#x3D; EBAY_US&lt;/code&gt;  &lt;br&gt;&lt;br&gt; For a list of supported sites see, &lt;a href&#x3D;\&quot;/api-docs/buy/feed/overview.html#API\&quot;&gt;API Restrictions&lt;/a&gt;. | 
 **range** | **str**| &lt;a name&#x3D;\&quot;range-header\&quot;&gt;&lt;/a&gt;This header specifies the range in bytes of the chunks of the gzip file being returned. &lt;br&gt;&lt;br&gt;&lt;b&gt; Format:&lt;/b&gt; &lt;code&gt;bytes&#x3D;&lt;em&gt;startpos&lt;/em&gt;-&lt;em&gt;endpos&lt;/em&gt;&lt;/code&gt;&lt;br&gt;&lt;br&gt;  For example, the following retrieves the first 10 MBs of the feed file. &lt;br&gt;&lt;br&gt;&amp;nbsp;&amp;nbsp;&lt;code&gt;Range bytes&#x3D;0-10485760&lt;/code&gt; &lt;br&gt;&lt;br&gt;For more information about using this header, see &lt;a href&#x3D;\&quot;/api-docs/buy/static/api-feed_beta.html#retrv-gzip\&quot;&gt;Retrieving a gzip feed file&lt;/a&gt;. &lt;br&gt;&lt;br&gt;&lt;b&gt;Maximum:&lt;/b&gt; 100 MB (10MB in the Sandbox) | 
 **category_id** | **str**| An eBay top-level category ID  of the items to be returned in the feed file.&lt;br&gt; &lt;br&gt;The list of eBay category IDs changes over time and category IDs are not the same across all the eBay marketplaces. To get a list of the top-level categories for a marketplace, you can use the Taxonomy API &lt;a href&#x3D;\&quot;/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategoryTree\&quot;&gt;getCategoryTree&lt;/a&gt; method. This method retrieves the complete category tree for the marketplace. The top-level categories are identified by the &lt;b&gt;categoryTreeNodeLevel&lt;/b&gt; field.&lt;br&gt;&lt;br&gt;&lt;b&gt;For example:&lt;/b&gt;&lt;br&gt;&amp;nbsp;&amp;nbsp;&lt;code&gt;\&quot;categoryTreeNodeLevel\&quot;: 1&lt;/code&gt; &lt;br&gt;&lt;br&gt;For details see &lt;a href&#x3D;\&quot;/api-docs/buy/buy-categories.html\&quot;&gt;Get Categories for Buy APIs&lt;/a&gt;.&lt;/li&gt;  &lt;/ul&gt; &lt;br&gt;&lt;br&gt;   &lt;b&gt;Restriction:&lt;/b&gt; Must be a top-level category other than Real Estate. Items listed under Real Estate L1 categories are excluded from all feeds in all marketplaces. | 
 **snapshot_date** | **str**| The date and hour of the snapshot feed file you want. Each file contains the items that changed within the hour in the specified category. So, the 9AM file contains the items that changed between 9AM and 9:59AM on the day specified.  It takes 2 hours to generate a snapshot file, which means to get the file for 9AM the earliest you could submit the call is at 11AM.&lt;br&gt;&lt;br&gt;There are 7 days of &lt;b&gt; Hourly Snapshot&lt;/b&gt; feed files available.&lt;p&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note: &lt;/b&gt; The Feed API uses GMT, so you must convert your local time to GMT. For example, if you lived in California and wanted the September 15th 7pm file, you would submit the following call: &lt;br&gt; &lt;br&gt;&lt;code&gt;item_snapshot?category_id&#x3D;625&amp;snapshot_date&#x3D;2017-09-16T02:00:00.000Z&lt;/code&gt; &lt;/span&gt;&lt;/p&gt;  &lt;b&gt;Format: &lt;/b&gt;UTC &lt;code&gt;yyyy-MM-ddThh:00:00.000Z&lt;/code&gt; &lt;br&gt;&lt;br&gt;Files are generated on the hour, so minutes and seconds are &lt;em&gt; always&lt;/em&gt; zeros. | 

### Return type

[**ItemSnapshotResponse**](ItemSnapshotResponse.md)

### Authorization

[Client_Credentials](../README.md#Client_Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/tab-separated-values

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Partial Content |  * Content-range - &lt;a name&#x3D;\&quot;content-range\&quot;&gt;&lt;/a&gt;The &lt;b&gt;content-range&lt;/b&gt; response header indicates where in the full resource this partial chunk of data belongs. It returns the lower and upper values in bytes (specified by the &lt;b&gt; Range&lt;/b&gt; header) of the chunk and the total size of the file being downloaded in bytes. &lt;br&gt;&lt;br&gt;&lt;b&gt; Maximum range&lt;/b&gt;: 100 MB&lt;br&gt;&lt;br&gt;The following is an example of a &lt;b&gt;content-range&lt;/b&gt; response, where 0-10 is the lower and upper limit in bytes and 1000 is the total size of the file in bytes. &lt;br&gt;&lt;br&gt; &amp;nbsp;&amp;nbsp;&lt;code&gt;0-10/1000&lt;/code&gt;  &lt;br&gt;&lt;br&gt;The following example of a &lt;b&gt;content-range&lt;/b&gt; response indicates the value of the &lt;b&gt; Range&lt;/b&gt; header is invalid and a 416 status code is returned.&lt;br&gt;&lt;br&gt;&amp;nbsp;&amp;nbsp; &lt;code&gt;*/1000&lt;/code&gt; &lt;br&gt;&lt;br&gt;For more information and examples, see &lt;a href&#x3D;\&quot;/api-docs/buy/static/api-feed_beta.html#retrv-gzip\&quot;&gt;Retrieving a gzip feed file&lt;/a&gt;. <br>  * Last-Modified - Returns the generated date of the feed file, which will be the latest file available. For example:&lt;br&gt; &lt;b&gt;Last-Modified&lt;/b&gt;&amp;nbsp;&amp;nbsp;&lt;code&gt;Wed, 21 Oct 2015 07:28:00 GMT&lt;/code&gt; <br>  |
**204** | No Content &lt;br&gt;This code is returned when there are no items that meet the criteria for this feed file. See &lt;a href&#x3D;\&quot;/api-docs/buy/static/api-feed.html#feed-filters\&quot;&gt;Feed File Filters&lt;/a&gt; for details. |  -  |
**206** | Partial Content |  * Content-range - &lt;a name&#x3D;\&quot;content-range\&quot;&gt;&lt;/a&gt;The &lt;b&gt;content-range&lt;/b&gt; response header indicates where in the full resource this partial chunk of data belongs. It returns the lower and upper values in bytes (specified by the &lt;b&gt; Range&lt;/b&gt; header) of the chunk and the total size of the file being downloaded in bytes. &lt;br&gt;&lt;br&gt;&lt;b&gt; Maximum range&lt;/b&gt;: 100 MB&lt;br&gt;&lt;br&gt;The following is an example of a &lt;b&gt;content-range&lt;/b&gt; response, where 0-10 is the lower and upper limit in bytes and 1000 is the total size of the file in bytes. &lt;br&gt;&lt;br&gt; &amp;nbsp;&amp;nbsp;&lt;code&gt;0-10/1000&lt;/code&gt;  &lt;br&gt;&lt;br&gt;The following example of a &lt;b&gt;content-range&lt;/b&gt; response indicates the value of the &lt;b&gt; Range&lt;/b&gt; header is invalid and a 416 status code is returned.&lt;br&gt;&lt;br&gt;&amp;nbsp;&amp;nbsp; &lt;code&gt;*/1000&lt;/code&gt; &lt;br&gt;&lt;br&gt;For more information and examples, see &lt;a href&#x3D;\&quot;/api-docs/buy/static/api-feed_beta.html#retrv-gzip\&quot;&gt;Retrieving a gzip feed file&lt;/a&gt;. <br>  * Last-Modified - Returns the generated date of the feed file, which will be the latest file available. For example:&lt;br&gt; &lt;b&gt;Last-Modified&lt;/b&gt;&amp;nbsp;&amp;nbsp;&lt;code&gt;Wed, 21 Oct 2015 07:28:00 GMT&lt;/code&gt; <br>  |
**400** | Bad request |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**416** | Range not satisfiable |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

