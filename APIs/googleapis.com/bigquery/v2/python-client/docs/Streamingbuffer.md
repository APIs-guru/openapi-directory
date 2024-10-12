# Streamingbuffer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_bytes** | **str** | Output only. A lower-bound estimate of the number of bytes currently in the streaming buffer. | [optional] [readonly] 
**estimated_rows** | **str** | Output only. A lower-bound estimate of the number of rows currently in the streaming buffer. | [optional] [readonly] 
**oldest_entry_time** | **str** | Output only. Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if the streaming buffer is available. | [optional] [readonly] 

## Example

```python
from openapi_client.models.streamingbuffer import Streamingbuffer

# TODO update the JSON string below
json = "{}"
# create an instance of Streamingbuffer from a JSON string
streamingbuffer_instance = Streamingbuffer.from_json(json)
# print the JSON string representation of the object
print(Streamingbuffer.to_json())

# convert the object into a dict
streamingbuffer_dict = streamingbuffer_instance.to_dict()
# create an instance of Streamingbuffer from a dict
streamingbuffer_from_dict = Streamingbuffer.from_dict(streamingbuffer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


