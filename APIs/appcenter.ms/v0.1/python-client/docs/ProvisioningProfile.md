# ProvisioningProfile

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
from openapi_client.models.provisioning_profile import ProvisioningProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningProfile from a JSON string
provisioning_profile_instance = ProvisioningProfile.from_json(json)
# print the JSON string representation of the object
print(ProvisioningProfile.to_json())

# convert the object into a dict
provisioning_profile_dict = provisioning_profile_instance.to_dict()
# create an instance of ProvisioningProfile from a dict
provisioning_profile_from_dict = ProvisioningProfile.from_dict(provisioning_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


