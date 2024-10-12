# GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlay

The proposed changes to OrgPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_constraints** | [**List[GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayCustomConstraintOverlay]**](GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayCustomConstraintOverlay.md) | Optional. The OrgPolicy CustomConstraint changes to preview violations for. Any existing CustomConstraints with the same name will be overridden in the simulation. That is, violations will be determined as if all custom constraints in the overlay were instantiated. Only a single custom_constraint is supported in the overlay at a time. For evaluating multiple constraints, multiple &#x60;GenerateOrgPolicyViolationsPreview&#x60; requests are made, where each request evaluates a single constraint. | [optional] 
**policies** | [**List[GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayPolicyOverlay]**](GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayPolicyOverlay.md) | Optional. The OrgPolicy changes to preview violations for. Any existing OrgPolicies with the same name will be overridden in the simulation. That is, violations will be determined as if all policies in the overlay were created or updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1alpha_org_policy_overlay import GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlay

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlay from a JSON string
google_cloud_policysimulator_v1alpha_org_policy_overlay_instance = GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlay.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlay.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1alpha_org_policy_overlay_dict = google_cloud_policysimulator_v1alpha_org_policy_overlay_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlay from a dict
google_cloud_policysimulator_v1alpha_org_policy_overlay_from_dict = GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlay.from_dict(google_cloud_policysimulator_v1alpha_org_policy_overlay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


