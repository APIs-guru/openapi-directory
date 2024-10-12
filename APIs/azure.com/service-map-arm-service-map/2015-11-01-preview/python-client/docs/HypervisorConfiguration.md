# HypervisorConfiguration

Describes the hypervisor configuration of a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hypervisor_type** | [**HypervisorType**](HypervisorType.md) |  | [optional] 
**native_host_machine_id** | **str** | The unique identifier of the hypervisor machine as reported by the underlying virtualization system. | [optional] 

## Example

```python
from openapi_client.models.hypervisor_configuration import HypervisorConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of HypervisorConfiguration from a JSON string
hypervisor_configuration_instance = HypervisorConfiguration.from_json(json)
# print the JSON string representation of the object
print(HypervisorConfiguration.to_json())

# convert the object into a dict
hypervisor_configuration_dict = hypervisor_configuration_instance.to_dict()
# create an instance of HypervisorConfiguration from a dict
hypervisor_configuration_from_dict = HypervisorConfiguration.from_dict(hypervisor_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


