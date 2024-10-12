# GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview

OrgPolicyViolationsPreview is a resource providing a preview of the violations that will exist if an OrgPolicy change is made. The list of violations are modeled as child resources and retrieved via a ListOrgPolicyViolations API call. There are potentially more OrgPolicyViolations than could fit in an embedded field. Thus, the use of a child resource instead of a field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when this &#x60;OrgPolicyViolationsPreview&#x60; was created. | [optional] [readonly] 
**custom_constraints** | **List[str]** | Output only. The names of the constraints against which all &#x60;OrgPolicyViolations&#x60; were evaluated. If &#x60;OrgPolicyOverlay&#x60; only contains &#x60;PolicyOverlay&#x60; then it contains the name of the configured custom constraint, applicable to the specified policies. Otherwise it contains the name of the constraint specified in &#x60;CustomConstraintOverlay&#x60;. Format: &#x60;organizations/{organization_id}/customConstraints/{custom_constraint_id}&#x60; Example: &#x60;organizations/123/customConstraints/custom.createOnlyE2TypeVms&#x60; | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the &#x60;OrgPolicyViolationsPreview&#x60;. It has the following format: &#x60;organizations/{organization}/locations/{location}/orgPolicyViolationsPreviews/{orgPolicyViolationsPreview}&#x60; Example: &#x60;organizations/my-example-org/locations/global/orgPolicyViolationsPreviews/506a5f7f&#x60; | [optional] [readonly] 
**overlay** | [**GoogleCloudPolicysimulatorV1betaOrgPolicyOverlay**](GoogleCloudPolicysimulatorV1betaOrgPolicyOverlay.md) |  | [optional] 
**resource_counts** | [**GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCounts**](GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCounts.md) |  | [optional] 
**state** | **str** | Output only. The state of the &#x60;OrgPolicyViolationsPreview&#x60;. | [optional] [readonly] 
**violations_count** | **int** | Output only. The number of OrgPolicyViolations in this &#x60;OrgPolicyViolationsPreview&#x60;. This count may differ from &#x60;resource_summary.noncompliant_count&#x60; because each OrgPolicyViolation is specific to a resource **and** constraint. If there are multiple constraints being evaluated (i.e. multiple policies in the overlay), a single resource may violate multiple constraints. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1beta_org_policy_violations_preview import GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview from a JSON string
google_cloud_policysimulator_v1beta_org_policy_violations_preview_instance = GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1beta_org_policy_violations_preview_dict = google_cloud_policysimulator_v1beta_org_policy_violations_preview_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview from a dict
google_cloud_policysimulator_v1beta_org_policy_violations_preview_from_dict = GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview.from_dict(google_cloud_policysimulator_v1beta_org_policy_violations_preview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


