# BuildTaskProperties

The properties of a build task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | The alternative updatable name for a build task. | 
**creation_date** | **datetime** | The creation date of build task. | [optional] [readonly] 
**platform** | [**PlatformProperties**](PlatformProperties.md) |  | 
**provisioning_state** | **str** | The provisioning state of the build task. | [optional] [readonly] 
**source_repository** | [**SourceRepositoryProperties**](SourceRepositoryProperties.md) |  | 
**status** | **str** | The current status of build task. | [optional] 
**timeout** | **int** | Build timeout in seconds. | [optional] [default to 3600]

## Example

```python
from openapi_client.models.build_task_properties import BuildTaskProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BuildTaskProperties from a JSON string
build_task_properties_instance = BuildTaskProperties.from_json(json)
# print the JSON string representation of the object
print(BuildTaskProperties.to_json())

# convert the object into a dict
build_task_properties_dict = build_task_properties_instance.to_dict()
# create an instance of BuildTaskProperties from a dict
build_task_properties_from_dict = BuildTaskProperties.from_dict(build_task_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


