# DataSourceSheetDimensionRange

A range along a single dimension on a DATA_SOURCE sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_references** | [**List[DataSourceColumnReference]**](DataSourceColumnReference.md) | The columns on the data source sheet. | [optional] 
**sheet_id** | **int** | The ID of the data source sheet the range is on. | [optional] 

## Example

```python
from openapi_client.models.data_source_sheet_dimension_range import DataSourceSheetDimensionRange

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceSheetDimensionRange from a JSON string
data_source_sheet_dimension_range_instance = DataSourceSheetDimensionRange.from_json(json)
# print the JSON string representation of the object
print(DataSourceSheetDimensionRange.to_json())

# convert the object into a dict
data_source_sheet_dimension_range_dict = data_source_sheet_dimension_range_instance.to_dict()
# create an instance of DataSourceSheetDimensionRange from a dict
data_source_sheet_dimension_range_from_dict = DataSourceSheetDimensionRange.from_dict(data_source_sheet_dimension_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


