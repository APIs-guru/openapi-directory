# Row

Defines the layout properties and content for a row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**weight** | **str** | The relative weight of this row. The row weight is used to adjust the height of rows on the screen (relative to peers). Greater the weight, greater the height of the row on the screen. If omitted, a value of 1 is used while rendering. | [optional] 
**widgets** | [**List[Widget]**](Widget.md) | The display widgets arranged horizontally in this row. | [optional] 

## Example

```python
from openapi_client.models.row import Row

# TODO update the JSON string below
json = "{}"
# create an instance of Row from a JSON string
row_instance = Row.from_json(json)
# print the JSON string representation of the object
print(Row.to_json())

# convert the object into a dict
row_dict = row_instance.to_dict()
# create an instance of Row from a dict
row_from_dict = Row.from_dict(row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


