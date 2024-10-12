# VideoCategorySnippet

Basic details about a video category, such as its localized title.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignable** | **bool** |  | [optional] 
**channel_id** | **str** | The YouTube channel that created the video category. | [optional] [default to 'UCBR8-60-B28hp2BmDPdntcQ']
**title** | **str** | The video category&#39;s title. | [optional] 

## Example

```python
from openapi_client.models.video_category_snippet import VideoCategorySnippet

# TODO update the JSON string below
json = "{}"
# create an instance of VideoCategorySnippet from a JSON string
video_category_snippet_instance = VideoCategorySnippet.from_json(json)
# print the JSON string representation of the object
print(VideoCategorySnippet.to_json())

# convert the object into a dict
video_category_snippet_dict = video_category_snippet_instance.to_dict()
# create an instance of VideoCategorySnippet from a dict
video_category_snippet_from_dict = VideoCategorySnippet.from_dict(video_category_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


