# Comment

Case comments are the main way Google Support communicates with a user who has opened a case. When a user responds to Google Support, the user's responses also appear as comments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The full comment body. Maximum of 12800 characters. This can contain rich text syntax. | [optional] 
**create_time** | **str** | Output only. The time when this comment was created. | [optional] [readonly] 
**creator** | [**Actor**](Actor.md) |  | [optional] 
**name** | **str** | Output only. The resource name for the comment. | [optional] [readonly] 
**plain_text_body** | **str** | Output only. DEPRECATED. An automatically generated plain text version of body with all rich text syntax stripped. | [optional] [readonly] 

## Example

```python
from openapi_client.models.comment import Comment

# TODO update the JSON string below
json = "{}"
# create an instance of Comment from a JSON string
comment_instance = Comment.from_json(json)
# print the JSON string representation of the object
print(Comment.to_json())

# convert the object into a dict
comment_dict = comment_instance.to_dict()
# create an instance of Comment from a dict
comment_from_dict = Comment.from_dict(comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


