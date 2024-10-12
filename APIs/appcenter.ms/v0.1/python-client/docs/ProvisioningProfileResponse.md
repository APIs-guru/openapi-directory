# ProvisioningProfileResponse

A response containing information about an iOS provisioning profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appex_profiles** | [**List[ProvisioningProfileResponse]**](ProvisioningProfileResponse.md) | Array of provisioning profiles for any app extensions | [optional] 
**provisioning_bundle_id** | **str** | The bundle identifier associated with the profile. | [optional] 
**provisioning_profile_name** | **str** | The name of the provisioning profile. | [optional] 
**provisioning_profile_type** | **str** |  | 
**team_identifier** | **str** | The team identifier. | [optional] 
**udids** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.provisioning_profile_response import ProvisioningProfileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningProfileResponse from a JSON string
provisioning_profile_response_instance = ProvisioningProfileResponse.from_json(json)
# print the JSON string representation of the object
print(ProvisioningProfileResponse.to_json())

# convert the object into a dict
provisioning_profile_response_dict = provisioning_profile_response_instance.to_dict()
# create an instance of ProvisioningProfileResponse from a dict
provisioning_profile_response_from_dict = ProvisioningProfileResponse.from_dict(provisioning_profile_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


