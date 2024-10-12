# OrgPolicyViolationInfo

Represents OrgPolicy Violation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | **Dict[str, object]** | Optional. Resource payload that is currently in scope and is subjected to orgpolicy conditions. This payload may be the subset of the actual Resource that may come in the request. This payload should not contain any core content. | [optional] 
**resource_tags** | **Dict[str, str]** | Optional. Tags referenced on the resource at the time of evaluation. These also include the federated tags, if they are supplied in the CheckOrgPolicy or CheckCustomConstraints Requests. Optional field as of now. These tags are the Cloud tags that are available on the resource during the policy evaluation and will be available as part of the OrgPolicy check response for logging purposes. | [optional] 
**resource_type** | **str** | Optional. Resource type that the orgpolicy is checked against. Example: compute.googleapis.com/Instance, store.googleapis.com/bucket | [optional] 
**violation_info** | [**List[ViolationInfo]**](ViolationInfo.md) | Optional. Policy violations | [optional] 

## Example

```python
from openapi_client.models.org_policy_violation_info import OrgPolicyViolationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OrgPolicyViolationInfo from a JSON string
org_policy_violation_info_instance = OrgPolicyViolationInfo.from_json(json)
# print the JSON string representation of the object
print(OrgPolicyViolationInfo.to_json())

# convert the object into a dict
org_policy_violation_info_dict = org_policy_violation_info_instance.to_dict()
# create an instance of OrgPolicyViolationInfo from a dict
org_policy_violation_info_from_dict = OrgPolicyViolationInfo.from_dict(org_policy_violation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


