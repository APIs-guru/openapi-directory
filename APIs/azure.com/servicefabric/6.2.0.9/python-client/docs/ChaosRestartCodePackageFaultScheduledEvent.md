# ChaosRestartCodePackageFaultScheduledEvent

Chaos Restart Code Package Fault Scheduled event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_package_name** | **str** | Code package name. | 
**fault_group_id** | **str** | Id of fault group. | 
**fault_id** | **str** | Id of fault. | 
**node_name** | **str** | The name of a Service Fabric node. | 
**service_manifest_name** | **str** | Service manifest name. | 
**service_package_activation_id** | **str** | Id of Service package activation. | 

## Example

```python
from openapi_client.models.chaos_restart_code_package_fault_scheduled_event import ChaosRestartCodePackageFaultScheduledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosRestartCodePackageFaultScheduledEvent from a JSON string
chaos_restart_code_package_fault_scheduled_event_instance = ChaosRestartCodePackageFaultScheduledEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosRestartCodePackageFaultScheduledEvent.to_json())

# convert the object into a dict
chaos_restart_code_package_fault_scheduled_event_dict = chaos_restart_code_package_fault_scheduled_event_instance.to_dict()
# create an instance of ChaosRestartCodePackageFaultScheduledEvent from a dict
chaos_restart_code_package_fault_scheduled_event_from_dict = ChaosRestartCodePackageFaultScheduledEvent.from_dict(chaos_restart_code_package_fault_scheduled_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


