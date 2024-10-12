# Selection

Wrapper for Selection Field value as combined value/display_name pair for selected choice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Selection value as human-readable display string. | [optional] 
**value** | **str** | Selection value as Field Choice ID. | [optional] 

## Example

```python
from openapi_client.models.selection import Selection

# TODO update the JSON string below
json = "{}"
# create an instance of Selection from a JSON string
selection_instance = Selection.from_json(json)
# print the JSON string representation of the object
print(Selection.to_json())

# convert the object into a dict
selection_dict = selection_instance.to_dict()
# create an instance of Selection from a dict
selection_from_dict = Selection.from_dict(selection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


