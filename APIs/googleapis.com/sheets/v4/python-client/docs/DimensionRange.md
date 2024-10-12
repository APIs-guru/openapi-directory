# DimensionRange

A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **str** | The dimension of the span. | [optional] 
**end_index** | **int** | The end (exclusive) of the span, or not set if unbounded. | [optional] 
**sheet_id** | **int** | The sheet this span is on. | [optional] 
**start_index** | **int** | The start (inclusive) of the span, or not set if unbounded. | [optional] 

## Example

```python
from openapi_client.models.dimension_range import DimensionRange

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionRange from a JSON string
dimension_range_instance = DimensionRange.from_json(json)
# print the JSON string representation of the object
print(DimensionRange.to_json())

# convert the object into a dict
dimension_range_dict = dimension_range_instance.to_dict()
# create an instance of DimensionRange from a dict
dimension_range_from_dict = DimensionRange.from_dict(dimension_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


