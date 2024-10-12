# SavedColumnList

A list of saved columns. Advertisers create saved columns to report on Floodlight activities, Google Analytics goals, or custom KPIs. To request reports with saved columns, you'll need the saved column names that are available from this list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[SavedColumn]**](SavedColumn.md) | The saved columns being requested. | [optional] 
**kind** | **str** | Identifies this as a SavedColumnList resource. Value: the fixed string doubleclicksearch#savedColumnList. | [optional] 

## Example

```python
from openapi_client.models.saved_column_list import SavedColumnList

# TODO update the JSON string below
json = "{}"
# create an instance of SavedColumnList from a JSON string
saved_column_list_instance = SavedColumnList.from_json(json)
# print the JSON string representation of the object
print(SavedColumnList.to_json())

# convert the object into a dict
saved_column_list_dict = saved_column_list_instance.to_dict()
# create an instance of SavedColumnList from a dict
saved_column_list_from_dict = SavedColumnList.from_dict(saved_column_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


