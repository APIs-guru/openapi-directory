# MuxStream

Multiplexing settings for output stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | **str** | The container format. The default is &#x60;mp4&#x60; Supported container formats: - &#x60;ts&#x60; - &#x60;fmp4&#x60;- the corresponding file extension is &#x60;.m4s&#x60; - &#x60;mp4&#x60; - &#x60;vtt&#x60; See also: [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats) | [optional] 
**elementary_streams** | **List[str]** | List of ElementaryStream.key values multiplexed in this stream. | [optional] 
**encryption_id** | **str** | Identifier of the encryption configuration to use. If omitted, output will be unencrypted. | [optional] 
**file_name** | **str** | The name of the generated file. The default is MuxStream.key with the extension suffix corresponding to the MuxStream.container. Individual segments also have an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as &#x60;mux_stream0000000123.ts&#x60;. | [optional] 
**fmp4** | [**Fmp4Config**](Fmp4Config.md) |  | [optional] 
**key** | **str** | A unique key for this multiplexed stream. | [optional] 
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


