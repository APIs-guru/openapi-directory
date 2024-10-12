# UserEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**List[Address]**](Address.md) | Address | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**department** | **str** | Department | [optional] 
**description** | **str** | Description | [optional] 
**email** | [**List[Email]**](Email.md) | Email | [optional] 
**first_name** | **str** | First Name | [optional] 
**id** | **str** | User Identifier | [optional] 
**is_admin** | **bool** | Is admin | [optional] 
**is_associable** | **bool** | Is associable | [optional] 
**last_name** | **str** | Last Name | [optional] 
**messenger** | [**List[Messenger]**](Messenger.md) | Messenger | [optional] 
**middle_name** | **str** | Middle Name | [optional] 
**name_suffix** | **str** | Name Suffix | [optional] 
**phone** | [**List[Phone]**](Phone.md) | Phone | [optional] 
**position** | **str** | Position | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**salutation** | **str** | Salutation | [optional] 
**status** | **str** | Status | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 
**username** | **str** | Username | [optional] 
**website** | [**List[Website]**](Website.md) | Website | [optional] 

## Example

```python
from openapi_client.models.user_entity import UserEntity

# TODO update the JSON string below
json = "{}"
# create an instance of UserEntity from a JSON string
user_entity_instance = UserEntity.from_json(json)
# print the JSON string representation of the object
print(UserEntity.to_json())

# convert the object into a dict
user_entity_dict = user_entity_instance.to_dict()
# create an instance of UserEntity from a dict
user_entity_from_dict = UserEntity.from_dict(user_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


