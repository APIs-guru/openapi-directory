# GoogleChromePolicyVersionsV1UploadedFileConstraints

Constraints on the uploaded file of a file policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size_limit_bytes** | **str** | The size limit of uploaded files for a setting, in bytes. | [optional] 
**supported_content_types** | **List[str]** | File types that can be uploaded for a setting. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_uploaded_file_constraints import GoogleChromePolicyVersionsV1UploadedFileConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1UploadedFileConstraints from a JSON string
google_chrome_policy_versions_v1_uploaded_file_constraints_instance = GoogleChromePolicyVersionsV1UploadedFileConstraints.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1UploadedFileConstraints.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_uploaded_file_constraints_dict = google_chrome_policy_versions_v1_uploaded_file_constraints_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1UploadedFileConstraints from a dict
google_chrome_policy_versions_v1_uploaded_file_constraints_from_dict = GoogleChromePolicyVersionsV1UploadedFileConstraints.from_dict(google_chrome_policy_versions_v1_uploaded_file_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


