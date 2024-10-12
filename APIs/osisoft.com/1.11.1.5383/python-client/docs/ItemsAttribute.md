# ItemsAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Attribute]**](Attribute.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_attribute import ItemsAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsAttribute from a JSON string
items_attribute_instance = ItemsAttribute.from_json(json)
# print the JSON string representation of the object
print(ItemsAttribute.to_json())

# convert the object into a dict
items_attribute_dict = items_attribute_instance.to_dict()
# create an instance of ItemsAttribute from a dict
items_attribute_from_dict = ItemsAttribute.from_dict(items_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


