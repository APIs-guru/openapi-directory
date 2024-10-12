# UserProfileResponseManagementAllOfIdentityProviders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**origin** | **str** | Whether the identity provider originated in HockeyApp or App Center | [optional] 
**provider_name** | **str** | The name of the identity provider type | [optional] 

## Example

```python
from openapi_client.models.user_profile_response_management_all_of_identity_providers import UserProfileResponseManagementAllOfIdentityProviders

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileResponseManagementAllOfIdentityProviders from a JSON string
user_profile_response_management_all_of_identity_providers_instance = UserProfileResponseManagementAllOfIdentityProviders.from_json(json)
# print the JSON string representation of the object
print(UserProfileResponseManagementAllOfIdentityProviders.to_json())

# convert the object into a dict
user_profile_response_management_all_of_identity_providers_dict = user_profile_response_management_all_of_identity_providers_instance.to_dict()
# create an instance of UserProfileResponseManagementAllOfIdentityProviders from a dict
user_profile_response_management_all_of_identity_providers_from_dict = UserProfileResponseManagementAllOfIdentityProviders.from_dict(user_profile_response_management_all_of_identity_providers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


