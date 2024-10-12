# ColumnSettings

The persistent settings for a table's columns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | Required. The id of the column. | [optional] 
**visible** | **bool** | Required. Whether the column should be visible on page load. | [optional] 

## Example

```python
from openapi_client.models.column_settings import ColumnSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnSettings from a JSON string
column_settings_instance = ColumnSettings.from_json(json)
# print the JSON string representation of the object
print(ColumnSettings.to_json())

# convert the object into a dict
column_settings_dict = column_settings_instance.to_dict()
# create an instance of ColumnSettings from a dict
column_settings_from_dict = ColumnSettings.from_dict(column_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


