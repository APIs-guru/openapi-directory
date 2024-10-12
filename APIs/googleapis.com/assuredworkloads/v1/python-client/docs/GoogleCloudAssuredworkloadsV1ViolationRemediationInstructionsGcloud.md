# GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud

Remediation instructions to resolve violation via gcloud cli

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_links** | **List[str]** | Additional urls for more information about steps | [optional] 
**gcloud_commands** | **List[str]** | Gcloud command to resolve violation | [optional] 
**steps** | **List[str]** | Steps to resolve violation via gcloud cli | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1_violation_remediation_instructions_gcloud import GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud from a JSON string
google_cloud_assuredworkloads_v1_violation_remediation_instructions_gcloud_instance = GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1_violation_remediation_instructions_gcloud_dict = google_cloud_assuredworkloads_v1_violation_remediation_instructions_gcloud_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud from a dict
google_cloud_assuredworkloads_v1_violation_remediation_instructions_gcloud_from_dict = GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud.from_dict(google_cloud_assuredworkloads_v1_violation_remediation_instructions_gcloud_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


