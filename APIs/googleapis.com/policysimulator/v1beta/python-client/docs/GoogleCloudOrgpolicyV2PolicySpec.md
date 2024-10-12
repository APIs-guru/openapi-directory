# GoogleCloudOrgpolicyV2PolicySpec

Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | An opaque tag indicating the current version of the policySpec, used for concurrency control. This field is ignored if used in a &#x60;CreatePolicy&#x60; request. When the policy is returned from either a &#x60;GetPolicy&#x60; or a &#x60;ListPolicies&#x60; request, this &#x60;etag&#x60; indicates the version of the current policySpec to use when executing a read-modify-write loop. When the policy is returned from a &#x60;GetEffectivePolicy&#x60; request, the &#x60;etag&#x60; will be unset. | [optional] 
**inherit_from_parent** | **bool** | Determines the inheritance behavior for this policy. If &#x60;inherit_from_parent&#x60; is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints. | [optional] 
**reset** | **bool** | Ignores policies set above this resource and restores the &#x60;constraint_default&#x60; enforcement behavior of the specific constraint at this resource. This field can be set in policies for either list or boolean constraints. If set, &#x60;rules&#x60; must be empty and &#x60;inherit_from_parent&#x60; must be set to false. | [optional] 
**rules** | [**List[GoogleCloudOrgpolicyV2PolicySpecPolicyRule]**](GoogleCloudOrgpolicyV2PolicySpecPolicyRule.md) | In policies for boolean constraints, the following requirements apply: - There must be one and only one policy rule where condition is unset. - Boolean policy rules with conditions must set &#x60;enforced&#x60; to the opposite of the policy rule without a condition. - During policy evaluation, policy rules with conditions that are true for a target resource take precedence. | [optional] 
**update_time** | **str** | Output only. The time stamp this was previously updated. This represents the last time a call to &#x60;CreatePolicy&#x60; or &#x60;UpdatePolicy&#x60; was made for that policy. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_orgpolicy_v2_policy_spec import GoogleCloudOrgpolicyV2PolicySpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudOrgpolicyV2PolicySpec from a JSON string
google_cloud_orgpolicy_v2_policy_spec_instance = GoogleCloudOrgpolicyV2PolicySpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudOrgpolicyV2PolicySpec.to_json())

# convert the object into a dict
google_cloud_orgpolicy_v2_policy_spec_dict = google_cloud_orgpolicy_v2_policy_spec_instance.to_dict()
# create an instance of GoogleCloudOrgpolicyV2PolicySpec from a dict
google_cloud_orgpolicy_v2_policy_spec_from_dict = GoogleCloudOrgpolicyV2PolicySpec.from_dict(google_cloud_orgpolicy_v2_policy_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


