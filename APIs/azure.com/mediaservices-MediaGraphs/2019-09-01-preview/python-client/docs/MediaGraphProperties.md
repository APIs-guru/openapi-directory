# MediaGraphProperties

Class for Media Graph properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | Date the Media Graph was created | [optional] [readonly] 
**description** | **str** | Media Graph  description | [optional] 
**last_modified** | **datetime** | Date the Media Graph was last modified | [optional] [readonly] 
**sinks** | [**List[MediaGraphSink]**](MediaGraphSink.md) | Media Graph sinks | 
**sources** | [**List[MediaGraphSource]**](MediaGraphSource.md) | Media Graph sources | 
**state** | **str** | Media Graph state | [optional] [readonly] 

## Example

```python
from openapi_client.models.media_graph_properties import MediaGraphProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MediaGraphProperties from a JSON string
media_graph_properties_instance = MediaGraphProperties.from_json(json)
# print the JSON string representation of the object
print(MediaGraphProperties.to_json())

# convert the object into a dict
media_graph_properties_dict = media_graph_properties_instance.to_dict()
# create an instance of MediaGraphProperties from a dict
media_graph_properties_from_dict = MediaGraphProperties.from_dict(media_graph_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


