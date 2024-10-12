# PatchOrganizationRequestChannels


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slack** | **object** |  | [optional] 
**telegram** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.patch_organization_request_channels import PatchOrganizationRequestChannels

# TODO update the JSON string below
json = "{}"
# create an instance of PatchOrganizationRequestChannels from a JSON string
patch_organization_request_channels_instance = PatchOrganizationRequestChannels.from_json(json)
# print the JSON string representation of the object
print(PatchOrganizationRequestChannels.to_json())

# convert the object into a dict
patch_organization_request_channels_dict = patch_organization_request_channels_instance.to_dict()
# create an instance of PatchOrganizationRequestChannels from a dict
patch_organization_request_channels_from_dict = PatchOrganizationRequestChannels.from_dict(patch_organization_request_channels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


