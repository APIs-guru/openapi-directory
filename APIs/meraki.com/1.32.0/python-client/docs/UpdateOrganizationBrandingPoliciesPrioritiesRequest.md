# UpdateOrganizationBrandingPoliciesPrioritiesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branding_policy_ids** | **List[str]** |       An ordered list of branding policy IDs that determines the priority order of how to apply the policies  | [optional] 

## Example

```python
from openapi_client.models.update_organization_branding_policies_priorities_request import UpdateOrganizationBrandingPoliciesPrioritiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationBrandingPoliciesPrioritiesRequest from a JSON string
update_organization_branding_policies_priorities_request_instance = UpdateOrganizationBrandingPoliciesPrioritiesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationBrandingPoliciesPrioritiesRequest.to_json())

# convert the object into a dict
update_organization_branding_policies_priorities_request_dict = update_organization_branding_policies_priorities_request_instance.to_dict()
# create an instance of UpdateOrganizationBrandingPoliciesPrioritiesRequest from a dict
update_organization_branding_policies_priorities_request_from_dict = UpdateOrganizationBrandingPoliciesPrioritiesRequest.from_dict(update_organization_branding_policies_priorities_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


