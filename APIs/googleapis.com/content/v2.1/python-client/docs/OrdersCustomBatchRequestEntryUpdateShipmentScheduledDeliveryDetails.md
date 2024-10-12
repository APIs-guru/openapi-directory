# OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails

ScheduledDeliveryDetails used to update the scheduled delivery order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_phone_number** | **str** | The phone number of the carrier fulfilling the delivery. The phone number should be formatted as the international notation in | [optional] 
**scheduled_date** | **str** | The date a shipment is scheduled for delivery, in ISO 8601 format. | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_request_entry_update_shipment_scheduled_delivery_details import OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails from a JSON string
orders_custom_batch_request_entry_update_shipment_scheduled_delivery_details_instance = OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails.to_json())

# convert the object into a dict
orders_custom_batch_request_entry_update_shipment_scheduled_delivery_details_dict = orders_custom_batch_request_entry_update_shipment_scheduled_delivery_details_instance.to_dict()
# create an instance of OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails from a dict
orders_custom_batch_request_entry_update_shipment_scheduled_delivery_details_from_dict = OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails.from_dict(orders_custom_batch_request_entry_update_shipment_scheduled_delivery_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


