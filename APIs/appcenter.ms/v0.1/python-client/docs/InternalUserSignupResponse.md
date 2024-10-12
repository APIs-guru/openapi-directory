# InternalUserSignupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full name of the user. Might for example be first and last name | 
**email** | **str** | The email address of the user | 
**external_provider** | **str** | The name of the external auth provider | [optional] 
**external_user_id** | **str** | The user ID given by the external provider | [optional] 
**id** | **str** | The unique id (UUID) of the user | 
**name** | **str** | The unique name that is used to identify the user. | 
**status** | **str** | The current status of the user record after signup | [optional] 

## Example

```python
from openapi_client.models.internal_user_signup_response import InternalUserSignupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InternalUserSignupResponse from a JSON string
internal_user_signup_response_instance = InternalUserSignupResponse.from_json(json)
# print the JSON string representation of the object
print(InternalUserSignupResponse.to_json())

# convert the object into a dict
internal_user_signup_response_dict = internal_user_signup_response_instance.to_dict()
# create an instance of InternalUserSignupResponse from a dict
internal_user_signup_response_from_dict = InternalUserSignupResponse.from_dict(internal_user_signup_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


