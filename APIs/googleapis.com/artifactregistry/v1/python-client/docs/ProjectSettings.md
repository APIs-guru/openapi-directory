# ProjectSettings

The Artifact Registry settings that apply to a Project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legacy_redirection_state** | **str** | The redirection state of the legacy repositories in this project. | [optional] 
**name** | **str** | The name of the project&#39;s settings. Always of the form: projects/{project-id}/projectSettings In update request: never set In response: always set | [optional] 

## Example

```python
from openapi_client.models.project_settings import ProjectSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectSettings from a JSON string
project_settings_instance = ProjectSettings.from_json(json)
# print the JSON string representation of the object
print(ProjectSettings.to_json())

# convert the object into a dict
project_settings_dict = project_settings_instance.to_dict()
# create an instance of ProjectSettings from a dict
project_settings_from_dict = ProjectSettings.from_dict(project_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


