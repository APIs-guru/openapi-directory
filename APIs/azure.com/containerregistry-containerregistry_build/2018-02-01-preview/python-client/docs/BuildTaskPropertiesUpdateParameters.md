# BuildTaskPropertiesUpdateParameters

The properties for updating a build task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | The alternative updatable name for a build task. | [optional] 
**platform** | [**PlatformProperties**](PlatformProperties.md) |  | [optional] 
**source_repository** | [**SourceRepositoryUpdateParameters**](SourceRepositoryUpdateParameters.md) |  | [optional] 
**status** | **str** | The current status of build task. | [optional] 
**timeout** | **int** | Build timeout in seconds. | [optional] 

## Example

```python
from openapi_client.models.build_task_properties_update_parameters import BuildTaskPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BuildTaskPropertiesUpdateParameters from a JSON string
build_task_properties_update_parameters_instance = BuildTaskPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(BuildTaskPropertiesUpdateParameters.to_json())

# convert the object into a dict
build_task_properties_update_parameters_dict = build_task_properties_update_parameters_instance.to_dict()
# create an instance of BuildTaskPropertiesUpdateParameters from a dict
build_task_properties_update_parameters_from_dict = BuildTaskPropertiesUpdateParameters.from_dict(build_task_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


