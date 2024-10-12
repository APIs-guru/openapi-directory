# MachineResourcesConfiguration

Describes the resources of a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_speed** | **int** | CPU speed in megahertz (Mhz). | [optional] 
**cpu_speed_accuracy** | [**Accuracy**](Accuracy.md) |  | [optional] 
**cpus** | **int** | Number of CPUs. | [optional] 
**physical_memory** | **int** | Physical memory in megabytes (MB). | [optional] 

## Example

```python
from openapi_client.models.machine_resources_configuration import MachineResourcesConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of MachineResourcesConfiguration from a JSON string
machine_resources_configuration_instance = MachineResourcesConfiguration.from_json(json)
# print the JSON string representation of the object
print(MachineResourcesConfiguration.to_json())

# convert the object into a dict
machine_resources_configuration_dict = machine_resources_configuration_instance.to_dict()
# create an instance of MachineResourcesConfiguration from a dict
machine_resources_configuration_from_dict = MachineResourcesConfiguration.from_dict(machine_resources_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


