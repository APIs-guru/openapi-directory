# OrderTrackingSignalShipmentLineItemMapping

Represents how many items are in the shipment for the given shipment_id and line_item_id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_id** | **str** | Required. The line item ID. | [optional] 
**quantity** | **str** | The line item quantity in the shipment. | [optional] 
**shipment_id** | **str** | Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response. | [optional] 

## Example

```python
from openapi_client.models.order_tracking_signal_shipment_line_item_mapping import OrderTrackingSignalShipmentLineItemMapping

# TODO update the JSON string below
json = "{}"
# create an instance of OrderTrackingSignalShipmentLineItemMapping from a JSON string
order_tracking_signal_shipment_line_item_mapping_instance = OrderTrackingSignalShipmentLineItemMapping.from_json(json)
# print the JSON string representation of the object
print(OrderTrackingSignalShipmentLineItemMapping.to_json())

# convert the object into a dict
order_tracking_signal_shipment_line_item_mapping_dict = order_tracking_signal_shipment_line_item_mapping_instance.to_dict()
# create an instance of OrderTrackingSignalShipmentLineItemMapping from a dict
order_tracking_signal_shipment_line_item_mapping_from_dict = OrderTrackingSignalShipmentLineItemMapping.from_dict(order_tracking_signal_shipment_line_item_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


