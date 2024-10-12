# GoogleCloudAiplatformV1WorkerPoolSpec

Represents the spec of a worker pool in a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_spec** | [**GoogleCloudAiplatformV1ContainerSpec**](GoogleCloudAiplatformV1ContainerSpec.md) |  | [optional] 
**disk_spec** | [**GoogleCloudAiplatformV1DiskSpec**](GoogleCloudAiplatformV1DiskSpec.md) |  | [optional] 
**machine_spec** | [**GoogleCloudAiplatformV1MachineSpec**](GoogleCloudAiplatformV1MachineSpec.md) |  | [optional] 
**nfs_mounts** | [**List[GoogleCloudAiplatformV1NfsMount]**](GoogleCloudAiplatformV1NfsMount.md) | Optional. List of NFS mount spec. | [optional] 
**python_package_spec** | [**GoogleCloudAiplatformV1PythonPackageSpec**](GoogleCloudAiplatformV1PythonPackageSpec.md) |  | [optional] 
**replica_count** | **str** | Optional. The number of worker replicas to use for this worker pool. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_worker_pool_spec import GoogleCloudAiplatformV1WorkerPoolSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1WorkerPoolSpec from a JSON string
google_cloud_aiplatform_v1_worker_pool_spec_instance = GoogleCloudAiplatformV1WorkerPoolSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1WorkerPoolSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_worker_pool_spec_dict = google_cloud_aiplatform_v1_worker_pool_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1WorkerPoolSpec from a dict
google_cloud_aiplatform_v1_worker_pool_spec_from_dict = GoogleCloudAiplatformV1WorkerPoolSpec.from_dict(google_cloud_aiplatform_v1_worker_pool_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


