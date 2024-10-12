# PostEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**id** | **str** | Post Identifier | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.post_entity import PostEntity

# TODO update the JSON string below
json = "{}"
# create an instance of PostEntity from a JSON string
post_entity_instance = PostEntity.from_json(json)
# print the JSON string representation of the object
print(PostEntity.to_json())

# convert the object into a dict
post_entity_dict = post_entity_instance.to_dict()
# create an instance of PostEntity from a dict
post_entity_from_dict = PostEntity.from_dict(post_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


