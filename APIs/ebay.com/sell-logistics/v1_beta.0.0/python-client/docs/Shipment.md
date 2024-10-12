# Shipment

This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation** | [**ShipmentCancellation**](ShipmentCancellation.md) |  | [optional] 
**creation_date** | **str** | The date and time the shipment was created, formatted as an &lt;a href&#x3D;\&quot;https://www.iso.org/iso-8601-date-and-time-format.html\&quot; title&#x3D;\&quot;https://www.iso.org\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 8601&lt;/a&gt; string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2018-08-20T07:09:00.000Z&lt;/code&gt; | [optional] 
**label_custom_message** | **str** | If supported by the selected shipping carrier, this field can contain optional seller text to be printed on the shipping label. | [optional] 
**label_download_url** | **str** | The direct URL the seller can use to download an image of the shipping label. By default, the file format is PDF. See &lt;a href&#x3D;\&quot;/api-docs/sell/logistics/resources/shipment/methods/downloadLabelFile\&quot;&gt;downloadLabelFile&lt;/a&gt; for requesting different response file formats. | [optional] 
**label_size** | **str** | The seller&#39;s desired label size. The support for multi-sized labels is shipping-carrier specific and if the size requested in the &lt;b&gt;creaateFromShippingQuote&lt;/b&gt; call matches a size the carrier supports, the value will be represented here in the shipment. &lt;br&gt;&lt;br&gt;Currently, the only valid value is: &lt;code&gt;4\&quot;x6\&quot;&lt;/code&gt; | [optional] 
**orders** | [**List[Order]**](Order.md) | This list value is optionally assigned by the seller. When present, each element in the returned list contains seller-assigned information about an order (such as an order number). Because a package can contain all or part of one or more orders, this field provides a way for sellers to identify the packages that contain specific orders. | [optional] 
**package_specification** | [**PackageSpecification**](PackageSpecification.md) |  | [optional] 
**rate** | [**PurchasedRate**](PurchasedRate.md) |  | [optional] 
**return_to** | [**Contact**](Contact.md) |  | [optional] 
**ship_from** | [**Contact**](Contact.md) |  | [optional] 
**ship_to** | [**Contact**](Contact.md) |  | [optional] 
**shipment_id** | **str** | The unique eBay-assigned ID for the shipment. The ID is generated when the shipment is created by a call to &lt;b&gt;createFromShippingQuote&lt;/b&gt;. | [optional] 
**shipment_tracking_number** | **str** | A unique carrier-assigned ID string that can be used to track the shipment. | [optional] 

## Example

```python
from openapi_client.models.shipment import Shipment

# TODO update the JSON string below
json = "{}"
# create an instance of Shipment from a JSON string
shipment_instance = Shipment.from_json(json)
# print the JSON string representation of the object
print(Shipment.to_json())

# convert the object into a dict
shipment_dict = shipment_instance.to_dict()
# create an instance of Shipment from a dict
shipment_from_dict = Shipment.from_dict(shipment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


