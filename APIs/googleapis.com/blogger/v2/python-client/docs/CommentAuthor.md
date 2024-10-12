# CommentAuthor

The author of this Comment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name. | [optional] 
**id** | **str** | The identifier of the creator. | [optional] 
**image** | [**CommentAuthorImage**](CommentAuthorImage.md) |  | [optional] 
**url** | **str** | The URL of the creator&#39;s Profile page. | [optional] 

## Example

```python
from openapi_client.models.comment_author import CommentAuthor

# TODO update the JSON string below
json = "{}"
# create an instance of CommentAuthor from a JSON string
comment_author_instance = CommentAuthor.from_json(json)
# print the JSON string representation of the object
print(CommentAuthor.to_json())

# convert the object into a dict
comment_author_dict = comment_author_instance.to_dict()
# create an instance of CommentAuthor from a dict
comment_author_from_dict = CommentAuthor.from_dict(comment_author_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


