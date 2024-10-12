# MediaGraphSink

Media Sink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 
**inputs** | **List[str]** | Sink inputs | 
**name** | **str** | Sink name | 

## Example

```python
from openapi_client.models.media_graph_sink import MediaGraphSink

# TODO update the JSON string below
json = "{}"
# create an instance of MediaGraphSink from a JSON string
media_graph_sink_instance = MediaGraphSink.from_json(json)
# print the JSON string representation of the object
print(MediaGraphSink.to_json())

# convert the object into a dict
media_graph_sink_dict = media_graph_sink_instance.to_dict()
# create an instance of MediaGraphSink from a dict
media_graph_sink_from_dict = MediaGraphSink.from_dict(media_graph_sink_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


