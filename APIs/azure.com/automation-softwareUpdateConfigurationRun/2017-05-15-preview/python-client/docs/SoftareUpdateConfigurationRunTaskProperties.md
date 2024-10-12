# SoftareUpdateConfigurationRunTaskProperties

Task properties of the software update configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | The job id of the task. | [optional] 
**source** | **str** | The name of the source of the task. | [optional] 
**status** | **str** | The status of the task. | [optional] 

## Example

```python
from openapi_client.models.softare_update_configuration_run_task_properties import SoftareUpdateConfigurationRunTaskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SoftareUpdateConfigurationRunTaskProperties from a JSON string
softare_update_configuration_run_task_properties_instance = SoftareUpdateConfigurationRunTaskProperties.from_json(json)
# print the JSON string representation of the object
print(SoftareUpdateConfigurationRunTaskProperties.to_json())

# convert the object into a dict
softare_update_configuration_run_task_properties_dict = softare_update_configuration_run_task_properties_instance.to_dict()
# create an instance of SoftareUpdateConfigurationRunTaskProperties from a dict
softare_update_configuration_run_task_properties_from_dict = SoftareUpdateConfigurationRunTaskProperties.from_dict(softare_update_configuration_run_task_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


