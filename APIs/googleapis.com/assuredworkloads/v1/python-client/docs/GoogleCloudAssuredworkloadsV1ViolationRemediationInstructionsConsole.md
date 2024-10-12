# GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole

Remediation instructions to resolve violation via cloud console

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_links** | **List[str]** | Additional urls for more information about steps | [optional] 
**console_uris** | **List[str]** | Link to console page where violations can be resolved | [optional] 
**steps** | **List[str]** | Steps to resolve violation via cloud console | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1_violation_remediation_instructions_console import GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole from a JSON string
google_cloud_assuredworkloads_v1_violation_remediation_instructions_console_instance = GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1_violation_remediation_instructions_console_dict = google_cloud_assuredworkloads_v1_violation_remediation_instructions_console_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole from a dict
google_cloud_assuredworkloads_v1_violation_remediation_instructions_console_from_dict = GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole.from_dict(google_cloud_assuredworkloads_v1_violation_remediation_instructions_console_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


