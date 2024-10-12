# ItemsElementTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ElementTemplate]**](ElementTemplate.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_element_template import ItemsElementTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsElementTemplate from a JSON string
items_element_template_instance = ItemsElementTemplate.from_json(json)
# print the JSON string representation of the object
print(ItemsElementTemplate.to_json())

# convert the object into a dict
items_element_template_dict = items_element_template_instance.to_dict()
# create an instance of ItemsElementTemplate from a dict
items_element_template_from_dict = ItemsElementTemplate.from_dict(items_element_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


