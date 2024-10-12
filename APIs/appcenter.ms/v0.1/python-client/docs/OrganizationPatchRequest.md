# OrganizationPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full (friendly) name of the organization. | [optional] 
**name** | **str** | The name of the organization used in URLs | [optional] 

## Example

```python
from openapi_client.models.organization_patch_request import OrganizationPatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationPatchRequest from a JSON string
organization_patch_request_instance = OrganizationPatchRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationPatchRequest.to_json())

# convert the object into a dict
organization_patch_request_dict = organization_patch_request_instance.to_dict()
# create an instance of OrganizationPatchRequest from a dict
organization_patch_request_from_dict = OrganizationPatchRequest.from_dict(organization_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


