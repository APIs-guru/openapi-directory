# ColumnItem

Details of an issue navigator column item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The issue navigator column label. | [optional] 
**value** | **str** | The issue navigator column value. | [optional] 

## Example

```python
from openapi_client.models.column_item import ColumnItem

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnItem from a JSON string
column_item_instance = ColumnItem.from_json(json)
# print the JSON string representation of the object
print(ColumnItem.to_json())

# convert the object into a dict
column_item_dict = column_item_instance.to_dict()
# create an instance of ColumnItem from a dict
column_item_from_dict = ColumnItem.from_dict(column_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


