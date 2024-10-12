# ItemsAttributeTrait


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AttributeTrait]**](AttributeTrait.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_attribute_trait import ItemsAttributeTrait

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsAttributeTrait from a JSON string
items_attribute_trait_instance = ItemsAttributeTrait.from_json(json)
# print the JSON string representation of the object
print(ItemsAttributeTrait.to_json())

# convert the object into a dict
items_attribute_trait_dict = items_attribute_trait_instance.to_dict()
# create an instance of ItemsAttributeTrait from a dict
items_attribute_trait_from_dict = ItemsAttributeTrait.from_dict(items_attribute_trait_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


