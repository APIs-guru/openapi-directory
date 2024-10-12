# VideoFormat

Contains information about supported video formats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_type** | **str** | File type of the video format. | [optional] 
**id** | **int** | ID of the video format. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#videoFormat\&quot;. | [optional] 
**resolution** | [**Size**](Size.md) |  | [optional] 
**target_bit_rate** | **int** | The target bit rate of this video format. | [optional] 

## Example

```python
from openapi_client.models.video_format import VideoFormat

# TODO update the JSON string below
json = "{}"
# create an instance of VideoFormat from a JSON string
video_format_instance = VideoFormat.from_json(json)
# print the JSON string representation of the object
print(VideoFormat.to_json())

# convert the object into a dict
video_format_dict = video_format_instance.to_dict()
# create an instance of VideoFormat from a dict
video_format_from_dict = VideoFormat.from_dict(video_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


