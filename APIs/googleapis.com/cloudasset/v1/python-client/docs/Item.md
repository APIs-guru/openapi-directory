# Item

A single piece of inventory on a VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_package** | [**SoftwarePackage**](SoftwarePackage.md) |  | [optional] 
**create_time** | **str** | When this inventory item was first detected. | [optional] 
**id** | **str** | Identifier for this item, unique across items for this VM. | [optional] 
**installed_package** | [**SoftwarePackage**](SoftwarePackage.md) |  | [optional] 
**origin_type** | **str** | The origin of this inventory item. | [optional] 
**type** | **str** | The specific type of inventory, correlating to its specific details. | [optional] 
**update_time** | **str** | When this inventory item was last modified. | [optional] 

## Example

```python
from openapi_client.models.item import Item

# TODO update the JSON string below
json = "{}"
# create an instance of Item from a JSON string
item_instance = Item.from_json(json)
# print the JSON string representation of the object
print(Item.to_json())

# convert the object into a dict
item_dict = item_instance.to_dict()
# create an instance of Item from a dict
item_from_dict = Item.from_dict(item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


