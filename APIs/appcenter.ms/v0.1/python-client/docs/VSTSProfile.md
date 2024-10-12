# VSTSProfile

VSTS user profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Profile display name | [optional] 
**email_address** | **str** | Profile email | [optional] 
**id** | **str** | Profile id | [optional] 
**public_alias** | **str** | Profile alias | [optional] 

## Example

```python
from openapi_client.models.vsts_profile import VSTSProfile

# TODO update the JSON string below
json = "{}"
# create an instance of VSTSProfile from a JSON string
vsts_profile_instance = VSTSProfile.from_json(json)
# print the JSON string representation of the object
print(VSTSProfile.to_json())

# convert the object into a dict
vsts_profile_dict = vsts_profile_instance.to_dict()
# create an instance of VSTSProfile from a dict
vsts_profile_from_dict = VSTSProfile.from_dict(vsts_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


