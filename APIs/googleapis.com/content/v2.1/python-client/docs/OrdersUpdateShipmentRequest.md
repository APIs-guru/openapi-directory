# OrdersUpdateShipmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | **str** | The carrier handling the shipment. Not updated if missing. See &#x60;shipments[].carrier&#x60; in the Orders resource representation for a list of acceptable values. | [optional] 
**delivery_date** | **str** | Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if &#x60;status&#x60; is &#x60;delivered&#x60;. | [optional] 
**last_pickup_date** | **str** | Date after which the pickup will expire, in ISO 8601 format. Required only when order is buy-online-pickup-in-store(BOPIS) and &#x60;status&#x60; is &#x60;ready for pickup&#x60;. | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 
**ready_pickup_date** | **str** | Date on which the shipment has been ready for pickup, in ISO 8601 format. Optional and can be provided only if &#x60;status&#x60; is &#x60;ready for pickup&#x60;. | [optional] 
**scheduled_delivery_details** | [**OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails**](OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails.md) |  | [optional] 
**shipment_id** | **str** | The ID of the shipment. | [optional] 
**status** | **str** | New status for the shipment. Not updated if missing. Acceptable values are: - \&quot;&#x60;delivered&#x60;\&quot; - \&quot;&#x60;undeliverable&#x60;\&quot; - \&quot;&#x60;readyForPickup&#x60;\&quot;  | [optional] 
**tracking_id** | **str** | The tracking ID for the shipment. Not updated if missing. | [optional] 
**undelivered_date** | **str** | Date on which the shipment has been undeliverable, in ISO 8601 format. Optional and can be provided only if &#x60;status&#x60; is &#x60;undeliverable&#x60;. | [optional] 

## Example

```python
from openapi_client.models.orders_update_shipment_request import OrdersUpdateShipmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersUpdateShipmentRequest from a JSON string
orders_update_shipment_request_instance = OrdersUpdateShipmentRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersUpdateShipmentRequest.to_json())

# convert the object into a dict
orders_update_shipment_request_dict = orders_update_shipment_request_instance.to_dict()
# create an instance of OrdersUpdateShipmentRequest from a dict
orders_update_shipment_request_from_dict = OrdersUpdateShipmentRequest.from_dict(orders_update_shipment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


