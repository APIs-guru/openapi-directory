# LiveStreamUpdateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**live_stream** | [**LiveStream7**](LiveStream7.md) |  | 

## Example

```python
from openapi_client.models.live_stream_update_input import LiveStreamUpdateInput

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStreamUpdateInput from a JSON string
live_stream_update_input_instance = LiveStreamUpdateInput.from_json(json)
# print the JSON string representation of the object
print(LiveStreamUpdateInput.to_json())

# convert the object into a dict
live_stream_update_input_dict = live_stream_update_input_instance.to_dict()
# create an instance of LiveStreamUpdateInput from a dict
live_stream_update_input_from_dict = LiveStreamUpdateInput.from_dict(live_stream_update_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


