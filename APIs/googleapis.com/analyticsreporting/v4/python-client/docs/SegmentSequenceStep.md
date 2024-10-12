# SegmentSequenceStep

A segment sequence definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_type** | **str** | Specifies if the step immediately precedes or can be any time before the next step. | [optional] 
**or_filters_for_segment** | [**List[OrFiltersForSegment]**](OrFiltersForSegment.md) | A sequence is specified with a list of Or grouped filters which are combined with &#x60;AND&#x60; operator. | [optional] 

## Example

```python
from openapi_client.models.segment_sequence_step import SegmentSequenceStep

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentSequenceStep from a JSON string
segment_sequence_step_instance = SegmentSequenceStep.from_json(json)
# print the JSON string representation of the object
print(SegmentSequenceStep.to_json())

# convert the object into a dict
segment_sequence_step_dict = segment_sequence_step_instance.to_dict()
# create an instance of SegmentSequenceStep from a dict
segment_sequence_step_from_dict = SegmentSequenceStep.from_dict(segment_sequence_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


