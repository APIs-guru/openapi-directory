# InventoryItemRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**inventoryitem_count** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.inventory_item_role import InventoryItemRole

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryItemRole from a JSON string
inventory_item_role_instance = InventoryItemRole.from_json(json)
# print the JSON string representation of the object
print(InventoryItemRole.to_json())

# convert the object into a dict
inventory_item_role_dict = inventory_item_role_instance.to_dict()
# create an instance of InventoryItemRole from a dict
inventory_item_role_from_dict = InventoryItemRole.from_dict(inventory_item_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


