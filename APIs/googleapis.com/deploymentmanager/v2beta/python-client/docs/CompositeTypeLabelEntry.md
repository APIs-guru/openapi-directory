# CompositeTypeLabelEntry

Label object for CompositeTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key of the label | [optional] 
**value** | **str** | Value of the label | [optional] 

## Example

```python
from openapi_client.models.composite_type_label_entry import CompositeTypeLabelEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CompositeTypeLabelEntry from a JSON string
composite_type_label_entry_instance = CompositeTypeLabelEntry.from_json(json)
# print the JSON string representation of the object
print(CompositeTypeLabelEntry.to_json())

# convert the object into a dict
composite_type_label_entry_dict = composite_type_label_entry_instance.to_dict()
# create an instance of CompositeTypeLabelEntry from a dict
composite_type_label_entry_from_dict = CompositeTypeLabelEntry.from_dict(composite_type_label_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


