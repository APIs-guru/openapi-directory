# ItemsElementCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ElementCategory]**](ElementCategory.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_element_category import ItemsElementCategory

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsElementCategory from a JSON string
items_element_category_instance = ItemsElementCategory.from_json(json)
# print the JSON string representation of the object
print(ItemsElementCategory.to_json())

# convert the object into a dict
items_element_category_dict = items_element_category_instance.to_dict()
# create an instance of ItemsElementCategory from a dict
items_element_category_from_dict = ItemsElementCategory.from_dict(items_element_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


