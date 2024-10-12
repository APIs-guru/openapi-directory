# GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata

Operation metadata to give request details of CreateWorkload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance_regime** | **str** | Optional. Compliance controls that should be applied to the resources managed by the workload. | [optional] 
**create_time** | **str** | Optional. Time when the operation was created. | [optional] 
**display_name** | **str** | Optional. The display name of the workload. | [optional] 
**parent** | **str** | Optional. The parent of the workload. | [optional] 
**resource_settings** | [**List[GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings]**](GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings.md) | Optional. Resource properties in the input that are used for creating/customizing workload resources. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_create_workload_operation_metadata import GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata from a JSON string
google_cloud_assuredworkloads_v1beta1_create_workload_operation_metadata_instance = GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_create_workload_operation_metadata_dict = google_cloud_assuredworkloads_v1beta1_create_workload_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata from a dict
google_cloud_assuredworkloads_v1beta1_create_workload_operation_metadata_from_dict = GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata.from_dict(google_cloud_assuredworkloads_v1beta1_create_workload_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


