# SetupTask

Specifies a setup task which can be used to customize the compute nodes of the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line** | **str** |  | 
**environment_variables** | [**List[EnvironmentSetting]**](EnvironmentSetting.md) |  | [optional] 
**run_elevated** | **bool** |  | [optional] [default to False]
**std_out_err_path_prefix** | **str** | The path where the Batch AI service will upload the stdout and stderror of setup task. | 

## Example

```python
from openapi_client.models.setup_task import SetupTask

# TODO update the JSON string below
json = "{}"
# create an instance of SetupTask from a JSON string
setup_task_instance = SetupTask.from_json(json)
# print the JSON string representation of the object
print(SetupTask.to_json())

# convert the object into a dict
setup_task_dict = setup_task_instance.to_dict()
# create an instance of SetupTask from a dict
setup_task_from_dict = SetupTask.from_dict(setup_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


