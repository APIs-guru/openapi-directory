# SegmentFilterClause

Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_filter** | [**SegmentDimensionFilter**](SegmentDimensionFilter.md) |  | [optional] 
**metric_filter** | [**SegmentMetricFilter**](SegmentMetricFilter.md) |  | [optional] 
**var_not** | **bool** | Matches the complement (&#x60;!&#x60;) of the filter. | [optional] 

## Example

```python
from openapi_client.models.segment_filter_clause import SegmentFilterClause

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentFilterClause from a JSON string
segment_filter_clause_instance = SegmentFilterClause.from_json(json)
# print the JSON string representation of the object
print(SegmentFilterClause.to_json())

# convert the object into a dict
segment_filter_clause_dict = segment_filter_clause_instance.to_dict()
# create an instance of SegmentFilterClause from a dict
segment_filter_clause_from_dict = SegmentFilterClause.from_dict(segment_filter_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


