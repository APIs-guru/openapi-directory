# OrderShipmentTrackingAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_id** | **str** | Defines tracking carrier id | [optional] 
**order_id** | **str** | Defines the order id | [optional] 
**send_notifications** | **bool** | Send notifications to customer after tracking was created | [optional] [default to False]
**shipment_id** | **str** | Shipment id indicates the number of delivery | 
**store_id** | **str** | Store Id | [optional] 
**tracking_link** | **str** | Defines custom tracking link | [optional] 
**tracking_number** | **str** | Defines tracking number | 
**tracking_provider** | **str** | Defines name of the company which provides shipment tracking | [optional] 

## Example

```python
from openapi_client.models.order_shipment_tracking_add import OrderShipmentTrackingAdd

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShipmentTrackingAdd from a JSON string
order_shipment_tracking_add_instance = OrderShipmentTrackingAdd.from_json(json)
# print the JSON string representation of the object
print(OrderShipmentTrackingAdd.to_json())

# convert the object into a dict
order_shipment_tracking_add_dict = order_shipment_tracking_add_instance.to_dict()
# create an instance of OrderShipmentTrackingAdd from a dict
order_shipment_tracking_add_from_dict = OrderShipmentTrackingAdd.from_dict(order_shipment_tracking_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


