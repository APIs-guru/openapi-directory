# VideoViewResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**VideoView**](VideoView.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 

## Example

```python
from openapi_client.models.video_view_response import VideoViewResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VideoViewResponse from a JSON string
video_view_response_instance = VideoViewResponse.from_json(json)
# print the JSON string representation of the object
print(VideoViewResponse.to_json())

# convert the object into a dict
video_view_response_dict = video_view_response_instance.to_dict()
# create an instance of VideoViewResponse from a dict
video_view_response_from_dict = VideoViewResponse.from_dict(video_view_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


