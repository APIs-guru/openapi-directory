# LinkedOrderLineItem

This type contains data on a line item that is related to, but not a part of the order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_aspects** | [**List[NameValuePair]**](NameValuePair.md) | This array contains the complete set of items aspects for the linked line item. For example:&lt;br&gt;&lt;pre&gt;\&quot;lineItemAspects\&quot;: [&lt;br&gt;    {&lt;br&gt;        \&quot;name\&quot;: \&quot;Tire Type\&quot;,&lt;br&gt;        \&quot;value\&quot;: \&quot;All Season\&quot;&lt;br&gt;    },&lt;br&gt;&lt;br&gt;    ...&lt;br&gt; &lt;br&gt;    {&lt;br&gt;        \&quot;name\&quot;: \&quot;Car Type\&quot;,&lt;br&gt;        \&quot;value\&quot;: \&quot;Performance\&quot;&lt;br&gt;    }&lt;br&gt;]&lt;/pre&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; All item specifics for the listing are returned. The name/value pairs returned are in the language of the linked line item&#39;s listing site, which may vary from the seller&#39;s language.&lt;/span&gt; | [optional] 
**line_item_id** | **str** | The unique identifier of the linked order line item. | [optional] 
**max_estimated_delivery_date** | **str** | The end of the date range in which the linked line item is expected to be delivered to the shipping address. | [optional] 
**min_estimated_delivery_date** | **str** | The beginning of the date range in which the linked line item is expected to be delivered to the shipping address. | [optional] 
**order_id** | **str** | The unique identifier of the order to which the linked line item belongs. | [optional] 
**seller_id** | **str** | The eBay user ID of the seller who sold the linked line item. For example, the user ID of the tire seller. | [optional] 
**shipments** | [**List[TrackingInfo]**](TrackingInfo.md) | An array containing any shipment tracking information available for the linked line item. | [optional] 
**title** | **str** | The listing title of the linked line item. | [optional] 

## Example

```python
from openapi_client.models.linked_order_line_item import LinkedOrderLineItem

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedOrderLineItem from a JSON string
linked_order_line_item_instance = LinkedOrderLineItem.from_json(json)
# print the JSON string representation of the object
print(LinkedOrderLineItem.to_json())

# convert the object into a dict
linked_order_line_item_dict = linked_order_line_item_instance.to_dict()
# create an instance of LinkedOrderLineItem from a dict
linked_order_line_item_from_dict = LinkedOrderLineItem.from_dict(linked_order_line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


