# WorkerPool

Worker pool of a hostingEnvironment (App Service Environment)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**sku** | [**SkuDescription**](SkuDescription.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

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


