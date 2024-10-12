# ShippingFulfillmentDetails

This type contains the details for creating a fulfillment for an order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_items** | [**List[LineItemReference]**](LineItemReference.md) | This array contains a list of or more line items and the quantity that will be shipped in the same package. | [optional] 
**shipped_date** | **str** | This is the actual date and time that the fulfillment package was shipped. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. The seller should use the actual date/time that the package was shipped, but if this field is omitted, it will default to the current date/time.&lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2015-08-04T19:09:02.768Z&lt;/code&gt;&lt;br&gt;&lt;br&gt;&lt;b&gt;Default:&lt;/b&gt; The current date and time. | [optional] 
**shipping_carrier_code** | **str** | The unique identifier of the shipping carrier being used to ship the line item(s). Technically, the &lt;strong&gt;shippingCarrierCode&lt;/strong&gt; and &lt;strong&gt;trackingNumber&lt;/strong&gt; fields are optional, but generally these fields will be provided if the shipping carrier and tracking number are known. &lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; Use the Trading API&#39;s &lt;a href&#x3D;\&quot;https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html \&quot; target&#x3D;\&quot;_blank\&quot;&gt;GeteBayDetails&lt;/a&gt; call to retrieve the latest shipping carrier enumeration values. When making the &lt;a href&#x3D;\&quot;https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html \&quot; target&#x3D;\&quot;_blank\&quot;&gt;GeteBayDetails&lt;/a&gt; call, include the &lt;strong&gt;DetailName&lt;/strong&gt; field in the request payload and set its value to &lt;code&gt;ShippingCarrierDetails&lt;/code&gt;. Each valid shipping carrier enumeration value is returned in a &lt;strong&gt;ShippingCarrierDetails.ShippingCarrier&lt;/strong&gt; field in the response payload.&lt;/span&gt; | [optional] 
**tracking_number** | **str** | The tracking number provided by the shipping carrier for this fulfillment. The seller should be careful that this tracking number is accurate since the buyer will use this tracking number to track shipment, and eBay has no way to verify the accuracy of this number.&lt;br&gt;&lt;br&gt;This field and the &lt;b&gt;shippingCarrierCode&lt;/b&gt; field are mutually dependent. If you include one, you must also include the other.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; If you include &lt;b&gt;trackingNumber&lt;/b&gt; (and &lt;b&gt;shippingCarrierCode&lt;/b&gt;) in the request, the resulting fulfillment&#39;s ID (returned in the HTTP location code) is the tracking number. If you do not include shipment tracking information, the resulting fulfillment ID will default to an arbitrary number such as &lt;code&gt;999&lt;/code&gt;.&lt;/span&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; Only alphanumeric characters are supported for shipment tracking numbers. Spaces, hyphens, and all other special characters are not supported. Do not include a space in the tracking number even if a space appears in the tracking number on the shipping label.&lt;/span&gt; | [optional] 

## Example

```python
from openapi_client.models.shipping_fulfillment_details import ShippingFulfillmentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingFulfillmentDetails from a JSON string
shipping_fulfillment_details_instance = ShippingFulfillmentDetails.from_json(json)
# print the JSON string representation of the object
print(ShippingFulfillmentDetails.to_json())

# convert the object into a dict
shipping_fulfillment_details_dict = shipping_fulfillment_details_instance.to_dict()
# create an instance of ShippingFulfillmentDetails from a dict
shipping_fulfillment_details_from_dict = ShippingFulfillmentDetails.from_dict(shipping_fulfillment_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


