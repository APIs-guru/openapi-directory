# OrganizationAadGroupPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | The user&#39;s role in the organizatiion | [optional] 

## Example

```python
from openapi_client.models.organization_aad_group_patch_request import OrganizationAadGroupPatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationAadGroupPatchRequest from a JSON string
organization_aad_group_patch_request_instance = OrganizationAadGroupPatchRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationAadGroupPatchRequest.to_json())

# convert the object into a dict
organization_aad_group_patch_request_dict = organization_aad_group_patch_request_instance.to_dict()
# create an instance of OrganizationAadGroupPatchRequest from a dict
organization_aad_group_patch_request_from_dict = OrganizationAadGroupPatchRequest.from_dict(organization_aad_group_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


