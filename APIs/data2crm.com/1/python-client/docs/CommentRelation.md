# CommentRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**CommentEntityRelation**](CommentEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.comment_relation import CommentRelation

# TODO update the JSON string below
json = "{}"
# create an instance of CommentRelation from a JSON string
comment_relation_instance = CommentRelation.from_json(json)
# print the JSON string representation of the object
print(CommentRelation.to_json())

# convert the object into a dict
comment_relation_dict = comment_relation_instance.to_dict()
# create an instance of CommentRelation from a dict
comment_relation_from_dict = CommentRelation.from_dict(comment_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


