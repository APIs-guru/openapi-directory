# PatchOrganizationRequestLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about** | **str** |  | [optional] 
**contact** | **str** |  | [optional] 
**privacy** | **str** |  | [optional] 
**support** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patch_organization_request_links import PatchOrganizationRequestLinks

# TODO update the JSON string below
json = "{}"
# create an instance of PatchOrganizationRequestLinks from a JSON string
patch_organization_request_links_instance = PatchOrganizationRequestLinks.from_json(json)
# print the JSON string representation of the object
print(PatchOrganizationRequestLinks.to_json())

# convert the object into a dict
patch_organization_request_links_dict = patch_organization_request_links_instance.to_dict()
# create an instance of PatchOrganizationRequestLinks from a dict
patch_organization_request_links_from_dict = PatchOrganizationRequestLinks.from_dict(patch_organization_request_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


