# SegmentFilter

SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_not** | **bool** | If true, match the complement of simple or sequence segment. For example, to match all visits not from \&quot;New York\&quot;, we can define the segment as follows: \&quot;sessionSegment\&quot;: { \&quot;segmentFilters\&quot;: [{ \&quot;simpleSegment\&quot; :{ \&quot;orFiltersForSegment\&quot;: [{ \&quot;segmentFilterClauses\&quot;:[{ \&quot;dimensionFilter\&quot;: { \&quot;dimensionName\&quot;: \&quot;ga:city\&quot;, \&quot;expressions\&quot;: [\&quot;New York\&quot;] } }] }] }, \&quot;not\&quot;: \&quot;True\&quot; }] }, | [optional] 
**sequence_segment** | [**SequenceSegment**](SequenceSegment.md) |  | [optional] 
**simple_segment** | [**SimpleSegment**](SimpleSegment.md) |  | [optional] 

## Example

```python
from openapi_client.models.segment_filter import SegmentFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentFilter from a JSON string
segment_filter_instance = SegmentFilter.from_json(json)
# print the JSON string representation of the object
print(SegmentFilter.to_json())

# convert the object into a dict
segment_filter_dict = segment_filter_instance.to_dict()
# create an instance of SegmentFilter from a dict
segment_filter_from_dict = SegmentFilter.from_dict(segment_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


