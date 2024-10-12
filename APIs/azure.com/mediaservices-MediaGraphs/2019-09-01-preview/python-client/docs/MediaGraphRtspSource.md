# MediaGraphRtspSource

RTSP source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**MediaGraphUserCredentials**](MediaGraphUserCredentials.md) |  | [optional] 
**rtsp_url** | **str** | RTSP URL | 

## Example

```python
from openapi_client.models.media_graph_rtsp_source import MediaGraphRtspSource

# TODO update the JSON string below
json = "{}"
# create an instance of MediaGraphRtspSource from a JSON string
media_graph_rtsp_source_instance = MediaGraphRtspSource.from_json(json)
# print the JSON string representation of the object
print(MediaGraphRtspSource.to_json())

# convert the object into a dict
media_graph_rtsp_source_dict = media_graph_rtsp_source_instance.to_dict()
# create an instance of MediaGraphRtspSource from a dict
media_graph_rtsp_source_from_dict = MediaGraphRtspSource.from_dict(media_graph_rtsp_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


