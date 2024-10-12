# UserLiteProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full name of the user. Might for example be first and last name | 
**email** | **str** | The email address of the user | 
**id** | **str** | The unique id (UUID) of the user | 

## Example

```python
from openapi_client.models.user_lite_profile_response import UserLiteProfileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserLiteProfileResponse from a JSON string
user_lite_profile_response_instance = UserLiteProfileResponse.from_json(json)
# print the JSON string representation of the object
print(UserLiteProfileResponse.to_json())

# convert the object into a dict
user_lite_profile_response_dict = user_lite_profile_response_instance.to_dict()
# create an instance of UserLiteProfileResponse from a dict
user_lite_profile_response_from_dict = UserLiteProfileResponse.from_dict(user_lite_profile_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


