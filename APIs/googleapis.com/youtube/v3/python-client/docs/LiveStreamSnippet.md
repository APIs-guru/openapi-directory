# LiveStreamSnippet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | The ID that YouTube uses to uniquely identify the channel that is transmitting the stream. | [optional] 
**description** | **str** | The stream&#39;s description. The value cannot be longer than 10000 characters. | [optional] 
**is_default_stream** | **bool** |  | [optional] 
**published_at** | **datetime** | The date and time that the stream was created. | [optional] 
**title** | **str** | The stream&#39;s title. The value must be between 1 and 128 characters long. | [optional] 

## Example

```python
from openapi_client.models.live_stream_snippet import LiveStreamSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStreamSnippet from a JSON string
live_stream_snippet_instance = LiveStreamSnippet.from_json(json)
# print the JSON string representation of the object
print(LiveStreamSnippet.to_json())

# convert the object into a dict
live_stream_snippet_dict = live_stream_snippet_instance.to_dict()
# create an instance of LiveStreamSnippet from a dict
live_stream_snippet_from_dict = LiveStreamSnippet.from_dict(live_stream_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


