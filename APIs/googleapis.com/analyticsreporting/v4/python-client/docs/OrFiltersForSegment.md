# OrFiltersForSegment

A list of segment filters in the `OR` group are combined with the logical OR operator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segment_filter_clauses** | [**List[SegmentFilterClause]**](SegmentFilterClause.md) | List of segment filters to be combined with a &#x60;OR&#x60; operator. | [optional] 

## Example

```python
from openapi_client.models.or_filters_for_segment import OrFiltersForSegment

# TODO update the JSON string below
json = "{}"
# create an instance of OrFiltersForSegment from a JSON string
or_filters_for_segment_instance = OrFiltersForSegment.from_json(json)
# print the JSON string representation of the object
print(OrFiltersForSegment.to_json())

# convert the object into a dict
or_filters_for_segment_dict = or_filters_for_segment_instance.to_dict()
# create an instance of OrFiltersForSegment from a dict
or_filters_for_segment_from_dict = OrFiltersForSegment.from_dict(or_filters_for_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


