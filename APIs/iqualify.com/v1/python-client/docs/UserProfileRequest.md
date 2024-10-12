# UserProfileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_profile_request import UserProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileRequest from a JSON string
user_profile_request_instance = UserProfileRequest.from_json(json)
# print the JSON string representation of the object
print(UserProfileRequest.to_json())

# convert the object into a dict
user_profile_request_dict = user_profile_request_instance.to_dict()
# create an instance of UserProfileRequest from a dict
user_profile_request_from_dict = UserProfileRequest.from_dict(user_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


