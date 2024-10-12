# OrderTrackingSignal

Represents a merchant trade from which signals are extracted, e.g. shipping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_shipping_fee** | [**PriceAmount**](PriceAmount.md) |  | [optional] 
**delivery_postal_code** | **str** | Required. The delivery postal code, as a continuous string without spaces or dashes, e.g. \&quot;95016\&quot;. This field will be anonymized in returned OrderTrackingSignal creation response. | [optional] 
**delivery_region_code** | **str** | Required. The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping destination. | [optional] 
**line_items** | [**List[OrderTrackingSignalLineItemDetails]**](OrderTrackingSignalLineItemDetails.md) | Information about line items in the order. | [optional] 
**merchant_id** | **str** | The Google merchant ID of this order tracking signal. This value is optional. If left unset, the caller&#39;s merchant ID is used. You must request access in order to provide data on behalf of another merchant. For more information, see [Submitting Order Tracking Signals](/shopping-content/guides/order-tracking-signals). | [optional] 
**order_created_time** | **datetime** |  | [optional] 
**order_id** | **str** | Required. The ID of the order on the merchant side. This field will be hashed in returned OrderTrackingSignal creation response. | [optional] 
**order_tracking_signal_id** | **str** | Output only. The ID that uniquely identifies this order tracking signal. | [optional] [readonly] 
**shipment_line_item_mapping** | [**List[OrderTrackingSignalShipmentLineItemMapping]**](OrderTrackingSignalShipmentLineItemMapping.md) | The mapping of the line items to the shipment information. | [optional] 
**shipping_info** | [**List[OrderTrackingSignalShippingInfo]**](OrderTrackingSignalShippingInfo.md) | The shipping information for the order. | [optional] 

## Example

```python
from openapi_client.models.order_tracking_signal import OrderTrackingSignal

# TODO update the JSON string below
json = "{}"
# create an instance of OrderTrackingSignal from a JSON string
order_tracking_signal_instance = OrderTrackingSignal.from_json(json)
# print the JSON string representation of the object
print(OrderTrackingSignal.to_json())

# convert the object into a dict
order_tracking_signal_dict = order_tracking_signal_instance.to_dict()
# create an instance of OrderTrackingSignal from a dict
order_tracking_signal_from_dict = OrderTrackingSignal.from_dict(order_tracking_signal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


