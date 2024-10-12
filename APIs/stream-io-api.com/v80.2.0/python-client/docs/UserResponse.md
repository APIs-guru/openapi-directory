# UserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ban_expires** | **datetime** |  | [optional] 
**banned** | **bool** |  | 
**created_at** | **datetime** |  | [optional] [readonly] 
**deactivated_at** | **datetime** |  | [optional] [readonly] 
**deleted_at** | **datetime** |  | [optional] [readonly] 
**id** | **str** |  | 
**invisible** | **bool** |  | [optional] 
**language** | **str** |  | [optional] 
**last_active** | **datetime** |  | [optional] [readonly] 
**online** | **bool** |  | [readonly] 
**push_notifications** | [**PushNotificationSettings**](PushNotificationSettings.md) |  | [optional] 
**revoke_tokens_issued_before** | **datetime** |  | [optional] 
**role** | **str** |  | 
**shadow_banned** | **bool** | Whether user is shadow banned or not | 
**teams** | **List[str]** |  | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.user_response import UserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserResponse from a JSON string
user_response_instance = UserResponse.from_json(json)
# print the JSON string representation of the object
print(UserResponse.to_json())

# convert the object into a dict
user_response_dict = user_response_instance.to_dict()
# create an instance of UserResponse from a dict
user_response_from_dict = UserResponse.from_dict(user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


