# OrderShipmentScheduledDeliveryDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_phone_number** | **str** | The phone number of the carrier fulfilling the delivery. The phone number is formatted as the international notation in ITU-T Recommendation E.123 (for example, \&quot;+41 44 668 1800\&quot;). | [optional] 
**scheduled_date** | **str** | The date a shipment is scheduled for delivery, in ISO 8601 format. | [optional] 

## Example

```python
from openapi_client.models.order_shipment_scheduled_delivery_details import OrderShipmentScheduledDeliveryDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShipmentScheduledDeliveryDetails from a JSON string
order_shipment_scheduled_delivery_details_instance = OrderShipmentScheduledDeliveryDetails.from_json(json)
# print the JSON string representation of the object
print(OrderShipmentScheduledDeliveryDetails.to_json())

# convert the object into a dict
order_shipment_scheduled_delivery_details_dict = order_shipment_scheduled_delivery_details_instance.to_dict()
# create an instance of OrderShipmentScheduledDeliveryDetails from a dict
order_shipment_scheduled_delivery_details_from_dict = OrderShipmentScheduledDeliveryDetails.from_dict(order_shipment_scheduled_delivery_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


