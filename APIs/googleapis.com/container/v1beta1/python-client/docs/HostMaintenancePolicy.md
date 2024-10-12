# HostMaintenancePolicy

HostMaintenancePolicy contains the maintenance policy for the hosts on which the GKE VMs run on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maintenance_interval** | **str** | Specifies the frequency of planned maintenance events. | [optional] 
**opportunistic_maintenance_strategy** | [**OpportunisticMaintenanceStrategy**](OpportunisticMaintenanceStrategy.md) |  | [optional] 

## Example

```python
from openapi_client.models.host_maintenance_policy import HostMaintenancePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of HostMaintenancePolicy from a JSON string
host_maintenance_policy_instance = HostMaintenancePolicy.from_json(json)
# print the JSON string representation of the object
print(HostMaintenancePolicy.to_json())

# convert the object into a dict
host_maintenance_policy_dict = host_maintenance_policy_instance.to_dict()
# create an instance of HostMaintenancePolicy from a dict
host_maintenance_policy_from_dict = HostMaintenancePolicy.from_dict(host_maintenance_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


