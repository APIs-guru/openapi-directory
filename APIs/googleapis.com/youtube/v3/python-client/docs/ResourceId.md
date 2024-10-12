# ResourceId

A resource id is a generic reference that points to another YouTube resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel. | [optional] 
**kind** | **str** | The type of the API resource. | [optional] 
**playlist_id** | **str** | The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist. | [optional] 
**video_id** | **str** | The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video. | [optional] 

## Example

```python
from openapi_client.models.resource_id import ResourceId

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceId from a JSON string
resource_id_instance = ResourceId.from_json(json)
# print the JSON string representation of the object
print(ResourceId.to_json())

# convert the object into a dict
resource_id_dict = resource_id_instance.to_dict()
# create an instance of ResourceId from a dict
resource_id_from_dict = ResourceId.from_dict(resource_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


