# VideoFormatsListResponse

Video Format List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#videoFormatsListResponse\&quot;. | [optional] 
**video_formats** | [**List[VideoFormat]**](VideoFormat.md) | Video format collection. | [optional] 

## Example

```python
from openapi_client.models.video_formats_list_response import VideoFormatsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VideoFormatsListResponse from a JSON string
video_formats_list_response_instance = VideoFormatsListResponse.from_json(json)
# print the JSON string representation of the object
print(VideoFormatsListResponse.to_json())

# convert the object into a dict
video_formats_list_response_dict = video_formats_list_response_instance.to_dict()
# create an instance of VideoFormatsListResponse from a dict
video_formats_list_response_from_dict = VideoFormatsListResponse.from_dict(video_formats_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


