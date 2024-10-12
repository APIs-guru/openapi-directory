# OrdersCustomBatchRequestEntryUpdateShipment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | **str** | The carrier handling the shipment. Not updated if missing. See &#x60;shipments[].carrier&#x60; in the Orders resource representation for a list of acceptable values. | [optional] 
**delivery_date** | **str** | Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if &#x60;status&#x60; is &#x60;delivered&#x60;. | [optional] 
**shipment_id** | **str** | The ID of the shipment. | [optional] 
**status** | **str** | New status for the shipment. Not updated if missing. Acceptable values are: - \&quot;&#x60;delivered&#x60;\&quot; - \&quot;&#x60;undeliverable&#x60;\&quot; - \&quot;&#x60;readyForPickup&#x60;\&quot;  | [optional] 
**tracking_id** | **str** | The tracking ID for the shipment. Not updated if missing. | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_request_entry_update_shipment import OrdersCustomBatchRequestEntryUpdateShipment

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchRequestEntryUpdateShipment from a JSON string
orders_custom_batch_request_entry_update_shipment_instance = OrdersCustomBatchRequestEntryUpdateShipment.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchRequestEntryUpdateShipment.to_json())

# convert the object into a dict
orders_custom_batch_request_entry_update_shipment_dict = orders_custom_batch_request_entry_update_shipment_instance.to_dict()
# create an instance of OrdersCustomBatchRequestEntryUpdateShipment from a dict
orders_custom_batch_request_entry_update_shipment_from_dict = OrdersCustomBatchRequestEntryUpdateShipment.from_dict(orders_custom_batch_request_entry_update_shipment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


