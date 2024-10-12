# SavedColumn

A saved column

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies this as a SavedColumn resource. Value: the fixed string doubleclicksearch#savedColumn. | [optional] 
**saved_column_name** | **str** | The name of the saved column. | [optional] 
**type** | **str** | The type of data this saved column will produce. | [optional] 

## Example

```python
from openapi_client.models.saved_column import SavedColumn

# TODO update the JSON string below
json = "{}"
# create an instance of SavedColumn from a JSON string
saved_column_instance = SavedColumn.from_json(json)
# print the JSON string representation of the object
print(SavedColumn.to_json())

# convert the object into a dict
saved_column_dict = saved_column_instance.to_dict()
# create an instance of SavedColumn from a dict
saved_column_from_dict = SavedColumn.from_dict(saved_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


