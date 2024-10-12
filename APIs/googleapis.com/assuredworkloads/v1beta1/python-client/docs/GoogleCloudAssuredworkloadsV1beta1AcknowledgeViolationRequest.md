# GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest

Request for acknowledging the violation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledge_type** | **str** | Optional. Acknowledge type of specified violation. | [optional] 
**comment** | **str** | Required. Business justification explaining the need for violation acknowledgement | [optional] 
**non_compliant_org_policy** | **str** | Optional. This field is deprecated and will be removed in future version of the API. Name of the OrgPolicy which was modified with non-compliant change and resulted in this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_acknowledge_violation_request import GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest from a JSON string
google_cloud_assuredworkloads_v1beta1_acknowledge_violation_request_instance = GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_acknowledge_violation_request_dict = google_cloud_assuredworkloads_v1beta1_acknowledge_violation_request_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest from a dict
google_cloud_assuredworkloads_v1beta1_acknowledge_violation_request_from_dict = GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest.from_dict(google_cloud_assuredworkloads_v1beta1_acknowledge_violation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


