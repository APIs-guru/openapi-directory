# LiveStreamCreateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**live_stream** | [**LiveStream6**](LiveStream6.md) |  | 

## Example

```python
from openapi_client.models.live_stream_create_input import LiveStreamCreateInput

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStreamCreateInput from a JSON string
live_stream_create_input_instance = LiveStreamCreateInput.from_json(json)
# print the JSON string representation of the object
print(LiveStreamCreateInput.to_json())

# convert the object into a dict
live_stream_create_input_dict = live_stream_create_input_instance.to_dict()
# create an instance of LiveStreamCreateInput from a dict
live_stream_create_input_from_dict = LiveStreamCreateInput.from_dict(live_stream_create_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


