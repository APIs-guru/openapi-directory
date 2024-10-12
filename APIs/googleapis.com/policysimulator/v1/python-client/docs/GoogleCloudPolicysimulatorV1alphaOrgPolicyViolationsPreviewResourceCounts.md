# GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewResourceCounts

A summary of the state of all resources scanned for compliance with the changed OrgPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliant** | **int** | Output only. Number of scanned resources with zero violations. | [optional] [readonly] 
**errors** | **int** | Output only. Number of resources that returned an error when scanned. | [optional] [readonly] 
**noncompliant** | **int** | Output only. Number of scanned resources with at least one violation. | [optional] [readonly] 
**scanned** | **int** | Output only. Number of resources checked for compliance. Must equal: unenforced + noncompliant + compliant + error | [optional] [readonly] 
**unenforced** | **int** | Output only. Number of resources where the constraint was not enforced, i.e. the Policy set &#x60;enforced: false&#x60; for that resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1alpha_org_policy_violations_preview_resource_counts import GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewResourceCounts

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewResourceCounts from a JSON string
google_cloud_policysimulator_v1alpha_org_policy_violations_preview_resource_counts_instance = GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewResourceCounts.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewResourceCounts.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1alpha_org_policy_violations_preview_resource_counts_dict = google_cloud_policysimulator_v1alpha_org_policy_violations_preview_resource_counts_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewResourceCounts from a dict
google_cloud_policysimulator_v1alpha_org_policy_violations_preview_resource_counts_from_dict = GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewResourceCounts.from_dict(google_cloud_policysimulator_v1alpha_org_policy_violations_preview_resource_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


