# SoftwareUpdateConfigurationRunListResult

result of listing all software update configuration runs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | link to next page of results. | [optional] 
**value** | [**List[SoftwareUpdateConfigurationRun]**](SoftwareUpdateConfigurationRun.md) | outer object returned when listing all software update configuration runs | [optional] 

## Example

```python
from openapi_client.models.software_update_configuration_run_list_result import SoftwareUpdateConfigurationRunListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareUpdateConfigurationRunListResult from a JSON string
software_update_configuration_run_list_result_instance = SoftwareUpdateConfigurationRunListResult.from_json(json)
# print the JSON string representation of the object
print(SoftwareUpdateConfigurationRunListResult.to_json())

# convert the object into a dict
software_update_configuration_run_list_result_dict = software_update_configuration_run_list_result_instance.to_dict()
# create an instance of SoftwareUpdateConfigurationRunListResult from a dict
software_update_configuration_run_list_result_from_dict = SoftwareUpdateConfigurationRunListResult.from_dict(software_update_configuration_run_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


