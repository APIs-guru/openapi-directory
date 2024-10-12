# GetOrganizationAdaptivePolicyOverview200ResponseLimits

The current limits of various adaptive policy objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acls_in_a_policy** | **int** | Maximum number of adaptive policy ACLs that can be assigned to an adaptive policy in the organization. | [optional] 
**custom_groups** | **int** | Maximum number of user-created adaptive policy groups allowed in the organization. | [optional] 
**policy_objects** | **int** | Maximum number of policy objects (with the adaptive policy type) allowed in the organization. | [optional] 
**rules_in_an_acl** | **int** | Maximum number of rules allowed in an adaptive policy ACL in the organization. | [optional] 

## Example

```python
from openapi_client.models.get_organization_adaptive_policy_overview200_response_limits import GetOrganizationAdaptivePolicyOverview200ResponseLimits

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationAdaptivePolicyOverview200ResponseLimits from a JSON string
get_organization_adaptive_policy_overview200_response_limits_instance = GetOrganizationAdaptivePolicyOverview200ResponseLimits.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationAdaptivePolicyOverview200ResponseLimits.to_json())

# convert the object into a dict
get_organization_adaptive_policy_overview200_response_limits_dict = get_organization_adaptive_policy_overview200_response_limits_instance.to_dict()
# create an instance of GetOrganizationAdaptivePolicyOverview200ResponseLimits from a dict
get_organization_adaptive_policy_overview200_response_limits_from_dict = GetOrganizationAdaptivePolicyOverview200ResponseLimits.from_dict(get_organization_adaptive_policy_overview200_response_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


