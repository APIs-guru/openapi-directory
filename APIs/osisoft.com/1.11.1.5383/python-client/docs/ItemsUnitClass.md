# ItemsUnitClass


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[UnitClass]**](UnitClass.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_unit_class import ItemsUnitClass

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsUnitClass from a JSON string
items_unit_class_instance = ItemsUnitClass.from_json(json)
# print the JSON string representation of the object
print(ItemsUnitClass.to_json())

# convert the object into a dict
items_unit_class_dict = items_unit_class_instance.to_dict()
# create an instance of ItemsUnitClass from a dict
items_unit_class_from_dict = ItemsUnitClass.from_dict(items_unit_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


