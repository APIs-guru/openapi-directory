# ChannelStopWatchingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**connection_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.channel_stop_watching_request import ChannelStopWatchingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelStopWatchingRequest from a JSON string
channel_stop_watching_request_instance = ChannelStopWatchingRequest.from_json(json)
# print the JSON string representation of the object
print(ChannelStopWatchingRequest.to_json())

# convert the object into a dict
channel_stop_watching_request_dict = channel_stop_watching_request_instance.to_dict()
# create an instance of ChannelStopWatchingRequest from a dict
channel_stop_watching_request_from_dict = ChannelStopWatchingRequest.from_dict(channel_stop_watching_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


