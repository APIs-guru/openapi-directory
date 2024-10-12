# OrdersShipLineItemsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | **str** | Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See &#x60;shipments[].carrier&#x60; in the Orders resource representation for a list of acceptable values. | [optional] 
**line_items** | [**List[OrderShipmentLineItemShipment]**](OrderShipmentLineItemShipment.md) | Line items to ship. | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 
**shipment_group_id** | **str** | ID of the shipment group. Required for orders that use the orderinvoices service. | [optional] 
**shipment_id** | **str** | Deprecated. Please use shipmentInfo instead. The ID of the shipment. | [optional] 
**shipment_infos** | [**List[OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo]**](OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo.md) | Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs). | [optional] 
**tracking_id** | **str** | Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment. | [optional] 

## Example

```python
from openapi_client.models.orders_ship_line_items_request import OrdersShipLineItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersShipLineItemsRequest from a JSON string
orders_ship_line_items_request_instance = OrdersShipLineItemsRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersShipLineItemsRequest.to_json())

# convert the object into a dict
orders_ship_line_items_request_dict = orders_ship_line_items_request_instance.to_dict()
# create an instance of OrdersShipLineItemsRequest from a dict
orders_ship_line_items_request_from_dict = OrdersShipLineItemsRequest.from_dict(orders_ship_line_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


