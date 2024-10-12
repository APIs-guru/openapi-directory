# DeploymentLocationsHostingEnvironmentsInnerWorkerPoolsInner

Worker pool of an App Service Environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_mode** | **str** | Shared or dedicated app hosting. | [optional] 
**instance_names** | **List[str]** | Names of all instances in the worker pool (read only). | [optional] [readonly] 
**worker_count** | **int** | Number of instances in the worker pool. | [optional] 
**worker_size** | **str** | VM size of the worker pool instances. | [optional] 
**worker_size_id** | **int** | Worker size ID for referencing this worker pool. | [optional] 

## Example

```python
from openapi_client.models.deployment_locations_hosting_environments_inner_worker_pools_inner import DeploymentLocationsHostingEnvironmentsInnerWorkerPoolsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentLocationsHostingEnvironmentsInnerWorkerPoolsInner from a JSON string
deployment_locations_hosting_environments_inner_worker_pools_inner_instance = DeploymentLocationsHostingEnvironmentsInnerWorkerPoolsInner.from_json(json)
# print the JSON string representation of the object
print(DeploymentLocationsHostingEnvironmentsInnerWorkerPoolsInner.to_json())

# convert the object into a dict
deployment_locations_hosting_environments_inner_worker_pools_inner_dict = deployment_locations_hosting_environments_inner_worker_pools_inner_instance.to_dict()
# create an instance of DeploymentLocationsHostingEnvironmentsInnerWorkerPoolsInner from a dict
deployment_locations_hosting_environments_inner_worker_pools_inner_from_dict = DeploymentLocationsHostingEnvironmentsInnerWorkerPoolsInner.from_dict(deployment_locations_hosting_environments_inner_worker_pools_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


