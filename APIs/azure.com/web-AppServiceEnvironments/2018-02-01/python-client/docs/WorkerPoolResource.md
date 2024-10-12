# WorkerPoolResource

Worker pool of an App Service Environment ARM resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Worker pool of an App Service Environment. | [optional] 
**sku** | **object** | Description of a SKU for a scalable resource. | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.worker_pool_resource import WorkerPoolResource

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerPoolResource from a JSON string
worker_pool_resource_instance = WorkerPoolResource.from_json(json)
# print the JSON string representation of the object
print(WorkerPoolResource.to_json())

# convert the object into a dict
worker_pool_resource_dict = worker_pool_resource_instance.to_dict()
# create an instance of WorkerPoolResource from a dict
worker_pool_resource_from_dict = WorkerPoolResource.from_dict(worker_pool_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


