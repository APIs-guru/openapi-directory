# GetAllInventoriesDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInner]**](GetMultiNodeInventoryForAllSkuAndAllShipNodes200ResponseElementsInventoriesInnerNodesInner.md) |  | [optional] 
**sku** | **str** | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. | [optional] 

## Example

```python
from openapi_client.models.get_all_inventories_dto import GetAllInventoriesDTO

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllInventoriesDTO from a JSON string
get_all_inventories_dto_instance = GetAllInventoriesDTO.from_json(json)
# print the JSON string representation of the object
print(GetAllInventoriesDTO.to_json())

# convert the object into a dict
get_all_inventories_dto_dict = get_all_inventories_dto_instance.to_dict()
# create an instance of GetAllInventoriesDTO from a dict
get_all_inventories_dto_from_dict = GetAllInventoriesDTO.from_dict(get_all_inventories_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


