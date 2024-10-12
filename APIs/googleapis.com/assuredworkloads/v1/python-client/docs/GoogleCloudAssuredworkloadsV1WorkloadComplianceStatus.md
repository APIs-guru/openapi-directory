# GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus

Represents the Compliance Status of this workload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledged_resource_violation_count** | **int** | Number of current resource violations which are not acknowledged. | [optional] 
**acknowledged_violation_count** | **int** | Number of current orgPolicy violations which are acknowledged. | [optional] 
**active_resource_violation_count** | **int** | Number of current resource violations which are acknowledged. | [optional] 
**active_violation_count** | **int** | Number of current orgPolicy violations which are not acknowledged. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1_workload_compliance_status import GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus from a JSON string
google_cloud_assuredworkloads_v1_workload_compliance_status_instance = GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1_workload_compliance_status_dict = google_cloud_assuredworkloads_v1_workload_compliance_status_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus from a dict
google_cloud_assuredworkloads_v1_workload_compliance_status_from_dict = GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus.from_dict(google_cloud_assuredworkloads_v1_workload_compliance_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


