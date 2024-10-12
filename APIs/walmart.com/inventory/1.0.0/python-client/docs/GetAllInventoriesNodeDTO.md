# GetAllInventoriesNodeDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avail_to_sell_qty** | [**GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerAvailToSellQty**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerAvailToSellQty.md) |  | [optional] 
**input_qty** | [**GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerInputQty**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerInputQty.md) |  | [optional] 
**reserved_qty** | [**GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerReservedQty**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerReservedQty.md) |  | [optional] 
**ship_node** | **str** | ShipNode Id of the ship node for which the inventory is requested | [optional] 

## Example

```python
from openapi_client.models.get_all_inventories_node_dto import GetAllInventoriesNodeDTO

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllInventoriesNodeDTO from a JSON string
get_all_inventories_node_dto_instance = GetAllInventoriesNodeDTO.from_json(json)
# print the JSON string representation of the object
print(GetAllInventoriesNodeDTO.to_json())

# convert the object into a dict
get_all_inventories_node_dto_dict = get_all_inventories_node_dto_instance.to_dict()
# create an instance of GetAllInventoriesNodeDTO from a dict
get_all_inventories_node_dto_from_dict = GetAllInventoriesNodeDTO.from_dict(get_all_inventories_node_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


