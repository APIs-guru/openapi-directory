# ColumnLayout

A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[Column]**](Column.md) | The columns of content to display. | [optional] 

## Example

```python
from openapi_client.models.column_layout import ColumnLayout

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnLayout from a JSON string
column_layout_instance = ColumnLayout.from_json(json)
# print the JSON string representation of the object
print(ColumnLayout.to_json())

# convert the object into a dict
column_layout_dict = column_layout_instance.to_dict()
# create an instance of ColumnLayout from a dict
column_layout_from_dict = ColumnLayout.from_dict(column_layout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


