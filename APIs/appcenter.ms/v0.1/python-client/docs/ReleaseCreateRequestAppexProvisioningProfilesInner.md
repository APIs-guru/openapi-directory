# ReleaseCreateRequestAppexProvisioningProfilesInner

An object containing information about an iOS provisioning profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_identifier** | **str** | The application identifier. | 
**expired_at** | **str** | The profile&#39;s expiration date in RFC 3339 format, i.e. 2017-07-21T17:32:28Z | 
**name** | **str** | The name of the provisioning profile. | 
**profile_type** | **str** |  | 
**team_identifier** | **str** | The team identifier. | 
**udids** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.release_create_request_appex_provisioning_profiles_inner import ReleaseCreateRequestAppexProvisioningProfilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseCreateRequestAppexProvisioningProfilesInner from a JSON string
release_create_request_appex_provisioning_profiles_inner_instance = ReleaseCreateRequestAppexProvisioningProfilesInner.from_json(json)
# print the JSON string representation of the object
print(ReleaseCreateRequestAppexProvisioningProfilesInner.to_json())

# convert the object into a dict
release_create_request_appex_provisioning_profiles_inner_dict = release_create_request_appex_provisioning_profiles_inner_instance.to_dict()
# create an instance of ReleaseCreateRequestAppexProvisioningProfilesInner from a dict
release_create_request_appex_provisioning_profiles_inner_from_dict = ReleaseCreateRequestAppexProvisioningProfilesInner.from_dict(release_create_request_appex_provisioning_profiles_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


