# GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata

Operation metadata to give request details of CreateWorkload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance_regime** | **str** | Optional. Compliance controls that should be applied to the resources managed by the workload. | [optional] 
**create_time** | **str** | Optional. Time when the operation was created. | [optional] 
**display_name** | **str** | Optional. The display name of the workload. | [optional] 
**parent** | **str** | Optional. The parent of the workload. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1_create_workload_operation_metadata import GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata from a JSON string
google_cloud_assuredworkloads_v1_create_workload_operation_metadata_instance = GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1_create_workload_operation_metadata_dict = google_cloud_assuredworkloads_v1_create_workload_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata from a dict
google_cloud_assuredworkloads_v1_create_workload_operation_metadata_from_dict = GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata.from_dict(google_cloud_assuredworkloads_v1_create_workload_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


