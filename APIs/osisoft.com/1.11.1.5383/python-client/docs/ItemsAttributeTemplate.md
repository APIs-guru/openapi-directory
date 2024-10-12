# ItemsAttributeTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AttributeTemplate]**](AttributeTemplate.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_attribute_template import ItemsAttributeTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsAttributeTemplate from a JSON string
items_attribute_template_instance = ItemsAttributeTemplate.from_json(json)
# print the JSON string representation of the object
print(ItemsAttributeTemplate.to_json())

# convert the object into a dict
items_attribute_template_dict = items_attribute_template_instance.to_dict()
# create an instance of ItemsAttributeTemplate from a dict
items_attribute_template_from_dict = ItemsAttributeTemplate.from_dict(items_attribute_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


