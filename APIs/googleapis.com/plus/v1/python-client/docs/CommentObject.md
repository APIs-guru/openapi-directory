# CommentObject

The object of this comment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The HTML-formatted content, suitable for display. | [optional] 
**object_type** | **str** | The object type of this comment. Possible values are:   - \&quot;comment\&quot; - A comment in reply to an activity. | [optional] [default to 'comment']
**original_content** | **str** | The content (text) as provided by the author, stored without any HTML formatting. When creating or updating a comment, this value must be supplied as plain text in the request. | [optional] 

## Example

```python
from openapi_client.models.comment_object import CommentObject

# TODO update the JSON string below
json = "{}"
# create an instance of CommentObject from a JSON string
comment_object_instance = CommentObject.from_json(json)
# print the JSON string representation of the object
print(CommentObject.to_json())

# convert the object into a dict
comment_object_dict = comment_object_instance.to_dict()
# create an instance of CommentObject from a dict
comment_object_from_dict = CommentObject.from_dict(comment_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


