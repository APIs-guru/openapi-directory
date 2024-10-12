# GoogleCloudPolicysimulatorV1betaOrgPolicyViolation

OrgPolicyViolation is a resource representing a single resource violating a single OrgPolicy constraint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_constraint** | [**GoogleCloudOrgpolicyV2CustomConstraint**](GoogleCloudOrgpolicyV2CustomConstraint.md) |  | [optional] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**name** | **str** | The name of the &#x60;OrgPolicyViolation&#x60;. Example: organizations/my-example-org/locations/global/orgPolicyViolationsPreviews/506a5f7f/orgPolicyViolations/38ce&#x60; | [optional] 
**resource** | [**GoogleCloudPolicysimulatorV1betaResourceContext**](GoogleCloudPolicysimulatorV1betaResourceContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1beta_org_policy_violation import GoogleCloudPolicysimulatorV1betaOrgPolicyViolation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1betaOrgPolicyViolation from a JSON string
google_cloud_policysimulator_v1beta_org_policy_violation_instance = GoogleCloudPolicysimulatorV1betaOrgPolicyViolation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1betaOrgPolicyViolation.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1beta_org_policy_violation_dict = google_cloud_policysimulator_v1beta_org_policy_violation_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1betaOrgPolicyViolation from a dict
google_cloud_policysimulator_v1beta_org_policy_violation_from_dict = GoogleCloudPolicysimulatorV1betaOrgPolicyViolation.from_dict(google_cloud_policysimulator_v1beta_org_policy_violation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


