# StreamingComputationRanges

Describes full or partial data disk assignment information of the computation ranges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computation_id** | **str** | The ID of the computation. | [optional] 
**range_assignments** | [**List[KeyRangeDataDiskAssignment]**](KeyRangeDataDiskAssignment.md) | Data disk assignments for ranges from this computation. | [optional] 

## Example

```python
from openapi_client.models.streaming_computation_ranges import StreamingComputationRanges

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingComputationRanges from a JSON string
streaming_computation_ranges_instance = StreamingComputationRanges.from_json(json)
# print the JSON string representation of the object
print(StreamingComputationRanges.to_json())

# convert the object into a dict
streaming_computation_ranges_dict = streaming_computation_ranges_instance.to_dict()
# create an instance of StreamingComputationRanges from a dict
streaming_computation_ranges_from_dict = StreamingComputationRanges.from_dict(streaming_computation_ranges_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


