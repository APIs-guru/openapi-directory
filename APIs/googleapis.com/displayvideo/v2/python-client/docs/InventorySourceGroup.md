# InventorySourceGroup

A collection of targetable inventory sources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. The display name of the inventory source group. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**inventory_source_group_id** | **str** | Output only. The unique ID of the inventory source group. Assigned by the system. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the inventory source group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.inventory_source_group import InventorySourceGroup

# TODO update the JSON string below
json = "{}"
# create an instance of InventorySourceGroup from a JSON string
inventory_source_group_instance = InventorySourceGroup.from_json(json)
# print the JSON string representation of the object
print(InventorySourceGroup.to_json())

# convert the object into a dict
inventory_source_group_dict = inventory_source_group_instance.to_dict()
# create an instance of InventorySourceGroup from a dict
inventory_source_group_from_dict = InventorySourceGroup.from_dict(inventory_source_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


