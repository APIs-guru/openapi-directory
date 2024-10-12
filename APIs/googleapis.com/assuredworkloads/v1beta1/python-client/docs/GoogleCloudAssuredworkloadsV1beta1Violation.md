# GoogleCloudAssuredworkloadsV1beta1Violation

Workload monitoring Violation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledged** | **bool** | A boolean that indicates if the violation is acknowledged | [optional] 
**acknowledgement_time** | **str** | Optional. Timestamp when this violation was acknowledged first. Check exception_contexts to find the last time the violation was acknowledged when there are more than one violations. This field will be absent when acknowledged field is marked as false. | [optional] 
**associated_org_policy_violation_id** | **str** | Optional. Output only. Violation Id of the org-policy violation due to which the resource violation is caused. Empty for org-policy violations. | [optional] [readonly] 
**audit_log_link** | **str** | Output only. Immutable. Audit Log Link for violated resource Format: https://console.cloud.google.com/logs/query;query&#x3D;{logName}{protoPayload.resourceName}{timeRange}{folder} | [optional] [readonly] 
**begin_time** | **str** | Output only. Time of the event which triggered the Violation. | [optional] [readonly] 
**category** | **str** | Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc. | [optional] [readonly] 
**description** | **str** | Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value. | [optional] [readonly] 
**exception_audit_log_link** | **str** | Output only. Immutable. Audit Log link to find business justification provided for violation exception. Format: https://console.cloud.google.com/logs/query;query&#x3D;{logName}{protoPayload.resourceName}{protoPayload.methodName}{timeRange}{organization} | [optional] [readonly] 
**exception_contexts** | [**List[GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext]**](GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext.md) | Output only. List of all the exception detail added for the violation. | [optional] [readonly] 
**name** | **str** | Output only. Immutable. Name of the Violation. Format: organizations/{organization}/locations/{location}/workloads/{workload_id}/violations/{violations_id} | [optional] [readonly] 
**non_compliant_org_policy** | **str** | Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name} | [optional] [readonly] 
**org_policy_constraint** | **str** | Output only. Immutable. The org-policy-constraint that was incorrectly changed, which resulted in this violation. | [optional] [readonly] 
**parent_project_number** | **str** | Optional. Output only. Parent project number where resource is present. Empty for org-policy violations. | [optional] [readonly] 
**remediation** | [**GoogleCloudAssuredworkloadsV1beta1ViolationRemediation**](GoogleCloudAssuredworkloadsV1beta1ViolationRemediation.md) |  | [optional] 
**resolve_time** | **str** | Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty. | [optional] [readonly] 
**resource_name** | **str** | Optional. Output only. Name of the resource like //storage.googleapis.com/myprojectxyz-testbucket. Empty for org-policy violations. | [optional] [readonly] 
**resource_type** | **str** | Optional. Output only. Type of the resource like compute.googleapis.com/Disk, etc. Empty for org-policy violations. | [optional] [readonly] 
**state** | **str** | Output only. State of the violation | [optional] [readonly] 
**update_time** | **str** | Output only. The last time when the Violation record was updated. | [optional] [readonly] 
**violation_type** | **str** | Output only. Type of the violation | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_violation import GoogleCloudAssuredworkloadsV1beta1Violation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1Violation from a JSON string
google_cloud_assuredworkloads_v1beta1_violation_instance = GoogleCloudAssuredworkloadsV1beta1Violation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1Violation.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_violation_dict = google_cloud_assuredworkloads_v1beta1_violation_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1Violation from a dict
google_cloud_assuredworkloads_v1beta1_violation_from_dict = GoogleCloudAssuredworkloadsV1beta1Violation.from_dict(google_cloud_assuredworkloads_v1beta1_violation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


