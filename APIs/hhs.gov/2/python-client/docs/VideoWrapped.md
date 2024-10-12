# VideoWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[Video]**](Video.md) |  | [optional] 

## Example

```python
from openapi_client.models.video_wrapped import VideoWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of VideoWrapped from a JSON string
video_wrapped_instance = VideoWrapped.from_json(json)
# print the JSON string representation of the object
print(VideoWrapped.to_json())

# convert the object into a dict
video_wrapped_dict = video_wrapped_instance.to_dict()
# create an instance of VideoWrapped from a dict
video_wrapped_from_dict = VideoWrapped.from_dict(video_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


