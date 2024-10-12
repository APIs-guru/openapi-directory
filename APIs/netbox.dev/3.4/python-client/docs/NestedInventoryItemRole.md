# NestedInventoryItemRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**inventoryitem_count** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_inventory_item_role import NestedInventoryItemRole

# TODO update the JSON string below
json = "{}"
# create an instance of NestedInventoryItemRole from a JSON string
nested_inventory_item_role_instance = NestedInventoryItemRole.from_json(json)
# print the JSON string representation of the object
print(NestedInventoryItemRole.to_json())

# convert the object into a dict
nested_inventory_item_role_dict = nested_inventory_item_role_instance.to_dict()
# create an instance of NestedInventoryItemRole from a dict
nested_inventory_item_role_from_dict = NestedInventoryItemRole.from_dict(nested_inventory_item_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


