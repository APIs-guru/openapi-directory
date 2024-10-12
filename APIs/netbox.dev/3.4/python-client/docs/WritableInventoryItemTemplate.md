# WritableInventoryItemTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**component** | **object** |  | [optional] [readonly] 
**component_id** | **int** |  | [optional] 
**component_type** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | **int** |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**manufacturer** | **int** |  | [optional] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**parent** | **int** |  | [optional] 
**part_id** | **str** | Manufacturer-assigned part identifier | [optional] 
**role** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_inventory_item_template import WritableInventoryItemTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of WritableInventoryItemTemplate from a JSON string
writable_inventory_item_template_instance = WritableInventoryItemTemplate.from_json(json)
# print the JSON string representation of the object
print(WritableInventoryItemTemplate.to_json())

# convert the object into a dict
writable_inventory_item_template_dict = writable_inventory_item_template_instance.to_dict()
# create an instance of WritableInventoryItemTemplate from a dict
writable_inventory_item_template_from_dict = WritableInventoryItemTemplate.from_dict(writable_inventory_item_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


