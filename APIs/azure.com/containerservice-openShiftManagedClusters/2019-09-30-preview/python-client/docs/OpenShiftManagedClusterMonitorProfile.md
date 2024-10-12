# OpenShiftManagedClusterMonitorProfile

Defines the configuration for Log Analytics integration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | If the Log analytics integration should be turned on or off | [optional] 
**workspace_resource_id** | **str** | Azure Resource Manager Resource ID for the Log Analytics workspace to integrate with. | [optional] 

## Example

```python
from openapi_client.models.open_shift_managed_cluster_monitor_profile import OpenShiftManagedClusterMonitorProfile

# TODO update the JSON string below
json = "{}"
# create an instance of OpenShiftManagedClusterMonitorProfile from a JSON string
open_shift_managed_cluster_monitor_profile_instance = OpenShiftManagedClusterMonitorProfile.from_json(json)
# print the JSON string representation of the object
print(OpenShiftManagedClusterMonitorProfile.to_json())

# convert the object into a dict
open_shift_managed_cluster_monitor_profile_dict = open_shift_managed_cluster_monitor_profile_instance.to_dict()
# create an instance of OpenShiftManagedClusterMonitorProfile from a dict
open_shift_managed_cluster_monitor_profile_from_dict = OpenShiftManagedClusterMonitorProfile.from_dict(open_shift_managed_cluster_monitor_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


