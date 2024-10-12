# SoftwareUpdateConfigurationRun

Software update configuration Run properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id of the software update configuration run | [optional] [readonly] 
**name** | **str** | Name of the software update configuration run. | [optional] [readonly] 
**properties** | [**SoftwareUpdateConfigurationRunProperties**](SoftwareUpdateConfigurationRunProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.software_update_configuration_run import SoftwareUpdateConfigurationRun

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareUpdateConfigurationRun from a JSON string
software_update_configuration_run_instance = SoftwareUpdateConfigurationRun.from_json(json)
# print the JSON string representation of the object
print(SoftwareUpdateConfigurationRun.to_json())

# convert the object into a dict
software_update_configuration_run_dict = software_update_configuration_run_instance.to_dict()
# create an instance of SoftwareUpdateConfigurationRun from a dict
software_update_configuration_run_from_dict = SoftwareUpdateConfigurationRun.from_dict(software_update_configuration_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


