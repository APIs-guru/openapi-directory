# MediaObjectGet

The MediaObject resource is a collection of media objects that can be attached to alerts that are dispatched via an email transport.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_url** | **str** | Where the media file can be accessed. | [optional] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] [readonly] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**file_size** | **int** | The size of the media file. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**keywords** | **str** | A string of keywords that can be used to search for a resource. Max 100 characters. | [optional] 
**mime_type** | **str** | The mime type of the media file. | [optional] 
**original_name** | **str** | The original name of the media file. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 

## Example

```python
from openapi_client.models.media_object_get import MediaObjectGet

# TODO update the JSON string below
json = "{}"
# create an instance of MediaObjectGet from a JSON string
media_object_get_instance = MediaObjectGet.from_json(json)
# print the JSON string representation of the object
print(MediaObjectGet.to_json())

# convert the object into a dict
media_object_get_dict = media_object_get_instance.to_dict()
# create an instance of MediaObjectGet from a dict
media_object_get_from_dict = MediaObjectGet.from_dict(media_object_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


