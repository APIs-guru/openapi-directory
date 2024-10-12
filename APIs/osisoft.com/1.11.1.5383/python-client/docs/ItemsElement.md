# ItemsElement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Element]**](Element.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_element import ItemsElement

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsElement from a JSON string
items_element_instance = ItemsElement.from_json(json)
# print the JSON string representation of the object
print(ItemsElement.to_json())

# convert the object into a dict
items_element_dict = items_element_instance.to_dict()
# create an instance of ItemsElement from a dict
items_element_from_dict = ItemsElement.from_dict(items_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


