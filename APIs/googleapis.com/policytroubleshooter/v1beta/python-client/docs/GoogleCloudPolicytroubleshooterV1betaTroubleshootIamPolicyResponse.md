# GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse

Response for TroubleshootIamPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Indicates whether the member has the specified permission for the specified resource, based on evaluating all of the applicable policies. | [optional] 
**explained_policies** | [**List[GoogleCloudPolicytroubleshooterV1betaExplainedPolicy]**](GoogleCloudPolicytroubleshooterV1betaExplainedPolicy.md) | List of IAM policies that were evaluated to check the member&#39;s permissions, with annotations to indicate how each policy contributed to the final result. The list of policies can include the policy for the resource itself. It can also include policies that are inherited from higher levels of the resource hierarchy, including the organization, the folder, and the project. To learn more about the resource hierarchy, see https://cloud.google.com/iam/help/resource-hierarchy. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_response import GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse from a JSON string
google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_response_instance = GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse.to_json())

# convert the object into a dict
google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_response_dict = google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_response_instance.to_dict()
# create an instance of GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse from a dict
google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_response_from_dict = GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse.from_dict(google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


