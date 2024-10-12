# CommentContext

The context of the file which is being commented on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The MIME type of the context snippet. | [optional] 
**value** | **str** | Data representation of the segment of the file being commented on. In the case of a text file for example, this would be the actual text that the comment is about. | [optional] 

## Example

```python
from openapi_client.models.comment_context import CommentContext

# TODO update the JSON string below
json = "{}"
# create an instance of CommentContext from a JSON string
comment_context_instance = CommentContext.from_json(json)
# print the JSON string representation of the object
print(CommentContext.to_json())

# convert the object into a dict
comment_context_dict = comment_context_instance.to_dict()
# create an instance of CommentContext from a dict
comment_context_from_dict = CommentContext.from_dict(comment_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


