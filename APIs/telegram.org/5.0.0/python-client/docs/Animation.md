# Animation

This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** | Duration of the video in seconds as defined by sender | 
**file_id** | **str** | Identifier for this file, which can be used to download or reuse the file | 
**file_name** | **str** | *Optional*. Original animation filename as defined by sender | [optional] 
**file_size** | **int** | *Optional*. File size | [optional] 
**file_unique_id** | **str** | Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file. | 
**height** | **int** | Video height as defined by sender | 
**mime_type** | **str** | *Optional*. MIME type of the file as defined by sender | [optional] 
**thumb** | [**PhotoSize**](PhotoSize.md) |  | [optional] 
**width** | **int** | Video width as defined by sender | 

## Example

```python
from openapi_client.models.animation import Animation

# TODO update the JSON string below
json = "{}"
# create an instance of Animation from a JSON string
animation_instance = Animation.from_json(json)
# print the JSON string representation of the object
print(Animation.to_json())

# convert the object into a dict
animation_dict = animation_instance.to_dict()
# create an instance of Animation from a dict
animation_from_dict = Animation.from_dict(animation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


