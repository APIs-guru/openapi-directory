# TypeLabelEntry

Label object for Types

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key of the label | [optional] 
**value** | **str** | Value of the label | [optional] 

## Example

```python
from openapi_client.models.type_label_entry import TypeLabelEntry

# TODO update the JSON string below
json = "{}"
# create an instance of TypeLabelEntry from a JSON string
type_label_entry_instance = TypeLabelEntry.from_json(json)
# print the JSON string representation of the object
print(TypeLabelEntry.to_json())

# convert the object into a dict
type_label_entry_dict = type_label_entry_instance.to_dict()
# create an instance of TypeLabelEntry from a dict
type_label_entry_from_dict = TypeLabelEntry.from_dict(type_label_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


