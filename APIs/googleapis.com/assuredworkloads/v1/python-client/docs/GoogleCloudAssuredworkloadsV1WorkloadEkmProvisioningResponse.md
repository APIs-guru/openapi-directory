# GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse

External key management systems(EKM) Provisioning response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ekm_provisioning_error_domain** | **str** | Indicates Ekm provisioning error if any. | [optional] 
**ekm_provisioning_error_mapping** | **str** | Detailed error message if Ekm provisioning fails | [optional] 
**ekm_provisioning_state** | **str** | Indicates Ekm enrollment Provisioning of a given workload. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1_workload_ekm_provisioning_response import GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse from a JSON string
google_cloud_assuredworkloads_v1_workload_ekm_provisioning_response_instance = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1_workload_ekm_provisioning_response_dict = google_cloud_assuredworkloads_v1_workload_ekm_provisioning_response_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse from a dict
google_cloud_assuredworkloads_v1_workload_ekm_provisioning_response_from_dict = GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse.from_dict(google_cloud_assuredworkloads_v1_workload_ekm_provisioning_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


