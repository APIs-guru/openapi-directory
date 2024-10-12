# StreamingSideInputLocation

Identifies the location of a streaming side input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state_family** | **str** | Identifies the state family where this side input is stored. | [optional] 
**tag** | **str** | Identifies the particular side input within the streaming Dataflow job. | [optional] 

## Example

```python
from openapi_client.models.streaming_side_input_location import StreamingSideInputLocation

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingSideInputLocation from a JSON string
streaming_side_input_location_instance = StreamingSideInputLocation.from_json(json)
# print the JSON string representation of the object
print(StreamingSideInputLocation.to_json())

# convert the object into a dict
streaming_side_input_location_dict = streaming_side_input_location_instance.to_dict()
# create an instance of StreamingSideInputLocation from a dict
streaming_side_input_location_from_dict = StreamingSideInputLocation.from_dict(streaming_side_input_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


