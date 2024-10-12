# AssignedInventorySource

An assignment between a targetable inventory source and an inventory source group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_inventory_source_id** | **str** | Output only. The unique ID of the assigned inventory source. The ID is only unique within a given inventory source group. It may be reused in other contexts. | [optional] [readonly] 
**inventory_source_id** | **str** | Required. The ID of the inventory source entity being targeted. | [optional] 
**name** | **str** | Output only. The resource name of the assigned inventory source. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assigned_inventory_source import AssignedInventorySource

# TODO update the JSON string below
json = "{}"
# create an instance of AssignedInventorySource from a JSON string
assigned_inventory_source_instance = AssignedInventorySource.from_json(json)
# print the JSON string representation of the object
print(AssignedInventorySource.to_json())

# convert the object into a dict
assigned_inventory_source_dict = assigned_inventory_source_instance.to_dict()
# create an instance of AssignedInventorySource from a dict
assigned_inventory_source_from_dict = AssignedInventorySource.from_dict(assigned_inventory_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


