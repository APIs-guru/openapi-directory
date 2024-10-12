# WorkerPool

Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time at which the request to create the &#x60;WorkerPool&#x60; was received. | [optional] 
**delete_time** | **str** | Output only. Time at which the request to delete the &#x60;WorkerPool&#x60; was received. | [optional] 
**name** | **str** | User-defined name of the &#x60;WorkerPool&#x60;. | [optional] 
**project_id** | **str** | The project ID of the GCP project for which the &#x60;WorkerPool&#x60; is created. | [optional] 
**regions** | **List[str]** | List of regions to create the &#x60;WorkerPool&#x60;. Regions can&#39;t be empty. If Cloud Build adds a new GCP region in the future, the existing &#x60;WorkerPool&#x60; will not be enabled in the new region automatically; you must add the new region to the &#x60;regions&#x60; field to enable the &#x60;WorkerPool&#x60; in that region. | [optional] 
**service_account_email** | **str** | Output only. The service account used to manage the &#x60;WorkerPool&#x60;. The service account must have the Compute Instance Admin (Beta) permission at the project level. | [optional] 
**status** | **str** | Output only. WorkerPool Status. | [optional] 
**update_time** | **str** | Output only. Time at which the request to update the &#x60;WorkerPool&#x60; was received. | [optional] 
**worker_config** | [**WorkerConfig**](WorkerConfig.md) |  | [optional] 
**worker_count** | **str** | Total number of workers to be created across all requested regions. | [optional] 

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


