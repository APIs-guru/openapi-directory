# MaintenancePolicy

MaintenancePolicy defines the maintenance policy to be used for the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_version** | **str** | A hash identifying the version of this policy, so that updates to fields of the policy won&#39;t accidentally undo intermediate changes (and so that users of the API unaware of some fields won&#39;t accidentally remove other fields). Make a &#x60;get()&#x60; request to the cluster to get the current resource version and include it with requests to set the policy. | [optional] 
**window** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] 

## Example

```python
from openapi_client.models.maintenance_policy import MaintenancePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenancePolicy from a JSON string
maintenance_policy_instance = MaintenancePolicy.from_json(json)
# print the JSON string representation of the object
print(MaintenancePolicy.to_json())

# convert the object into a dict
maintenance_policy_dict = maintenance_policy_instance.to_dict()
# create an instance of MaintenancePolicy from a dict
maintenance_policy_from_dict = MaintenancePolicy.from_dict(maintenance_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


