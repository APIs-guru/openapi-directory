# SoftwareUpdateConfigurationTasks

Task properties of the software update configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post_task** | [**TaskProperties**](TaskProperties.md) |  | [optional] 
**pre_task** | [**TaskProperties**](TaskProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.software_update_configuration_tasks import SoftwareUpdateConfigurationTasks

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareUpdateConfigurationTasks from a JSON string
software_update_configuration_tasks_instance = SoftwareUpdateConfigurationTasks.from_json(json)
# print the JSON string representation of the object
print(SoftwareUpdateConfigurationTasks.to_json())

# convert the object into a dict
software_update_configuration_tasks_dict = software_update_configuration_tasks_instance.to_dict()
# create an instance of SoftwareUpdateConfigurationTasks from a dict
software_update_configuration_tasks_from_dict = SoftwareUpdateConfigurationTasks.from_dict(software_update_configuration_tasks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


