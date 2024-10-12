# DataSourceObjectReference

Reference to a data source object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart_id** | **int** | References to a data source chart. | [optional] 
**data_source_formula_cell** | [**GridCoordinate**](GridCoordinate.md) |  | [optional] 
**data_source_pivot_table_anchor_cell** | [**GridCoordinate**](GridCoordinate.md) |  | [optional] 
**data_source_table_anchor_cell** | [**GridCoordinate**](GridCoordinate.md) |  | [optional] 
**sheet_id** | **str** | References to a DATA_SOURCE sheet. | [optional] 

## Example

```python
from openapi_client.models.data_source_object_reference import DataSourceObjectReference

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceObjectReference from a JSON string
data_source_object_reference_instance = DataSourceObjectReference.from_json(json)
# print the JSON string representation of the object
print(DataSourceObjectReference.to_json())

# convert the object into a dict
data_source_object_reference_dict = data_source_object_reference_instance.to_dict()
# create an instance of DataSourceObjectReference from a dict
data_source_object_reference_from_dict = DataSourceObjectReference.from_dict(data_source_object_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


