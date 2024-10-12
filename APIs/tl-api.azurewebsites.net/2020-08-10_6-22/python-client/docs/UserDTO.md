# UserDTO

The UserDTO Class. Contains relevant fields of User DTO by masking actual User entity's fields in application.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Account number of the user.It can be any stakeholder of the application.even can be a gym.              | [optional] 
**external_entity_number** | **str** | Entity number that make a relationship with BOX API DB.              | [optional] 
**guardian** | **int** | Gaurdian of the this user if he/she is under 18 years old.              | [optional] 
**gym_number** | **str** | If this user is a gym, then the gym number.              | [optional] 
**introduce_by** | **int** | If Someone introduced this user to the system, then that user&#39;s UserId.              | [optional] 
**name** | **str** | Name of the user.              | [optional] 
**number** | **str** | Unique number maintain by application to idenify user.              | [optional] 
**type_id** | **int** | Type of the user.              | [optional] 
**user_id** | **int** | Indentity number(primary key) for user object. Generated in DB table when inserting a record.              | [optional] 

## Example

```python
from openapi_client.models.user_dto import UserDTO

# TODO update the JSON string below
json = "{}"
# create an instance of UserDTO from a JSON string
user_dto_instance = UserDTO.from_json(json)
# print the JSON string representation of the object
print(UserDTO.to_json())

# convert the object into a dict
user_dto_dict = user_dto_instance.to_dict()
# create an instance of UserDTO from a dict
user_dto_from_dict = UserDTO.from_dict(user_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


