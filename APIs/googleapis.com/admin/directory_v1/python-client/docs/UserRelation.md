# UserRelation

JSON template for a relation entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_type** | **str** | Custom Type. | [optional] 
**type** | **str** | The relation of the user. Some of the possible values are mother father sister brother manager assistant partner. | [optional] 
**value** | **str** | The name of the relation. | [optional] 

## Example

```python
from openapi_client.models.user_relation import UserRelation

# TODO update the JSON string below
json = "{}"
# create an instance of UserRelation from a JSON string
user_relation_instance = UserRelation.from_json(json)
# print the JSON string representation of the object
print(UserRelation.to_json())

# convert the object into a dict
user_relation_dict = user_relation_instance.to_dict()
# create an instance of UserRelation from a dict
user_relation_from_dict = UserRelation.from_dict(user_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


