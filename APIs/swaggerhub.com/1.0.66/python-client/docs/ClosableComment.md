# ClosableComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Markdown contents of the comment | 
**created** | **datetime** | The UTC date and time when the comment was added | 
**id** | **str** | The unique ID of the comment | 
**modified** | **datetime** | The UTC date and time the when the comment was last edited | [optional] 
**user** | [**User**](User.md) |  | 
**position** | **int** | The line number (zero-based) the comment is associated with. For example, if the comment is on line 7 in the editor, &#x60;position&#x60;&#x3D;6.  | [optional] 
**replies** | [**List[Comment]**](Comment.md) | A list of replies to this comment | [optional] 
**status** | **str** | Comment status | [optional] 

## Example

```python
from openapi_client.models.closable_comment import ClosableComment

# TODO update the JSON string below
json = "{}"
# create an instance of ClosableComment from a JSON string
closable_comment_instance = ClosableComment.from_json(json)
# print the JSON string representation of the object
print(ClosableComment.to_json())

# convert the object into a dict
closable_comment_dict = closable_comment_instance.to_dict()
# create an instance of ClosableComment from a dict
closable_comment_from_dict = ClosableComment.from_dict(closable_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


