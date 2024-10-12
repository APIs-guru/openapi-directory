# UserAccessPolicy

Get Data Plane read only token request definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_resource_path** | **str** | The resource path to get access relative to factory. Currently only empty string is supported which corresponds to the factory resource. | [optional] 
**expire_time** | **str** | Expiration time for the token. Maximum duration for the token is eight hours and by default the token will expire in eight hours. | [optional] 
**permissions** | **str** | The string with permissions for Data Plane access. Currently only &#39;r&#39; is supported which grants read only access. | [optional] 
**profile_name** | **str** | The name of the profile. Currently only the default is supported. The default value is DefaultProfile. | [optional] 
**start_time** | **str** | Start time for the token. If not specified the current time will be used. | [optional] 

## Example

```python
from openapi_client.models.user_access_policy import UserAccessPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of UserAccessPolicy from a JSON string
user_access_policy_instance = UserAccessPolicy.from_json(json)
# print the JSON string representation of the object
print(UserAccessPolicy.to_json())

# convert the object into a dict
user_access_policy_dict = user_access_policy_instance.to_dict()
# create an instance of UserAccessPolicy from a dict
user_access_policy_from_dict = UserAccessPolicy.from_dict(user_access_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


