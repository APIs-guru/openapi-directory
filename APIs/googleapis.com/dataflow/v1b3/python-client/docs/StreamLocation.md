# StreamLocation

Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_source_location** | [**CustomSourceLocation**](CustomSourceLocation.md) |  | [optional] 
**pubsub_location** | [**PubsubLocation**](PubsubLocation.md) |  | [optional] 
**side_input_location** | [**StreamingSideInputLocation**](StreamingSideInputLocation.md) |  | [optional] 
**streaming_stage_location** | [**StreamingStageLocation**](StreamingStageLocation.md) |  | [optional] 

## Example

```python
from openapi_client.models.stream_location import StreamLocation

# TODO update the JSON string below
json = "{}"
# create an instance of StreamLocation from a JSON string
stream_location_instance = StreamLocation.from_json(json)
# print the JSON string representation of the object
print(StreamLocation.to_json())

# convert the object into a dict
stream_location_dict = stream_location_instance.to_dict()
# create an instance of StreamLocation from a dict
stream_location_from_dict = StreamLocation.from_dict(stream_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


