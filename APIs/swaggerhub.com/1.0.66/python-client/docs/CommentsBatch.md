# CommentsBatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_comment** | [**List[NewComment]**](NewComment.md) |  | [optional] 
**add_reply** | **Dict[str, List[NewReply]]** |  | [optional] 
**delete_comment** | **List[str]** |  | [optional] 
**delete_reply** | **Dict[str, List[str]]** |  | [optional] 
**update_comment** | [**Dict[str, ClosableCommentPatch]**](ClosableCommentPatch.md) |  | [optional] 
**update_reply** | **Dict[str, Dict[str, CommentPatch]]** |  | [optional] 
**update_status** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.comments_batch import CommentsBatch

# TODO update the JSON string below
json = "{}"
# create an instance of CommentsBatch from a JSON string
comments_batch_instance = CommentsBatch.from_json(json)
# print the JSON string representation of the object
print(CommentsBatch.to_json())

# convert the object into a dict
comments_batch_dict = comments_batch_instance.to_dict()
# create an instance of CommentsBatch from a dict
comments_batch_from_dict = CommentsBatch.from_dict(comments_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


