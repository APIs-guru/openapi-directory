# Dimension

A chart dimension. Dimensions are a structured label, class, or category for a set of measurements in your data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | Required. The name of the column in the source SQL query that is used to chart the dimension. | [optional] 
**column_type** | **str** | Optional. The type of the dimension column. This is relevant only if one of the bin_size fields is set. If it is empty, the type TIMESTAMP or INT64 will be assumed based on which bin_size field is set. If populated, this should be set to one of the following types: DATE, TIME, DATETIME, TIMESTAMP, BIGNUMERIC, INT64, NUMERIC, FLOAT64. | [optional] 
**float_bin_size** | **float** | Optional. float_bin_size is used when the column type used for a dimension is a floating point numeric column. | [optional] 
**max_bin_count** | **int** | A limit to the number of bins generated. When 0 is specified, the maximum count is not enforced. | [optional] 
**numeric_bin_size** | **int** | numeric_bin_size is used when the column type used for a dimension is numeric or string. | [optional] 
**sort_column** | **str** | The column name to sort on for binning. This column can be the same column as this dimension or any other column used as a measure in the results. If sort_order is set to NONE, then this value is not used. | [optional] 
**sort_order** | **str** | The sort order applied to the sort column. | [optional] 
**time_bin_size** | **str** | time_bin_size is used when the data type specified by column is a time type and the bin size is determined by a time duration. If column_type is DATE, this must be a whole value multiple of 1 day. If column_type is TIME, this must be less than or equal to 24 hours. | [optional] 

## Example

```python
from openapi_client.models.dimension import Dimension

# TODO update the JSON string below
json = "{}"
# create an instance of Dimension from a JSON string
dimension_instance = Dimension.from_json(json)
# print the JSON string representation of the object
print(Dimension.to_json())

# convert the object into a dict
dimension_dict = dimension_instance.to_dict()
# create an instance of Dimension from a dict
dimension_from_dict = Dimension.from_dict(dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


