# GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest

Request message for modifying multiple policy values for a specific target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest]**](GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest.md) | List of policies to modify as defined by the &#x60;requests&#x60;. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All &#x60;policyTargetKey.targetResource&#x60; values must point to an org unit resource. 3. All &#x60;policyTargetKey&#x60; values must have the same key names in the &#x60; additionalTargetKeys&#x60;. This also means if one of the targets has an empty &#x60;additionalTargetKeys&#x60; map, all of the targets must have an empty &#x60;additionalTargetKeys&#x60; map. 4. No two modification requests can reference the same &#x60;policySchema&#x60; + &#x60; policyTargetKey&#x60; pair.  | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_batch_modify_org_unit_policies_request import GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest from a JSON string
google_chrome_policy_versions_v1_batch_modify_org_unit_policies_request_instance = GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_batch_modify_org_unit_policies_request_dict = google_chrome_policy_versions_v1_batch_modify_org_unit_policies_request_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest from a dict
google_chrome_policy_versions_v1_batch_modify_org_unit_policies_request_from_dict = GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest.from_dict(google_chrome_policy_versions_v1_batch_modify_org_unit_policies_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


