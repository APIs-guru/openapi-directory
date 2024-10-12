# ItemsEnumerationSet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[EnumerationSet]**](EnumerationSet.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_enumeration_set import ItemsEnumerationSet

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsEnumerationSet from a JSON string
items_enumeration_set_instance = ItemsEnumerationSet.from_json(json)
# print the JSON string representation of the object
print(ItemsEnumerationSet.to_json())

# convert the object into a dict
items_enumeration_set_dict = items_enumeration_set_instance.to_dict()
# create an instance of ItemsEnumerationSet from a dict
items_enumeration_set_from_dict = ItemsEnumerationSet.from_dict(items_enumeration_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


