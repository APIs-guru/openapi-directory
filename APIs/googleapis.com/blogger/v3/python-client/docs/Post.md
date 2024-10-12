# Post


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**PostAuthor**](PostAuthor.md) |  | [optional] 
**blog** | [**PostBlog**](PostBlog.md) |  | [optional] 
**content** | **str** | The content of the Post. May contain HTML markup. | [optional] 
**custom_meta_data** | **str** | The JSON meta-data for the Post. | [optional] 
**etag** | **str** | Etag of the resource. | [optional] 
**id** | **str** | The identifier of this Post. | [optional] 
**images** | [**List[PostImagesInner]**](PostImagesInner.md) | Display image for the Post. | [optional] 
**kind** | **str** | The kind of this entity. Always blogger#post. | [optional] 
**labels** | **List[str]** | The list of labels this Post was tagged with. | [optional] 
**location** | [**PostLocation**](PostLocation.md) |  | [optional] 
**published** | **str** | RFC 3339 date-time when this Post was published. | [optional] 
**reader_comments** | **str** | Comment control and display setting for readers of this post. | [optional] 
**replies** | [**PostReplies**](PostReplies.md) |  | [optional] 
**self_link** | **str** | The API REST URL to fetch this resource from. | [optional] 
**status** | **str** | Status of the post. Only set for admin-level requests. | [optional] 
**title** | **str** | The title of the Post. | [optional] 
**title_link** | **str** | The title link URL, similar to atom&#39;s related link. | [optional] 
**trashed** | **str** | RFC 3339 date-time when this Post was last trashed. | [optional] 
**updated** | **str** | RFC 3339 date-time when this Post was last updated. | [optional] 
**url** | **str** | The URL where this Post is displayed. | [optional] 

## Example

```python
from openapi_client.models.post import Post

# TODO update the JSON string below
json = "{}"
# create an instance of Post from a JSON string
post_instance = Post.from_json(json)
# print the JSON string representation of the object
print(Post.to_json())

# convert the object into a dict
post_dict = post_instance.to_dict()
# create an instance of Post from a dict
post_from_dict = Post.from_dict(post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


