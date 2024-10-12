# GetOrganizationAdaptivePolicyOverview200ResponseCounts

The current amount of various adaptive policy objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_policies** | **int** | Number of adaptive policies currently in the organization that allow all traffic. | [optional] 
**custom_acls** | **int** | Number of user-created adaptive policy ACLs currently in the organization. | [optional] 
**custom_groups** | **int** | Number of user-created adaptive policy groups currently in the organization. | [optional] 
**deny_policies** | **int** | Number of adaptive policies currently in the organization that deny all traffic. | [optional] 
**groups** | **int** | Number of adaptive policy groups currently in the organization. | [optional] 
**policies** | **int** | Number of adaptive policies currently in the organization. | [optional] 
**policy_objects** | **int** | Number of policy objects (with the adaptive policy type) currently in the organization. | [optional] 

## Example

```python
from openapi_client.models.get_organization_adaptive_policy_overview200_response_counts import GetOrganizationAdaptivePolicyOverview200ResponseCounts

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationAdaptivePolicyOverview200ResponseCounts from a JSON string
get_organization_adaptive_policy_overview200_response_counts_instance = GetOrganizationAdaptivePolicyOverview200ResponseCounts.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationAdaptivePolicyOverview200ResponseCounts.to_json())

# convert the object into a dict
get_organization_adaptive_policy_overview200_response_counts_dict = get_organization_adaptive_policy_overview200_response_counts_instance.to_dict()
# create an instance of GetOrganizationAdaptivePolicyOverview200ResponseCounts from a dict
get_organization_adaptive_policy_overview200_response_counts_from_dict = GetOrganizationAdaptivePolicyOverview200ResponseCounts.from_dict(get_organization_adaptive_policy_overview200_response_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


