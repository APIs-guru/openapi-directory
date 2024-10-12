# PatchOrganizationRequestConfigurations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_auth_enabled** | **bool** |  | [optional] 
**basic_auth_password** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.patch_organization_request_configurations import PatchOrganizationRequestConfigurations

# TODO update the JSON string below
json = "{}"
# create an instance of PatchOrganizationRequestConfigurations from a JSON string
patch_organization_request_configurations_instance = PatchOrganizationRequestConfigurations.from_json(json)
# print the JSON string representation of the object
print(PatchOrganizationRequestConfigurations.to_json())

# convert the object into a dict
patch_organization_request_configurations_dict = patch_organization_request_configurations_instance.to_dict()
# create an instance of PatchOrganizationRequestConfigurations from a dict
patch_organization_request_configurations_from_dict = PatchOrganizationRequestConfigurations.from_dict(patch_organization_request_configurations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


