# SequenceSegment

Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_step_should_match_first_hit** | **bool** | If set, first step condition must match the first hit of the visitor (in the date range). | [optional] 
**segment_sequence_steps** | [**List[SegmentSequenceStep]**](SegmentSequenceStep.md) | The list of steps in the sequence. | [optional] 

## Example

```python
from openapi_client.models.sequence_segment import SequenceSegment

# TODO update the JSON string below
json = "{}"
# create an instance of SequenceSegment from a JSON string
sequence_segment_instance = SequenceSegment.from_json(json)
# print the JSON string representation of the object
print(SequenceSegment.to_json())

# convert the object into a dict
sequence_segment_dict = sequence_segment_instance.to_dict()
# create an instance of SequenceSegment from a dict
sequence_segment_from_dict = SequenceSegment.from_dict(sequence_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


