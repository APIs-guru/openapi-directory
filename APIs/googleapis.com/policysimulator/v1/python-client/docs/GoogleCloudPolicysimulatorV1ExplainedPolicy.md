# GoogleCloudPolicysimulatorV1ExplainedPolicy

Details about how a specific IAM Policy contributed to the access check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Indicates whether _this policy_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another policy that overrides this policy. To determine whether the principal actually has the permission, use the &#x60;access&#x60; field in the TroubleshootIamPolicyResponse. | [optional] 
**binding_explanations** | [**List[GoogleCloudPolicysimulatorV1BindingExplanation]**](GoogleCloudPolicysimulatorV1BindingExplanation.md) | Details about how each binding in the policy affects the principal&#39;s ability, or inability, to use the permission for the resource. If the user who created the Replay does not have access to the policy, this field is omitted. | [optional] 
**full_resource_name** | **str** | The full resource name that identifies the resource. For example, &#x60;//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance&#x60;. If the user who created the Replay does not have access to the policy, this field is omitted. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. | [optional] 
**policy** | [**GoogleIamV1Policy**](GoogleIamV1Policy.md) |  | [optional] 
**relevance** | **str** | The relevance of this policy to the overall determination in the TroubleshootIamPolicyResponse. If the user who created the Replay does not have access to the policy, this field is omitted. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1_explained_policy import GoogleCloudPolicysimulatorV1ExplainedPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1ExplainedPolicy from a JSON string
google_cloud_policysimulator_v1_explained_policy_instance = GoogleCloudPolicysimulatorV1ExplainedPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1ExplainedPolicy.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1_explained_policy_dict = google_cloud_policysimulator_v1_explained_policy_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1ExplainedPolicy from a dict
google_cloud_policysimulator_v1_explained_policy_from_dict = GoogleCloudPolicysimulatorV1ExplainedPolicy.from_dict(google_cloud_policysimulator_v1_explained_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


