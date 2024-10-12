# RowLayout

A simplified layout that divides the available space into rows and arranges a set of widgets horizontally in each row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rows** | [**List[Row]**](Row.md) | The rows of content to display. | [optional] 

## Example

```python
from openapi_client.models.row_layout import RowLayout

# TODO update the JSON string below
json = "{}"
# create an instance of RowLayout from a JSON string
row_layout_instance = RowLayout.from_json(json)
# print the JSON string representation of the object
print(RowLayout.to_json())

# convert the object into a dict
row_layout_dict = row_layout_instance.to_dict()
# create an instance of RowLayout from a dict
row_layout_from_dict = RowLayout.from_dict(row_layout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


