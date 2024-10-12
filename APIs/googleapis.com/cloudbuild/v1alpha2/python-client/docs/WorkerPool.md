# WorkerPool

Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time at which the request to create the &#x60;WorkerPool&#x60; was received. | [optional] [readonly] 
**delete_time** | **str** | Output only. Time at which the request to delete the &#x60;WorkerPool&#x60; was received. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the &#x60;WorkerPool&#x60;. Format of the name is &#x60;projects/{project_id}/workerPools/{worker_pool_id}&#x60;, where the value of {worker_pool_id} is provided in the CreateWorkerPool request. | [optional] [readonly] 
**network_config** | [**NetworkConfig**](NetworkConfig.md) |  | [optional] 
**region** | **str** | Required. Immutable. The region where the &#x60;WorkerPool&#x60; runs. Only \&quot;us-central1\&quot; is currently supported. Note that &#x60;region&#x60; cannot be changed once the &#x60;WorkerPool&#x60; is created. | [optional] 
**state** | **str** | Output only. WorkerPool state. | [optional] [readonly] 
**update_time** | **str** | Output only. Time at which the request to update the &#x60;WorkerPool&#x60; was received. | [optional] [readonly] 
**worker_config** | [**WorkerConfig**](WorkerConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.worker_pool import WorkerPool

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerPool from a JSON string
worker_pool_instance = WorkerPool.from_json(json)
# print the JSON string representation of the object
print(WorkerPool.to_json())

# convert the object into a dict
worker_pool_dict = worker_pool_instance.to_dict()
# create an instance of WorkerPool from a dict
worker_pool_from_dict = WorkerPool.from_dict(worker_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


