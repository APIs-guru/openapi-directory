# SoftwareUpdateConfigurationMachineRun

Software update configuration machine run model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id of the software update configuration machine run | [optional] [readonly] 
**name** | **str** | Name of the software update configuration machine run | [optional] [readonly] 
**properties** | [**UpdateConfigurationMachineRunProperties**](UpdateConfigurationMachineRunProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.software_update_configuration_machine_run import SoftwareUpdateConfigurationMachineRun

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareUpdateConfigurationMachineRun from a JSON string
software_update_configuration_machine_run_instance = SoftwareUpdateConfigurationMachineRun.from_json(json)
# print the JSON string representation of the object
print(SoftwareUpdateConfigurationMachineRun.to_json())

# convert the object into a dict
software_update_configuration_machine_run_dict = software_update_configuration_machine_run_instance.to_dict()
# create an instance of SoftwareUpdateConfigurationMachineRun from a dict
software_update_configuration_machine_run_from_dict = SoftwareUpdateConfigurationMachineRun.from_dict(software_update_configuration_machine_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


