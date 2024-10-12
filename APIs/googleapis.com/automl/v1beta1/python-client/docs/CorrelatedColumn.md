# CorrelatedColumn

Identifies the table's column, and its correlation with the column this ColumnSpec describes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_spec_id** | **str** | The column_spec_id of the correlated column, which belongs to the same table as the in-context column. | [optional] 
**correlation_stats** | [**CorrelationStats**](CorrelationStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.correlated_column import CorrelatedColumn

# TODO update the JSON string below
json = "{}"
# create an instance of CorrelatedColumn from a JSON string
correlated_column_instance = CorrelatedColumn.from_json(json)
# print the JSON string representation of the object
print(CorrelatedColumn.to_json())

# convert the object into a dict
correlated_column_dict = correlated_column_instance.to_dict()
# create an instance of CorrelatedColumn from a dict
correlated_column_from_dict = CorrelatedColumn.from_dict(correlated_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


