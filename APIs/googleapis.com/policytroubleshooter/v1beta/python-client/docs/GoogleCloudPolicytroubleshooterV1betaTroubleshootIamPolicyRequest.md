# GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest

Request for TroubleshootIamPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_tuple** | [**GoogleCloudPolicytroubleshooterV1betaAccessTuple**](GoogleCloudPolicytroubleshooterV1betaAccessTuple.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_request import GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest from a JSON string
google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_request_instance = GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest.to_json())

# convert the object into a dict
google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_request_dict = google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_request_instance.to_dict()
# create an instance of GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest from a dict
google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_request_from_dict = GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest.from_dict(google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


