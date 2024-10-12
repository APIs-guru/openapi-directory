# MediaGraphSource

Media source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 
**name** | **str** | Source name | 

## Example

```python
from openapi_client.models.media_graph_source import MediaGraphSource

# TODO update the JSON string below
json = "{}"
# create an instance of MediaGraphSource from a JSON string
media_graph_source_instance = MediaGraphSource.from_json(json)
# print the JSON string representation of the object
print(MediaGraphSource.to_json())

# convert the object into a dict
media_graph_source_dict = media_graph_source_instance.to_dict()
# create an instance of MediaGraphSource from a dict
media_graph_source_from_dict = MediaGraphSource.from_dict(media_graph_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


