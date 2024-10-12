# StreamTargetProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | &lt;strong&gt;chunkSize&lt;/strong&gt; defines the duration of the time-based audio and video chunks that Wowza Streaming Cloud delivers to the target. &lt;strong&gt;playSSL&lt;/strong&gt; determines whether Wowza Streaming Cloud sends the stream from the target to the player by using SSL (HTTPS). &lt;strong&gt;relativePlaylists&lt;/strong&gt; allows the viewer to watch the stream over HTTP and HTTPS, whichever protocol their browser calls. &lt;strong&gt;sendSSL&lt;/strong&gt; determines whether Wowza Streaming Cloud sends the stream from the transcoder to the target by using SSL (HTTPS). | [optional] 
**section** | **str** | The section of the stream target configuration table that contains the property. For &lt;strong&gt;chunkSize&lt;/strong&gt; and &lt;strong&gt;sendSSL&lt;/strong&gt;, use &lt;strong&gt;hls&lt;/strong&gt;. For &lt;strong&gt;playSSL&lt;/strong&gt; and &lt;strong&gt;relativePlaylists&lt;/strong&gt;, use &lt;strong&gt;playlist&lt;/strong&gt;. | [optional] 
**stream_target_id** | **str** | The unique alphanumeric string that identifies the stream target. | [optional] 
**value** | **str** | For &lt;strong&gt;chunkSize&lt;/strong&gt; use &lt;strong&gt;2&lt;/strong&gt;, &lt;strong&gt;4&lt;/strong&gt;, &lt;strong&gt;6&lt;/strong&gt;, &lt;strong&gt;8&lt;/strong&gt;, or &lt;strong&gt;10&lt;/strong&gt;. For &lt;strong&gt;playSSL&lt;/strong&gt;, &lt;strong&gt;relativePlaylists&lt;/strong&gt;, and &lt;strong&gt;sendSSL&lt;/strong&gt; use &lt;strong&gt;true&lt;/strong&gt; or &lt;strong&gt;false&lt;/strong&gt;. | [optional] 

## Example

```python
from openapi_client.models.stream_target_property import StreamTargetProperty

# TODO update the JSON string below
json = "{}"
# create an instance of StreamTargetProperty from a JSON string
stream_target_property_instance = StreamTargetProperty.from_json(json)
# print the JSON string representation of the object
print(StreamTargetProperty.to_json())

# convert the object into a dict
stream_target_property_dict = stream_target_property_instance.to_dict()
# create an instance of StreamTargetProperty from a dict
stream_target_property_from_dict = StreamTargetProperty.from_dict(stream_target_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


