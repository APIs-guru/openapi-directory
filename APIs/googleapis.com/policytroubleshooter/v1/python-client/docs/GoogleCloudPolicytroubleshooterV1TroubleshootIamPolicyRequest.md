# GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest

Request for TroubleshootIamPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_tuple** | [**GoogleCloudPolicytroubleshooterV1AccessTuple**](GoogleCloudPolicytroubleshooterV1AccessTuple.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_request import GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest from a JSON string
google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_request_instance = GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest.to_json())

# convert the object into a dict
google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_request_dict = google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_request_instance.to_dict()
# create an instance of GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest from a dict
google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_request_from_dict = GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest.from_dict(google_cloud_policytroubleshooter_v1_troubleshoot_iam_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


