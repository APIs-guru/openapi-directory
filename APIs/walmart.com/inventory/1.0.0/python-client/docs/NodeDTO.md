# NodeDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avail_to_sell_qty** | [**GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerAvailToSellQty**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerAvailToSellQty.md) |  | [optional] 
**errors** | [**List[GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner]**](GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInner.md) |  | [optional] 
**input_qty** | [**GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerInputQty**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerInputQty.md) |  | [optional] 
**reserved_qty** | [**GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerReservedQty**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerReservedQty.md) |  | [optional] 
**ship_node** | **str** | ShipNode Id of the ship node for which the inventory is requested | [optional] 

## Example

```python
from openapi_client.models.node_dto import NodeDTO

# TODO update the JSON string below
json = "{}"
# create an instance of NodeDTO from a JSON string
node_dto_instance = NodeDTO.from_json(json)
# print the JSON string representation of the object
print(NodeDTO.to_json())

# convert the object into a dict
node_dto_dict = node_dto_instance.to_dict()
# create an instance of NodeDTO from a dict
node_dto_from_dict = NodeDTO.from_dict(node_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


