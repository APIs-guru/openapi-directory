# OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | **str** | The carrier handling the shipment. See &#x60;shipments[].carrier&#x60; in the Orders resource representation for a list of acceptable values. | [optional] 
**shipment_id** | **str** | Required. The ID of the shipment. This is assigned by the merchant and is unique to each shipment. | [optional] 
**tracking_id** | **str** | The tracking ID for the shipment. | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_request_entry_ship_line_items_shipment_info import OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo from a JSON string
orders_custom_batch_request_entry_ship_line_items_shipment_info_instance = OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo.to_json())

# convert the object into a dict
orders_custom_batch_request_entry_ship_line_items_shipment_info_dict = orders_custom_batch_request_entry_ship_line_items_shipment_info_instance.to_dict()
# create an instance of OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo from a dict
orders_custom_batch_request_entry_ship_line_items_shipment_info_from_dict = OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo.from_dict(orders_custom_batch_request_entry_ship_line_items_shipment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


