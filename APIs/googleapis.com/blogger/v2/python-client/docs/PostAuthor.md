# PostAuthor

The author of this Post.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name. | [optional] 
**id** | **str** | The identifier of the creator. | [optional] 
**image** | [**CommentAuthorImage**](CommentAuthorImage.md) |  | [optional] 
**url** | **str** | The URL of the creator&#39;s Profile page. | [optional] 

## Example

```python
from openapi_client.models.post_author import PostAuthor

# TODO update the JSON string below
json = "{}"
# create an instance of PostAuthor from a JSON string
post_author_instance = PostAuthor.from_json(json)
# print the JSON string representation of the object
print(PostAuthor.to_json())

# convert the object into a dict
post_author_dict = post_author_instance.to_dict()
# create an instance of PostAuthor from a dict
post_author_from_dict = PostAuthor.from_dict(post_author_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


