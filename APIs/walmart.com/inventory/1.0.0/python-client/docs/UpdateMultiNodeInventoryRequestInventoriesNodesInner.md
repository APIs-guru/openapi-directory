# UpdateMultiNodeInventoryRequestInventoriesNodesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_qty** | [**GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerReservedQty**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerReservedQty.md) |  | 
**ship_node** | **str** | ShipNode Id of the ship node for which the inventory is requested | 

## Example

```python
from openapi_client.models.update_multi_node_inventory_request_inventories_nodes_inner import UpdateMultiNodeInventoryRequestInventoriesNodesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMultiNodeInventoryRequestInventoriesNodesInner from a JSON string
update_multi_node_inventory_request_inventories_nodes_inner_instance = UpdateMultiNodeInventoryRequestInventoriesNodesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateMultiNodeInventoryRequestInventoriesNodesInner.to_json())

# convert the object into a dict
update_multi_node_inventory_request_inventories_nodes_inner_dict = update_multi_node_inventory_request_inventories_nodes_inner_instance.to_dict()
# create an instance of UpdateMultiNodeInventoryRequestInventoriesNodesInner from a dict
update_multi_node_inventory_request_inventories_nodes_inner_from_dict = UpdateMultiNodeInventoryRequestInventoriesNodesInner.from_dict(update_multi_node_inventory_request_inventories_nodes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


