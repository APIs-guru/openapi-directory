# InventoriesDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInner]**](GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInner.md) |  | [optional] 
**sku** | **str** | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. | [optional] 

## Example

```python
from openapi_client.models.inventories_dto import InventoriesDTO

# TODO update the JSON string below
json = "{}"
# create an instance of InventoriesDTO from a JSON string
inventories_dto_instance = InventoriesDTO.from_json(json)
# print the JSON string representation of the object
print(InventoriesDTO.to_json())

# convert the object into a dict
inventories_dto_dict = inventories_dto_instance.to_dict()
# create an instance of InventoriesDTO from a dict
inventories_dto_from_dict = InventoriesDTO.from_dict(inventories_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


