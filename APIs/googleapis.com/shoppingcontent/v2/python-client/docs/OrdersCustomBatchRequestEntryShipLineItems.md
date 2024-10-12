# OrdersCustomBatchRequestEntryShipLineItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | **str** | Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See &#x60;shipments[].carrier&#x60; in the Orders resource representation for a list of acceptable values. | [optional] 
**line_items** | [**List[OrderShipmentLineItemShipment]**](OrderShipmentLineItemShipment.md) | Line items to ship. | [optional] 
**shipment_group_id** | **str** | ID of the shipment group. Required for orders that use the orderinvoices service. | [optional] 
**shipment_id** | **str** | Deprecated. Please use shipmentInfo instead. The ID of the shipment. | [optional] 
**shipment_infos** | [**List[OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo]**](OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo.md) | Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs). | [optional] 
**tracking_id** | **str** | Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment. | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_request_entry_ship_line_items import OrdersCustomBatchRequestEntryShipLineItems

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchRequestEntryShipLineItems from a JSON string
orders_custom_batch_request_entry_ship_line_items_instance = OrdersCustomBatchRequestEntryShipLineItems.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchRequestEntryShipLineItems.to_json())

# convert the object into a dict
orders_custom_batch_request_entry_ship_line_items_dict = orders_custom_batch_request_entry_ship_line_items_instance.to_dict()
# create an instance of OrdersCustomBatchRequestEntryShipLineItems from a dict
orders_custom_batch_request_entry_ship_line_items_from_dict = OrdersCustomBatchRequestEntryShipLineItems.from_dict(orders_custom_batch_request_entry_ship_line_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


