# ItemsPointAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[PointAttribute]**](PointAttribute.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_point_attribute import ItemsPointAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsPointAttribute from a JSON string
items_point_attribute_instance = ItemsPointAttribute.from_json(json)
# print the JSON string representation of the object
print(ItemsPointAttribute.to_json())

# convert the object into a dict
items_point_attribute_dict = items_point_attribute_instance.to_dict()
# create an instance of ItemsPointAttribute from a dict
items_point_attribute_from_dict = ItemsPointAttribute.from_dict(items_point_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


