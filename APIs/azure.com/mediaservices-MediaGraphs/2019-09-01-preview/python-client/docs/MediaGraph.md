# MediaGraph

The Media Graph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MediaGraphProperties**](MediaGraphProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource ID for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.media_graph import MediaGraph

# TODO update the JSON string below
json = "{}"
# create an instance of MediaGraph from a JSON string
media_graph_instance = MediaGraph.from_json(json)
# print the JSON string representation of the object
print(MediaGraph.to_json())

# convert the object into a dict
media_graph_dict = media_graph_instance.to_dict()
# create an instance of MediaGraph from a dict
media_graph_from_dict = MediaGraph.from_dict(media_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


