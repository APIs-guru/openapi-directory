# VideoArticle

Representation of an Article with video

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloudinary_video_url** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**path** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**type_of** | **str** |  | [optional] 
**user** | [**VideoArticleUser**](VideoArticleUser.md) |  | [optional] 
**user_id** | **int** |  | [optional] 
**video_duration_in_minutes** | **str** |  | [optional] 
**video_source_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.video_article import VideoArticle

# TODO update the JSON string below
json = "{}"
# create an instance of VideoArticle from a JSON string
video_article_instance = VideoArticle.from_json(json)
# print the JSON string representation of the object
print(VideoArticle.to_json())

# convert the object into a dict
video_article_dict = video_article_instance.to_dict()
# create an instance of VideoArticle from a dict
video_article_from_dict = VideoArticle.from_dict(video_article_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


