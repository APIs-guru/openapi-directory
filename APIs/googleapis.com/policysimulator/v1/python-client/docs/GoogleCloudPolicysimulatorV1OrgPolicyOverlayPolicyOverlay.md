# GoogleCloudPolicysimulatorV1OrgPolicyOverlayPolicyOverlay

A change to an OrgPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | [**GoogleCloudOrgpolicyV2Policy**](GoogleCloudOrgpolicyV2Policy.md) |  | [optional] 
**policy_parent** | **str** | Optional. The parent of the policy we are attaching to. Example: \&quot;projects/123456\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1_org_policy_overlay_policy_overlay import GoogleCloudPolicysimulatorV1OrgPolicyOverlayPolicyOverlay

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1OrgPolicyOverlayPolicyOverlay from a JSON string
google_cloud_policysimulator_v1_org_policy_overlay_policy_overlay_instance = GoogleCloudPolicysimulatorV1OrgPolicyOverlayPolicyOverlay.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1OrgPolicyOverlayPolicyOverlay.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1_org_policy_overlay_policy_overlay_dict = google_cloud_policysimulator_v1_org_policy_overlay_policy_overlay_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1OrgPolicyOverlayPolicyOverlay from a dict
google_cloud_policysimulator_v1_org_policy_overlay_policy_overlay_from_dict = GoogleCloudPolicysimulatorV1OrgPolicyOverlayPolicyOverlay.from_dict(google_cloud_policysimulator_v1_org_policy_overlay_policy_overlay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


