# GoogleChromePolicyVersionsV1UploadPolicyFileRequest

Request message for uploading a file for a policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_field** | **str** | Required. The fully qualified policy schema and field name this file is uploaded for. This information will be used to validate the content type of the file. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_upload_policy_file_request import GoogleChromePolicyVersionsV1UploadPolicyFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1UploadPolicyFileRequest from a JSON string
google_chrome_policy_versions_v1_upload_policy_file_request_instance = GoogleChromePolicyVersionsV1UploadPolicyFileRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1UploadPolicyFileRequest.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_upload_policy_file_request_dict = google_chrome_policy_versions_v1_upload_policy_file_request_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1UploadPolicyFileRequest from a dict
google_chrome_policy_versions_v1_upload_policy_file_request_from_dict = GoogleChromePolicyVersionsV1UploadPolicyFileRequest.from_dict(google_chrome_policy_versions_v1_upload_policy_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


