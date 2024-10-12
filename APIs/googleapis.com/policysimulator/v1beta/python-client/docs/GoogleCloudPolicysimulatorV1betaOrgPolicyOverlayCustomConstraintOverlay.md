# GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay

A change to an OrgPolicy custom constraint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_constraint** | [**GoogleCloudOrgpolicyV2CustomConstraint**](GoogleCloudOrgpolicyV2CustomConstraint.md) |  | [optional] 
**custom_constraint_parent** | **str** | Optional. Resource the constraint is attached to. Example: \&quot;organization/987654\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1beta_org_policy_overlay_custom_constraint_overlay import GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay from a JSON string
google_cloud_policysimulator_v1beta_org_policy_overlay_custom_constraint_overlay_instance = GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1beta_org_policy_overlay_custom_constraint_overlay_dict = google_cloud_policysimulator_v1beta_org_policy_overlay_custom_constraint_overlay_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay from a dict
google_cloud_policysimulator_v1beta_org_policy_overlay_custom_constraint_overlay_from_dict = GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay.from_dict(google_cloud_policysimulator_v1beta_org_policy_overlay_custom_constraint_overlay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


