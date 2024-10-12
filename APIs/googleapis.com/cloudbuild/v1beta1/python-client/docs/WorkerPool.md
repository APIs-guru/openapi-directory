# WorkerPool

Configuration for a `WorkerPool` to run the builds. Workers provide a build environment where Cloud Build runs your builds. Cloud Build owns and maintains a pool of workers for general use. By default, when you submit a build, Cloud Build uses one of the workers from this pool. Builds that run in the default worker pool have access to the public internet. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Custom `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of custom worker pools, see [Custom workers overview](https://cloud.google.com/cloud-build/docs/custom-workers/custom-workers-overview).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations. | [optional] 
**create_time** | **str** | Output only. Time at which the request to create the &#x60;WorkerPool&#x60; was received. | [optional] [readonly] 
**delete_time** | **str** | Output only. Time at which the request to delete the &#x60;WorkerPool&#x60; was received. | [optional] [readonly] 
**display_name** | **str** | A user-specified, human-readable name for the &#x60;WorkerPool&#x60;. If provided, this value must be 1-63 characters. | [optional] 
**etag** | **str** | Output only. Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the &#x60;WorkerPool&#x60;, with format &#x60;projects/{project}/locations/{location}/workerPools/{worker_pool}&#x60;. The value of &#x60;{worker_pool}&#x60; is provided by &#x60;worker_pool_id&#x60; in &#x60;CreateWorkerPool&#x60; request and the value of &#x60;{location}&#x60; is determined by the endpoint accessed. | [optional] [readonly] 
**network_config** | [**NetworkConfig**](NetworkConfig.md) |  | [optional] 
**state** | **str** | Output only. &#x60;WorkerPool&#x60; state. | [optional] [readonly] 
**uid** | **str** | Output only. A unique identifier for the &#x60;WorkerPool&#x60;. | [optional] [readonly] 
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


