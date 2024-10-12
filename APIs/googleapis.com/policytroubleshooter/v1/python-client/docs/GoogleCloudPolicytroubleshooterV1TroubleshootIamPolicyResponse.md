# GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse

Response for TroubleshootIamPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Indicates whether the principal has the specified permission for the specified resource, based on evaluating all of the applicable IAM policies. | [optional] 
**errors** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | The general errors contained in the troubleshooting response. | [optional] 
**explained_policies** | [**List[GoogleCloudPolicytroubleshooterV1ExplainedPolicy]**](GoogleCloudPolicytroubleshooterV1ExplainedPolicy.md) | List of IAM policies that were evaluated to check the principal&#39;s permissions, with annotations to indicate how each policy contributed to the final result. The list of policies can include the policy for the resource itself. It can also include policies that are inherited from higher levels of the resource hierarchy, including the organization, the folder, and the project. To learn more about the resource hierarchy, see https://cloud.google.com/iam/help/resource-hierarchy. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_response import GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse from a JSON string
google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_response_instance = GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse.to_json())

# convert the object into a dict
google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_response_dict = google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_response_instance.to_dict()
# create an instance of GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse from a dict
google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_response_from_dict = GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse.from_dict(google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


