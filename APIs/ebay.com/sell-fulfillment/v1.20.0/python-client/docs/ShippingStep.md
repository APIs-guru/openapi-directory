# ShippingStep

This type contains shipping information for a fulfillment, including the shipping carrier, the shipping service option, the shipment destination, and the Global Shipping Program reference ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ship_to** | [**ExtendedContact**](ExtendedContact.md) |  | [optional] 
**ship_to_reference_id** | **str** | This is the unique identifer of the Global Shipping Program (GSP) shipment. This field is only returned if the line item is being shipped via GSP (the value of the &lt;b&gt;fulfillmentStartInstructions.ebaySupportedFulfillment&lt;/b&gt; field will be &lt;code&gt;true&lt;/code&gt;. The international shipping provider uses the &lt;b&gt;shipToReferenceId&lt;/b&gt; value as the primary reference number to retrieve the relevant details about the buyer, the order, and the fulfillment, so the shipment can be completed. &lt;br&gt;&lt;br&gt;Sellers must include this value on the shipping label immediately above the street address of the international shipping provider. &lt;br&gt;&lt;br&gt;Example: \&quot;Reference #1234567890123456\&quot; &lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; This value is the same as the &lt;b&gt;ShipToAddress.ReferenceID&lt;/b&gt; value returned by the Trading API&#39;s GetOrders call.&lt;/span&gt; | [optional] 
**shipping_carrier_code** | **str** | The unique identifier of the shipping carrier being used to ship the line item. &lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; The Trading API&#39;s &lt;a href&#x3D;\&quot;https://developer.ebay.com/devzone/XML/docs/Reference/eBay/GeteBayDetails.html \&quot; target&#x3D;\&quot;_blank\&quot;&gt;GeteBayDetails&lt;/a&gt; call can be used to retrieve the latest shipping carrier and shipping service option enumeration values.&lt;/span&gt; | [optional] 
**shipping_service_code** | **str** | The unique identifier of the shipping service option being used to ship the line item.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; Use the Trading API&#39;s &lt;a href&#x3D;\&quot;/devzone/XML/docs/Reference/eBay/GeteBayDetails.html \&quot; target&#x3D;\&quot;_blank\&quot;&gt;GeteBayDetails&lt;/a&gt; call to retrieve the latest shipping carrier and shipping service option enumeration values. When making the &lt;a href&#x3D;\&quot;/devzone/XML/docs/Reference/eBay/GeteBayDetails.html \&quot; target&#x3D;\&quot;_blank\&quot;&gt;GeteBayDetails&lt;/a&gt; call, include the &lt;strong&gt;DetailName&lt;/strong&gt; field in the request payload and set its value to &lt;code&gt;ShippingServiceDetails&lt;/code&gt;. Each valid shipping service option (returned in &lt;strong&gt;ShippingServiceDetails.ShippingService&lt;/strong&gt; field) and corresponding shipping carrier (returned in &lt;strong&gt;ShippingServiceDetails.ShippingCarrier&lt;/strong&gt; field) is returned in response payload.&lt;/span&gt; | [optional] 

## Example

```python
from openapi_client.models.shipping_step import ShippingStep

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingStep from a JSON string
shipping_step_instance = ShippingStep.from_json(json)
# print the JSON string representation of the object
print(ShippingStep.to_json())

# convert the object into a dict
shipping_step_dict = shipping_step_instance.to_dict()
# create an instance of ShippingStep from a dict
shipping_step_from_dict = ShippingStep.from_dict(shipping_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


