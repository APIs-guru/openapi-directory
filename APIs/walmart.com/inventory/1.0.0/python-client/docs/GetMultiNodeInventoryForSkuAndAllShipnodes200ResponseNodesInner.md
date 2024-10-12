# GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInner


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
from openapi_client.models.get_multi_node_inventory_for_sku_and_all_shipnodes200_response_nodes_inner import GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInner from a JSON string
get_multi_node_inventory_for_sku_and_all_shipnodes200_response_nodes_inner_instance = GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInner.from_json(json)
# print the JSON string representation of the object
print(GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInner.to_json())

# convert the object into a dict
get_multi_node_inventory_for_sku_and_all_shipnodes200_response_nodes_inner_dict = get_multi_node_inventory_for_sku_and_all_shipnodes200_response_nodes_inner_instance.to_dict()
# create an instance of GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInner from a dict
get_multi_node_inventory_for_sku_and_all_shipnodes200_response_nodes_inner_from_dict = GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInner.from_dict(get_multi_node_inventory_for_sku_and_all_shipnodes200_response_nodes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


