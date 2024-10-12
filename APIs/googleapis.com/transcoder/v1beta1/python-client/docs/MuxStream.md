# MuxStream

Multiplexing settings for output stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | **str** | The container format. The default is &#x60;\&quot;mp4\&quot;&#x60; Supported container formats: - &#39;ts&#39; - &#39;fmp4&#39;- the corresponding file extension is &#x60;\&quot;.m4s\&quot;&#x60; - &#39;mp4&#39; - &#39;vtt&#39; | [optional] 
**elementary_streams** | **List[str]** | List of &#x60;ElementaryStream.key&#x60;s multiplexed in this stream. | [optional] 
**encryption** | [**Encryption**](Encryption.md) |  | [optional] 
**file_name** | **str** | The name of the generated file. The default is &#x60;MuxStream.key&#x60; with the extension suffix corresponding to the &#x60;MuxStream.container&#x60;. Individual segments also have an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as &#x60;\&quot;mux_stream0000000123.ts\&quot;&#x60;. | [optional] 
**key** | **str** | A unique key for this multiplexed stream. HLS media manifests will be named &#x60;MuxStream.key&#x60; with the &#x60;\&quot;.m3u8\&quot;&#x60; extension suffix. | [optional] 
**segment_settings** | [**SegmentSettings**](SegmentSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.mux_stream import MuxStream

# TODO update the JSON string below
json = "{}"
# create an instance of MuxStream from a JSON string
mux_stream_instance = MuxStream.from_json(json)
# print the JSON string representation of the object
print(MuxStream.to_json())

# convert the object into a dict
mux_stream_dict = mux_stream_instance.to_dict()
# create an instance of MuxStream from a dict
mux_stream_from_dict = MuxStream.from_dict(mux_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


