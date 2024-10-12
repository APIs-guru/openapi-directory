# SoftareUpdateConfigurationRunTasks

Software update configuration run tasks model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post_task** | [**SoftareUpdateConfigurationRunTaskProperties**](SoftareUpdateConfigurationRunTaskProperties.md) |  | [optional] 
**pre_task** | [**SoftareUpdateConfigurationRunTaskProperties**](SoftareUpdateConfigurationRunTaskProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.softare_update_configuration_run_tasks import SoftareUpdateConfigurationRunTasks

# TODO update the JSON string below
json = "{}"
# create an instance of SoftareUpdateConfigurationRunTasks from a JSON string
softare_update_configuration_run_tasks_instance = SoftareUpdateConfigurationRunTasks.from_json(json)
# print the JSON string representation of the object
print(SoftareUpdateConfigurationRunTasks.to_json())

# convert the object into a dict
softare_update_configuration_run_tasks_dict = softare_update_configuration_run_tasks_instance.to_dict()
# create an instance of SoftareUpdateConfigurationRunTasks from a dict
softare_update_configuration_run_tasks_from_dict = SoftareUpdateConfigurationRunTasks.from_dict(softare_update_configuration_run_tasks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


