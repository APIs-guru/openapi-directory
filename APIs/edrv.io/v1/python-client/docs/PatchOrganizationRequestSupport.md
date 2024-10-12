# PatchOrganizationRequestSupport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_hours** | **str** |  | [optional] 
**chat** | [**PatchOrganizationRequestSupportChat**](PatchOrganizationRequestSupportChat.md) |  | [optional] 
**contact_number** | **str** |  | [optional] 
**email** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patch_organization_request_support import PatchOrganizationRequestSupport

# TODO update the JSON string below
json = "{}"
# create an instance of PatchOrganizationRequestSupport from a JSON string
patch_organization_request_support_instance = PatchOrganizationRequestSupport.from_json(json)
# print the JSON string representation of the object
print(PatchOrganizationRequestSupport.to_json())

# convert the object into a dict
patch_organization_request_support_dict = patch_organization_request_support_instance.to_dict()
# create an instance of PatchOrganizationRequestSupport from a dict
patch_organization_request_support_from_dict = PatchOrganizationRequestSupport.from_dict(patch_organization_request_support_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


