# GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse

Signed Access Approvals (SAA) enrollment response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**setup_errors** | **List[str]** | Indicates SAA enrollment setup error if any. | [optional] 
**setup_status** | **str** | Indicates SAA enrollment status of a given workload. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1_workload_saa_enrollment_response import GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse from a JSON string
google_cloud_assuredworkloads_v1_workload_saa_enrollment_response_instance = GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1_workload_saa_enrollment_response_dict = google_cloud_assuredworkloads_v1_workload_saa_enrollment_response_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse from a dict
google_cloud_assuredworkloads_v1_workload_saa_enrollment_response_from_dict = GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse.from_dict(google_cloud_assuredworkloads_v1_workload_saa_enrollment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


