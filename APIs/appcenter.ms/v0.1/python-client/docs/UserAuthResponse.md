# UserAuthResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full name of the user. Might for example be first and last name | 
**email** | **str** | The email address of the user | 
**external_provider** | **str** | The name of the external auth provider | [optional] 
**external_user_id** | **str** | The user ID given by the external provider | [optional] 
**id** | **str** | The unique id (UUID) of the user | 
**name** | **str** | The unique name that is used to identify the user | 
**origin** | **str** | The creation origin of this user | 

## Example

```python
from openapi_client.models.user_auth_response import UserAuthResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserAuthResponse from a JSON string
user_auth_response_instance = UserAuthResponse.from_json(json)
# print the JSON string representation of the object
print(UserAuthResponse.to_json())

# convert the object into a dict
user_auth_response_dict = user_auth_response_instance.to_dict()
# create an instance of UserAuthResponse from a dict
user_auth_response_from_dict = UserAuthResponse.from_dict(user_auth_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


