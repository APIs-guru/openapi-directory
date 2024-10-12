# WorkerResource

Configuration for resources used by Airflow workers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | **float** | Optional. CPU request and limit for a single Airflow worker replica. | [optional] 
**max_count** | **int** | Optional. Maximum number of workers for autoscaling. | [optional] 
**memory_gb** | **float** | Optional. Memory (GB) request and limit for a single Airflow worker replica. | [optional] 
**min_count** | **int** | Optional. Minimum number of workers for autoscaling. | [optional] 
**storage_gb** | **float** | Optional. Storage (GB) request and limit for a single Airflow worker replica. | [optional] 

## Example

```python
from openapi_client.models.worker_resource import WorkerResource

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerResource from a JSON string
worker_resource_instance = WorkerResource.from_json(json)
# print the JSON string representation of the object
print(WorkerResource.to_json())

# convert the object into a dict
worker_resource_dict = worker_resource_instance.to_dict()
# create an instance of WorkerResource from a dict
worker_resource_from_dict = WorkerResource.from_dict(worker_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


