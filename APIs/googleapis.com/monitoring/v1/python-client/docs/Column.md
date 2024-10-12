# Column

Defines the layout properties and content for a column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**weight** | **str** | The relative weight of this column. The column weight is used to adjust the width of columns on the screen (relative to peers). Greater the weight, greater the width of the column on the screen. If omitted, a value of 1 is used while rendering. | [optional] 
**widgets** | [**List[Widget]**](Widget.md) | The display widgets arranged vertically in this column. | [optional] 

## Example

```python
from openapi_client.models.column import Column

# TODO update the JSON string below
json = "{}"
# create an instance of Column from a JSON string
column_instance = Column.from_json(json)
# print the JSON string representation of the object
print(Column.to_json())

# convert the object into a dict
column_dict = column_instance.to_dict()
# create an instance of Column from a dict
column_from_dict = Column.from_dict(column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


