# GetOrganizationBrandingPoliciesPriorities200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branding_policy_ids** | **List[str]** |       An ordered list of branding policy IDs that determines the priority order of how to apply the policies  | [optional] 

## Example

```python
from openapi_client.models.get_organization_branding_policies_priorities200_response import GetOrganizationBrandingPoliciesPriorities200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationBrandingPoliciesPriorities200Response from a JSON string
get_organization_branding_policies_priorities200_response_instance = GetOrganizationBrandingPoliciesPriorities200Response.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationBrandingPoliciesPriorities200Response.to_json())

# convert the object into a dict
get_organization_branding_policies_priorities200_response_dict = get_organization_branding_policies_priorities200_response_instance.to_dict()
# create an instance of GetOrganizationBrandingPoliciesPriorities200Response from a dict
get_organization_branding_policies_priorities200_response_from_dict = GetOrganizationBrandingPoliciesPriorities200Response.from_dict(get_organization_branding_policies_priorities200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


