# UpdateMultiNodeInventory200ResponseNodesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner]**](GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner.md) | Node Update Error description. | [optional] 
**ship_node** | **str** | ShipNode Id of the ship node for which the inventory is requested | [optional] 
**status** | **str** | Node Update status. Example: &#39;Success&#39; | [optional] 

## Example

```python
from openapi_client.models.update_multi_node_inventory200_response_nodes_inner import UpdateMultiNodeInventory200ResponseNodesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMultiNodeInventory200ResponseNodesInner from a JSON string
update_multi_node_inventory200_response_nodes_inner_instance = UpdateMultiNodeInventory200ResponseNodesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateMultiNodeInventory200ResponseNodesInner.to_json())

# convert the object into a dict
update_multi_node_inventory200_response_nodes_inner_dict = update_multi_node_inventory200_response_nodes_inner_instance.to_dict()
# create an instance of UpdateMultiNodeInventory200ResponseNodesInner from a dict
update_multi_node_inventory200_response_nodes_inner_from_dict = UpdateMultiNodeInventory200ResponseNodesInner.from_dict(update_multi_node_inventory200_response_nodes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


