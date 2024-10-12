# OrderSearchPagedCollection

This type contains the specifications for the collection of orders that match the search or filter criteria of a <b>getOrders</b> call. The collection is grouped into a result set, and based on the query parameters that are set (including the <strong>limit</strong> and <strong>offset</strong> parameters), the result set may included multiple pages, but only one page of the result set can be viewed at a time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The URI of the &lt;b&gt;getOrders&lt;/b&gt; call request that produced the current page of the result set. | [optional] 
**limit** | **int** | The maximum number of orders returned per page of the result set. The &lt;strong&gt;limit&lt;/strong&gt; value can be passed in as a query parameter, or if omitted, its value defaults to &lt;code&gt;50&lt;/code&gt;. &lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; If this is the last or only page of the result set, the page may contain fewer orders than the &lt;strong&gt;limit&lt;/strong&gt; value.  To determine the number of pages in a result set, divide the &lt;b&gt;total&lt;/b&gt; value (total number of orders matching input criteria) by this &lt;strong&gt;limit&lt;/strong&gt; value, and then round up to the next integer. For example, if the &lt;b&gt;total&lt;/b&gt; value was &lt;code&gt;120&lt;/code&gt; (120 total orders) and the &lt;strong&gt;limit&lt;/strong&gt; value was &lt;code&gt;50&lt;/code&gt; (show 50 orders per page), the total number of pages in the result set is three, so the seller would have to make three separate &lt;strong&gt;getOrders&lt;/strong&gt; calls to view all orders matching the input criteria. &lt;/span&gt;&lt;b&gt;Default:&lt;/b&gt; &lt;code&gt;50&lt;/code&gt; | [optional] 
**next** | **str** | The &lt;b&gt;getOrders&lt;/b&gt; call URI to use if you wish to view the  next page of the result set. For example, the following URI returns records 41 thru 50 from the collection of orders: &lt;br&gt;&lt;br&gt;&lt;code&gt;&lt;i&gt;path&lt;/i&gt;/order?limit&#x3D;10&amp;offset&#x3D;40 &lt;/code&gt;&lt;br&gt;&lt;br&gt;This field is only returned if there is a next page of results to view based on the current input criteria.&lt;br&gt; | [optional] 
**offset** | **int** | The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the &lt;b&gt;offset&lt;/b&gt; query parameter. &lt;p class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note: &lt;/strong&gt;The items in a paginated result set use a zero-based list where the first item in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/p&gt; | [optional] 
**orders** | [**List[Order]**](Order.md) | This array contains one or more orders that are part of the current result set, that is controlled by the input criteria. The details of each order include information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status. &lt;br&gt;&lt;br&gt;By default, orders are returned according to creation date (oldest to newest), but the order will vary according to any filter that is set in request. | [optional] 
**prev** | **str** | The &lt;b&gt;getOrders&lt;/b&gt; call URI for the previous result set. For example, the following URI returns orders 21 thru 30 from the collection of orders: &lt;br&gt;&lt;br&gt;&lt;code&gt;&lt;i&gt;path&lt;/i&gt;/order?limit&#x3D;10&amp;offset&#x3D;20&lt;/code&gt;&lt;br&gt;&lt;br&gt;This field is only returned if there is a previous page of results to view based on the current input criteria. | [optional] 
**total** | **int** | The total number of orders in the results set based on the current input criteria.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; If no orders are found, this field is returned with a value of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt; | [optional] 
**warnings** | [**List[Error]**](Error.md) | This array is returned if one or more errors or warnings occur with the call request. | [optional] 

## Example

```python
from openapi_client.models.order_search_paged_collection import OrderSearchPagedCollection

# TODO update the JSON string below
json = "{}"
# create an instance of OrderSearchPagedCollection from a JSON string
order_search_paged_collection_instance = OrderSearchPagedCollection.from_json(json)
# print the JSON string representation of the object
print(OrderSearchPagedCollection.to_json())

# convert the object into a dict
order_search_paged_collection_dict = order_search_paged_collection_instance.to_dict()
# create an instance of OrderSearchPagedCollection from a dict
order_search_paged_collection_from_dict = OrderSearchPagedCollection.from_dict(order_search_paged_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


