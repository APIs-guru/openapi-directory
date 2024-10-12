# DeploymentLocationsHostingEnvironmentsInnerEnvironmentCapacitiesInner

Stamp capacity information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_capacity** | **int** | Available capacity (# of machines, bytes of storage etc...). | [optional] 
**compute_mode** | **str** | Shared/dedicated workers. | [optional] 
**exclude_from_capacity_allocation** | **bool** | If &lt;code&gt;true&lt;/code&gt;, it includes basic apps. Basic apps are not used for capacity allocation. | [optional] 
**is_applicable_for_all_compute_modes** | **bool** | &lt;code&gt;true&lt;/code&gt; if capacity is applicable for all apps; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**is_linux** | **bool** | Is this a linux stamp capacity | [optional] 
**name** | **str** | Name of the stamp. | [optional] 
**site_mode** | **str** | Shared or Dedicated. | [optional] 
**total_capacity** | **int** | Total capacity (# of machines, bytes of storage etc...). | [optional] 
**unit** | **str** | Name of the unit. | [optional] 
**worker_size** | **str** | Size of the machines. | [optional] 
**worker_size_id** | **int** | Size ID of machines:  0 - Small 1 - Medium 2 - Large | [optional] 

## Example

```python
from openapi_client.models.deployment_locations_hosting_environments_inner_environment_capacities_inner import DeploymentLocationsHostingEnvironmentsInnerEnvironmentCapacitiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentLocationsHostingEnvironmentsInnerEnvironmentCapacitiesInner from a JSON string
deployment_locations_hosting_environments_inner_environment_capacities_inner_instance = DeploymentLocationsHostingEnvironmentsInnerEnvironmentCapacitiesInner.from_json(json)
# print the JSON string representation of the object
print(DeploymentLocationsHostingEnvironmentsInnerEnvironmentCapacitiesInner.to_json())

# convert the object into a dict
deployment_locations_hosting_environments_inner_environment_capacities_inner_dict = deployment_locations_hosting_environments_inner_environment_capacities_inner_instance.to_dict()
# create an instance of DeploymentLocationsHostingEnvironmentsInnerEnvironmentCapacitiesInner from a dict
deployment_locations_hosting_environments_inner_environment_capacities_inner_from_dict = DeploymentLocationsHostingEnvironmentsInnerEnvironmentCapacitiesInner.from_dict(deployment_locations_hosting_environments_inner_environment_capacities_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


