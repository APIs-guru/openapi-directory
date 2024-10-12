# VideoObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | 
**input** | **object** |  | [optional] 
**outputs** | **object** |  | [optional] 
**state** | **str** |  | 
**updated_at** | **str** |  | 
**userdata** | **object** |  | 
**video_id** | **str** |  | 

## Example

```python
from openapi_client.models.video_object import VideoObject

# TODO update the JSON string below
json = "{}"
# create an instance of VideoObject from a JSON string
video_object_instance = VideoObject.from_json(json)
# print the JSON string representation of the object
print(VideoObject.to_json())

# convert the object into a dict
video_object_dict = video_object_instance.to_dict()
# create an instance of VideoObject from a dict
video_object_from_dict = VideoObject.from_dict(video_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


