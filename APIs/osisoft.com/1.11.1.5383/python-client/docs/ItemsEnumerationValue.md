# ItemsEnumerationValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[EnumerationValue]**](EnumerationValue.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_enumeration_value import ItemsEnumerationValue

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsEnumerationValue from a JSON string
items_enumeration_value_instance = ItemsEnumerationValue.from_json(json)
# print the JSON string representation of the object
print(ItemsEnumerationValue.to_json())

# convert the object into a dict
items_enumeration_value_dict = items_enumeration_value_instance.to_dict()
# create an instance of ItemsEnumerationValue from a dict
items_enumeration_value_from_dict = ItemsEnumerationValue.from_dict(items_enumeration_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


