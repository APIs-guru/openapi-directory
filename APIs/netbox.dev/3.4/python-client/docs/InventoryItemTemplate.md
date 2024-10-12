# InventoryItemTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**component** | **object** |  | [optional] [readonly] 
**component_id** | **int** |  | [optional] 
**component_type** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | [**NestedDeviceType**](NestedDeviceType.md) |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**manufacturer** | [**NestedManufacturer**](NestedManufacturer.md) |  | [optional] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**parent** | **int** |  | [optional] 
**part_id** | **str** | Manufacturer-assigned part identifier | [optional] 
**role** | [**NestedInventoryItemRole**](NestedInventoryItemRole.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.inventory_item_template import InventoryItemTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryItemTemplate from a JSON string
inventory_item_template_instance = InventoryItemTemplate.from_json(json)
# print the JSON string representation of the object
print(InventoryItemTemplate.to_json())

# convert the object into a dict
inventory_item_template_dict = inventory_item_template_instance.to_dict()
# create an instance of InventoryItemTemplate from a dict
inventory_item_template_from_dict = InventoryItemTemplate.from_dict(inventory_item_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


