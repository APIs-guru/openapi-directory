# OrganizationUserPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | The user&#39;s role in the organizatiion | [optional] 

## Example

```python
from openapi_client.models.organization_user_patch_request import OrganizationUserPatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationUserPatchRequest from a JSON string
organization_user_patch_request_instance = OrganizationUserPatchRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationUserPatchRequest.to_json())

# convert the object into a dict
organization_user_patch_request_dict = organization_user_patch_request_instance.to_dict()
# create an instance of OrganizationUserPatchRequest from a dict
organization_user_patch_request_from_dict = OrganizationUserPatchRequest.from_dict(organization_user_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


