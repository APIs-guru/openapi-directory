# GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest

Request parameters for modifying a policy value for a specific org unit target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_target_key** | [**GoogleChromePolicyVersionsV1PolicyTargetKey**](GoogleChromePolicyVersionsV1PolicyTargetKey.md) |  | [optional] 
**policy_value** | [**GoogleChromePolicyVersionsV1PolicyValue**](GoogleChromePolicyVersionsV1PolicyValue.md) |  | [optional] 
**update_mask** | **str** | Required. Policy fields to update. Only fields in this mask will be updated; other fields in &#x60;policy_value&#x60; will be ignored (even if they have values). If a field is in this list it must have a value in &#39;policy_value&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_modify_org_unit_policy_request import GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest from a JSON string
google_chrome_policy_versions_v1_modify_org_unit_policy_request_instance = GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_modify_org_unit_policy_request_dict = google_chrome_policy_versions_v1_modify_org_unit_policy_request_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest from a dict
google_chrome_policy_versions_v1_modify_org_unit_policy_request_from_dict = GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest.from_dict(google_chrome_policy_versions_v1_modify_org_unit_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


