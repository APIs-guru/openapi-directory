# MachineConfig

MachineConfig describes the configuration of a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_count** | **int** | The number of CPU&#39;s in the VM instance. | [optional] 

## Example

```python
from openapi_client.models.machine_config import MachineConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MachineConfig from a JSON string
machine_config_instance = MachineConfig.from_json(json)
# print the JSON string representation of the object
print(MachineConfig.to_json())

# convert the object into a dict
machine_config_dict = machine_config_instance.to_dict()
# create an instance of MachineConfig from a dict
machine_config_from_dict = MachineConfig.from_dict(machine_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


