# UpdateInventoriesRequestNodeDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_qty** | [**GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerReservedQty**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInnerReservedQty.md) |  | 
**ship_node** | **str** | ShipNode Id of the ship node for which the inventory is requested | 

## Example

```python
from openapi_client.models.update_inventories_request_node_dto import UpdateInventoriesRequestNodeDTO

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInventoriesRequestNodeDTO from a JSON string
update_inventories_request_node_dto_instance = UpdateInventoriesRequestNodeDTO.from_json(json)
# print the JSON string representation of the object
print(UpdateInventoriesRequestNodeDTO.to_json())

# convert the object into a dict
update_inventories_request_node_dto_dict = update_inventories_request_node_dto_instance.to_dict()
# create an instance of UpdateInventoriesRequestNodeDTO from a dict
update_inventories_request_node_dto_from_dict = UpdateInventoriesRequestNodeDTO.from_dict(update_inventories_request_node_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


