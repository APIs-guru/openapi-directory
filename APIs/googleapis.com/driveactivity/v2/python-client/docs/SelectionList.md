# SelectionList

Wrapper for SelectionList Field value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[Selection]**](Selection.md) | Selection values. | [optional] 

## Example

```python
from openapi_client.models.selection_list import SelectionList

# TODO update the JSON string below
json = "{}"
# create an instance of SelectionList from a JSON string
selection_list_instance = SelectionList.from_json(json)
# print the JSON string representation of the object
print(SelectionList.to_json())

# convert the object into a dict
selection_list_dict = selection_list_instance.to_dict()
# create an instance of SelectionList from a dict
selection_list_from_dict = SelectionList.from_dict(selection_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


