# XPSColumnSpecCorrelatedColumn

Identifies a table's column, and its correlation with the column this ColumnSpec describes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_id** | **int** |  | [optional] 
**correlation_stats** | [**XPSCorrelationStats**](XPSCorrelationStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_column_spec_correlated_column import XPSColumnSpecCorrelatedColumn

# TODO update the JSON string below
json = "{}"
# create an instance of XPSColumnSpecCorrelatedColumn from a JSON string
xps_column_spec_correlated_column_instance = XPSColumnSpecCorrelatedColumn.from_json(json)
# print the JSON string representation of the object
print(XPSColumnSpecCorrelatedColumn.to_json())

# convert the object into a dict
xps_column_spec_correlated_column_dict = xps_column_spec_correlated_column_instance.to_dict()
# create an instance of XPSColumnSpecCorrelatedColumn from a dict
xps_column_spec_correlated_column_from_dict = XPSColumnSpecCorrelatedColumn.from_dict(xps_column_spec_correlated_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


