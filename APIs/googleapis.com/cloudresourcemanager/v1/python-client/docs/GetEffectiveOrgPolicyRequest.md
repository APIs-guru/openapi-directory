# GetEffectiveOrgPolicyRequest

The request sent to the GetEffectiveOrgPolicy method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraint** | **str** | The name of the &#x60;Constraint&#x60; to compute the effective &#x60;Policy&#x60;. | [optional] 

## Example

```python
from openapi_client.models.get_effective_org_policy_request import GetEffectiveOrgPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetEffectiveOrgPolicyRequest from a JSON string
get_effective_org_policy_request_instance = GetEffectiveOrgPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(GetEffectiveOrgPolicyRequest.to_json())

# convert the object into a dict
get_effective_org_policy_request_dict = get_effective_org_policy_request_instance.to_dict()
# create an instance of GetEffectiveOrgPolicyRequest from a dict
get_effective_org_policy_request_from_dict = GetEffectiveOrgPolicyRequest.from_dict(get_effective_org_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


