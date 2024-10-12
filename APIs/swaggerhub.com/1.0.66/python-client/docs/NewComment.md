# NewComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | 
**position** | **int** |  | 
**replies** | [**List[NewReply]**](NewReply.md) |  | [optional] 

## Example

```python
from openapi_client.models.new_comment import NewComment

# TODO update the JSON string below
json = "{}"
# create an instance of NewComment from a JSON string
new_comment_instance = NewComment.from_json(json)
# print the JSON string representation of the object
print(NewComment.to_json())

# convert the object into a dict
new_comment_dict = new_comment_instance.to_dict()
# create an instance of NewComment from a dict
new_comment_from_dict = NewComment.from_dict(new_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


