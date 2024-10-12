# SoftwareUpdateConfigurationMachineRunListResult

result of listing all software update configuration machine runs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | link to next page of results. | [optional] 
**value** | [**List[SoftwareUpdateConfigurationMachineRun]**](SoftwareUpdateConfigurationMachineRun.md) | outer object returned when listing all software update configuration machine runs | [optional] 

## Example

```python
from openapi_client.models.software_update_configuration_machine_run_list_result import SoftwareUpdateConfigurationMachineRunListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareUpdateConfigurationMachineRunListResult from a JSON string
software_update_configuration_machine_run_list_result_instance = SoftwareUpdateConfigurationMachineRunListResult.from_json(json)
# print the JSON string representation of the object
print(SoftwareUpdateConfigurationMachineRunListResult.to_json())

# convert the object into a dict
software_update_configuration_machine_run_list_result_dict = software_update_configuration_machine_run_list_result_instance.to_dict()
# create an instance of SoftwareUpdateConfigurationMachineRunListResult from a dict
software_update_configuration_machine_run_list_result_from_dict = SoftwareUpdateConfigurationMachineRunListResult.from_dict(software_update_configuration_machine_run_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


