# GetWFSInventory200ResponsePayloadInventoryInnerShipNodesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avail_to_sell_qty** | **int** | The available quantity is the quantity of an item that is available to be allocated to orders. | [optional] 
**modified_date** | **str** | Last changes date for the item. | [optional] 
**on_hand_qty** | **int** | The on-hand balance is the quantity of active inventory stored at the warehouse.Active inventory is defined as the usable amount of an item that is in the warehouse.Inventory is active if it is not damaged, expired or being inspected. | [optional] 
**ship_node_type** | **str** | Identifies fulfillment aspect of invetory. Walmart, seller or 3PL fulfilled. Possible value is &#39;WFSFulfilled&#39;. In later phase we will also add seller fulfilled inventory. | [optional] 

## Example

```python
from openapi_client.models.get_wfs_inventory200_response_payload_inventory_inner_ship_nodes_inner import GetWFSInventory200ResponsePayloadInventoryInnerShipNodesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetWFSInventory200ResponsePayloadInventoryInnerShipNodesInner from a JSON string
get_wfs_inventory200_response_payload_inventory_inner_ship_nodes_inner_instance = GetWFSInventory200ResponsePayloadInventoryInnerShipNodesInner.from_json(json)
# print the JSON string representation of the object
print(GetWFSInventory200ResponsePayloadInventoryInnerShipNodesInner.to_json())

# convert the object into a dict
get_wfs_inventory200_response_payload_inventory_inner_ship_nodes_inner_dict = get_wfs_inventory200_response_payload_inventory_inner_ship_nodes_inner_instance.to_dict()
# create an instance of GetWFSInventory200ResponsePayloadInventoryInnerShipNodesInner from a dict
get_wfs_inventory200_response_payload_inventory_inner_ship_nodes_inner_from_dict = GetWFSInventory200ResponsePayloadInventoryInnerShipNodesInner.from_dict(get_wfs_inventory200_response_payload_inventory_inner_ship_nodes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


