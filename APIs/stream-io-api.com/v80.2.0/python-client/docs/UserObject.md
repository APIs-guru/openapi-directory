# UserObject

Represents chat user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ban_expires** | **datetime** | Expiration date of the ban | [optional] 
**banned** | **bool** | Whether a user is banned or not | 
**created_at** | **datetime** | Date/time of creation | [optional] [readonly] 
**deactivated_at** | **datetime** | Date of deactivation | [optional] [readonly] 
**deleted_at** | **datetime** | Date/time of deletion | [optional] [readonly] 
**id** | **str** | Unique user identifier | 
**invisible** | **bool** |  | [optional] 
**language** | **str** | Preferred language of a user | [optional] 
**last_active** | **datetime** | Date of last activity | [optional] [readonly] 
**online** | **bool** | Whether a user online or not | [readonly] 
**push_notifications** | [**PushNotificationSettings**](PushNotificationSettings.md) |  | [optional] 
**revoke_tokens_issued_before** | **datetime** | Revocation date for tokens | [optional] 
**role** | **str** | Determines the set of user permissions | 
**teams** | **List[str]** | List of teams user is a part of | [optional] 
**updated_at** | **datetime** | Date/time of the last update | [optional] [readonly] 

## Example

```python
from openapi_client.models.user_object import UserObject

# TODO update the JSON string below
json = "{}"
# create an instance of UserObject from a JSON string
user_object_instance = UserObject.from_json(json)
# print the JSON string representation of the object
print(UserObject.to_json())

# convert the object into a dict
user_object_dict = user_object_instance.to_dict()
# create an instance of UserObject from a dict
user_object_from_dict = UserObject.from_dict(user_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


