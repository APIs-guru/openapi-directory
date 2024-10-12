# PatchOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | New description to set on the organization | [optional] 
**name** | **str** | New name to set on the organization | [optional] 

## Example

```python
from openapi_client.models.patch_organization_request import PatchOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchOrganizationRequest from a JSON string
patch_organization_request_instance = PatchOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(PatchOrganizationRequest.to_json())

# convert the object into a dict
patch_organization_request_dict = patch_organization_request_instance.to_dict()
# create an instance of PatchOrganizationRequest from a dict
patch_organization_request_from_dict = PatchOrganizationRequest.from_dict(patch_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


