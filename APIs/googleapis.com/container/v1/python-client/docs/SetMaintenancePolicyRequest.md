# SetMaintenancePolicyRequest

SetMaintenancePolicyRequest sets the maintenance policy for a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Required. The name of the cluster to update. | [optional] 
**maintenance_policy** | [**MaintenancePolicy**](MaintenancePolicy.md) |  | [optional] 
**name** | **str** | The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format &#x60;projects/*/locations/*/clusters/*&#x60;. | [optional] 
**project_id** | **str** | Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). | [optional] 
**zone** | **str** | Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. | [optional] 

## Example

```python
from openapi_client.models.set_maintenance_policy_request import SetMaintenancePolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetMaintenancePolicyRequest from a JSON string
set_maintenance_policy_request_instance = SetMaintenancePolicyRequest.from_json(json)
# print the JSON string representation of the object
print(SetMaintenancePolicyRequest.to_json())

# convert the object into a dict
set_maintenance_policy_request_dict = set_maintenance_policy_request_instance.to_dict()
# create an instance of SetMaintenancePolicyRequest from a dict
set_maintenance_policy_request_from_dict = SetMaintenancePolicyRequest.from_dict(set_maintenance_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


