# UserObjectRequest

Represents chat user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ban_expires** | **datetime** | Expiration date of the ban | [optional] 
**banned** | **bool** | Whether a user is banned or not | [optional] 
**id** | **str** | Unique user identifier | 
**invisible** | **bool** |  | [optional] 
**language** | **str** | Preferred language of a user | [optional] 
**push_notifications** | [**PushNotificationSettingsRequest**](PushNotificationSettingsRequest.md) |  | [optional] 
**revoke_tokens_issued_before** | **datetime** | Revocation date for tokens | [optional] 
**role** | **str** | Determines the set of user permissions | [optional] 
**teams** | **List[str]** | List of teams user is a part of | [optional] 

## Example

```python
from openapi_client.models.user_object_request import UserObjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserObjectRequest from a JSON string
user_object_request_instance = UserObjectRequest.from_json(json)
# print the JSON string representation of the object
print(UserObjectRequest.to_json())

# convert the object into a dict
user_object_request_dict = user_object_request_instance.to_dict()
# create an instance of UserObjectRequest from a dict
user_object_request_from_dict = UserObjectRequest.from_dict(user_object_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


