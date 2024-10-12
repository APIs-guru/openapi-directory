# ItemsAttributeCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AttributeCategory]**](AttributeCategory.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_attribute_category import ItemsAttributeCategory

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsAttributeCategory from a JSON string
items_attribute_category_instance = ItemsAttributeCategory.from_json(json)
# print the JSON string representation of the object
print(ItemsAttributeCategory.to_json())

# convert the object into a dict
items_attribute_category_dict = items_attribute_category_instance.to_dict()
# create an instance of ItemsAttributeCategory from a dict
items_attribute_category_from_dict = ItemsAttributeCategory.from_dict(items_attribute_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


