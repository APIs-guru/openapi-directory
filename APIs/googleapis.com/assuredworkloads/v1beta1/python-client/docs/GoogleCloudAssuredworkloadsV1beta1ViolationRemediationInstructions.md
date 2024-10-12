# GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions

Instructions to remediate violation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**console_instructions** | [**GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole**](GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole.md) |  | [optional] 
**gcloud_instructions** | [**GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud**](GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_violation_remediation_instructions import GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions from a JSON string
google_cloud_assuredworkloads_v1beta1_violation_remediation_instructions_instance = GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_violation_remediation_instructions_dict = google_cloud_assuredworkloads_v1beta1_violation_remediation_instructions_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions from a dict
google_cloud_assuredworkloads_v1beta1_violation_remediation_instructions_from_dict = GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions.from_dict(google_cloud_assuredworkloads_v1beta1_violation_remediation_instructions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


