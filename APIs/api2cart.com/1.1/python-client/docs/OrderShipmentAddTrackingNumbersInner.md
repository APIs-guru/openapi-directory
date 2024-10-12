# OrderShipmentAddTrackingNumbersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_id** | **str** |  | [optional] 
**tracking_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_shipment_add_tracking_numbers_inner import OrderShipmentAddTrackingNumbersInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShipmentAddTrackingNumbersInner from a JSON string
order_shipment_add_tracking_numbers_inner_instance = OrderShipmentAddTrackingNumbersInner.from_json(json)
# print the JSON string representation of the object
print(OrderShipmentAddTrackingNumbersInner.to_json())

# convert the object into a dict
order_shipment_add_tracking_numbers_inner_dict = order_shipment_add_tracking_numbers_inner_instance.to_dict()
# create an instance of OrderShipmentAddTrackingNumbersInner from a dict
order_shipment_add_tracking_numbers_inner_from_dict = OrderShipmentAddTrackingNumbersInner.from_dict(order_shipment_add_tracking_numbers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


