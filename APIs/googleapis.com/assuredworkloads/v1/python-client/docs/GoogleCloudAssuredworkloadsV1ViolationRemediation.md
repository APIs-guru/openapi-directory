# GoogleCloudAssuredworkloadsV1ViolationRemediation

Represents remediation guidance to resolve compliance violation for AssuredWorkload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliant_values** | **List[str]** | Values that can resolve the violation For example: for list org policy violations, this will either be the list of allowed or denied values | [optional] 
**instructions** | [**GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions**](GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions.md) |  | [optional] 
**remediation_type** | **str** | Output only. Reemediation type based on the type of org policy values violated | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1_violation_remediation import GoogleCloudAssuredworkloadsV1ViolationRemediation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1ViolationRemediation from a JSON string
google_cloud_assuredworkloads_v1_violation_remediation_instance = GoogleCloudAssuredworkloadsV1ViolationRemediation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1ViolationRemediation.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1_violation_remediation_dict = google_cloud_assuredworkloads_v1_violation_remediation_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1ViolationRemediation from a dict
google_cloud_assuredworkloads_v1_violation_remediation_from_dict = GoogleCloudAssuredworkloadsV1ViolationRemediation.from_dict(google_cloud_assuredworkloads_v1_violation_remediation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


