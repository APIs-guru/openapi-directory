# StreamingStageLocation

Identifies the location of a streaming computation stage, for stage-to-stage communication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **str** | Identifies the particular stream within the streaming Dataflow job. | [optional] 

## Example

```python
from openapi_client.models.streaming_stage_location import StreamingStageLocation

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingStageLocation from a JSON string
streaming_stage_location_instance = StreamingStageLocation.from_json(json)
# print the JSON string representation of the object
print(StreamingStageLocation.to_json())

# convert the object into a dict
streaming_stage_location_dict = streaming_stage_location_instance.to_dict()
# create an instance of StreamingStageLocation from a dict
streaming_stage_location_from_dict = StreamingStageLocation.from_dict(streaming_stage_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


