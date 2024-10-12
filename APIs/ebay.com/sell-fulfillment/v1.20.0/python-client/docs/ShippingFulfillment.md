# ShippingFulfillment

This type contains the complete details of an existing fulfillment for an order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillment_id** | **str** | The unique identifier of the fulfillment; for example, &lt;code&gt;9405509699937003457459&lt;/code&gt;. This eBay-generated value is created with a successful &lt;b&gt;createShippingFulfillment&lt;/b&gt; call. | [optional] 
**line_items** | [**List[LineItemReference]**](LineItemReference.md) | This array contains a list of one or more line items (and purchased quantity) to which the fulfillment applies. | [optional] 
**shipment_tracking_number** | **str** | The tracking number provided by the shipping carrier for the package shipped in this fulfillment. This field is returned if available. | [optional] 
**shipped_date** | **str** | The date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field should only be returned if the package has been shipped.&lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2015-08-04T19:09:02.768Z&lt;/code&gt; | [optional] 
**shipping_carrier_code** | **str** | The eBay code identifying the shipping carrier for this fulfillment. This field is returned if available. &lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; The Trading API&#39;s &lt;b&gt;ShippingCarrierCodeType&lt;/b&gt; enumeration type contains the most current list of eBay shipping carrier codes and the countries served by each carrier. See &lt;a href&#x3D;\&quot;https://developer.ebay.com/Devzone/XML/docs/Reference/eBay/types/ShippingCarrierCodeType.html \&quot; target&#x3D;\&quot;_blank\&quot;&gt;ShippingCarrierCodeType&lt;/a&gt;.&lt;/span&gt; | [optional] 

## Example

```python
from openapi_client.models.shipping_fulfillment import ShippingFulfillment

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingFulfillment from a JSON string
shipping_fulfillment_instance = ShippingFulfillment.from_json(json)
# print the JSON string representation of the object
print(ShippingFulfillment.to_json())

# convert the object into a dict
shipping_fulfillment_dict = shipping_fulfillment_instance.to_dict()
# create an instance of ShippingFulfillment from a dict
shipping_fulfillment_from_dict = ShippingFulfillment.from_dict(shipping_fulfillment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


