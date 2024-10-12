# LiveStreamContentDetails

Detailed settings of a stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed_captions_ingestion_url** | **str** | The ingestion URL where the closed captions of this stream are sent. | [optional] 
**is_reusable** | **bool** | Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times. If you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways: - A non-reusable stream can only be bound to one broadcast. - A non-reusable stream might be deleted by an automated process after the broadcast ends. - The liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream.  | [optional] 

## Example

```python
from openapi_client.models.live_stream_content_details import LiveStreamContentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStreamContentDetails from a JSON string
live_stream_content_details_instance = LiveStreamContentDetails.from_json(json)
# print the JSON string representation of the object
print(LiveStreamContentDetails.to_json())

# convert the object into a dict
live_stream_content_details_dict = live_stream_content_details_instance.to_dict()
# create an instance of LiveStreamContentDetails from a dict
live_stream_content_details_from_dict = LiveStreamContentDetails.from_dict(live_stream_content_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


