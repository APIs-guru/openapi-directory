# GoogleChromePolicyVersionsV1UploadPolicyFileResponse

Response message for downloading an uploaded file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_uri** | **str** | The uri for end user to download the file. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_upload_policy_file_response import GoogleChromePolicyVersionsV1UploadPolicyFileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1UploadPolicyFileResponse from a JSON string
google_chrome_policy_versions_v1_upload_policy_file_response_instance = GoogleChromePolicyVersionsV1UploadPolicyFileResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1UploadPolicyFileResponse.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_upload_policy_file_response_dict = google_chrome_policy_versions_v1_upload_policy_file_response_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1UploadPolicyFileResponse from a dict
google_chrome_policy_versions_v1_upload_policy_file_response_from_dict = GoogleChromePolicyVersionsV1UploadPolicyFileResponse.from_dict(google_chrome_policy_versions_v1_upload_policy_file_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


