# UpdateLiveStreamRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latency_mode** | **str** | Latency is the time from when the streamer transmits a frame of video to when you see it in the player. Set this as an alternative to setting low latency or reduced latency flags. The Low Latency value is a beta feature. Read more here: https://mux.com/blog/introducing-low-latency-live-streaming/ | [optional] 
**max_continuous_duration** | **int** | The time in seconds a live stream may be continuously active before being disconnected. Defaults to 12 hours. | [optional] [default to 43200]
**passthrough** | **str** | Arbitrary user-supplied metadata set for the live stream. Max 255 characters. In order to clear this value, the field should be included with an empty-string value. | [optional] 
**reconnect_slate_url** | **str** | The URL of the image file that Mux should download and use as slate media during interruptions of the live stream media. This file will be downloaded each time a new recorded asset is created from the live stream. Set this to a blank string to clear the value so that the default slate media will be used. | [optional] 
**reconnect_window** | **float** | When live streaming software disconnects from Mux, either intentionally or due to a drop in the network, the Reconnect Window is the time in seconds that Mux should wait for the streaming software to reconnect before considering the live stream finished and completing the recorded asset.  If not specified directly, Standard Latency streams have a Reconnect Window of 60 seconds; Reduced and Low Latency streams have a default of 0 seconds, or no Reconnect Window. For that reason, we suggest specifying a value other than zero for Reduced and Low Latency streams.  Reduced and Low Latency streams with a Reconnect Window greater than zero will insert slate media into the recorded asset while waiting for the streaming software to reconnect or when there are brief interruptions in the live stream media. When using a Reconnect Window setting higher than 60 seconds with a Standard Latency stream, we highly recommend enabling slate with the &#x60;use_slate_for_standard_latency&#x60; option.  | [optional] [default to 60]
**use_slate_for_standard_latency** | **bool** | By default, Standard Latency live streams do not have slate media inserted while waiting for live streaming software to reconnect to Mux. Setting this to true enables slate insertion on a Standard Latency stream. | [optional] [default to False]

## Example

```python
from openapi_client.models.update_live_stream_request import UpdateLiveStreamRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateLiveStreamRequest from a JSON string
update_live_stream_request_instance = UpdateLiveStreamRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateLiveStreamRequest.to_json())

# convert the object into a dict
update_live_stream_request_dict = update_live_stream_request_instance.to_dict()
# create an instance of UpdateLiveStreamRequest from a dict
update_live_stream_request_from_dict = UpdateLiveStreamRequest.from_dict(update_live_stream_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


