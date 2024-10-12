# MediaGraphCollection

A collection of MediaGraph items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** | A link to the next page of the collection (when the collection contains too many results to return in one response). | [optional] 
**value** | [**List[MediaGraph]**](MediaGraph.md) | A collection of MediaGraph items. | [optional] 

## Example

```python
from openapi_client.models.media_graph_collection import MediaGraphCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MediaGraphCollection from a JSON string
media_graph_collection_instance = MediaGraphCollection.from_json(json)
# print the JSON string representation of the object
print(MediaGraphCollection.to_json())

# convert the object into a dict
media_graph_collection_dict = media_graph_collection_instance.to_dict()
# create an instance of MediaGraphCollection from a dict
media_graph_collection_from_dict = MediaGraphCollection.from_dict(media_graph_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


