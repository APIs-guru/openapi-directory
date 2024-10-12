# GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest

Request parameters for inheriting policy value of a specific org unit target from the policy value of its parent org unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_schema** | **str** | The fully qualified name of the policy schema that is being inherited. | [optional] 
**policy_target_key** | [**GoogleChromePolicyVersionsV1PolicyTargetKey**](GoogleChromePolicyVersionsV1PolicyTargetKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_inherit_org_unit_policy_request import GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest from a JSON string
google_chrome_policy_versions_v1_inherit_org_unit_policy_request_instance = GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_inherit_org_unit_policy_request_dict = google_chrome_policy_versions_v1_inherit_org_unit_policy_request_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest from a dict
google_chrome_policy_versions_v1_inherit_org_unit_policy_request_from_dict = GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest.from_dict(google_chrome_policy_versions_v1_inherit_org_unit_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


