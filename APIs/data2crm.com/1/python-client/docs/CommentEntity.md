# CommentEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**id** | **str** | Comment Identifier | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.comment_entity import CommentEntity

# TODO update the JSON string below
json = "{}"
# create an instance of CommentEntity from a JSON string
comment_entity_instance = CommentEntity.from_json(json)
# print the JSON string representation of the object
print(CommentEntity.to_json())

# convert the object into a dict
comment_entity_dict = comment_entity_instance.to_dict()
# create an instance of CommentEntity from a dict
comment_entity_from_dict = CommentEntity.from_dict(comment_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


