# ProjectSettings

Per-project settings for the Tool Results service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_bucket** | **str** | The name of the Google Cloud Storage bucket to which results are written. By default, this is unset. In update request: optional In response: optional | [optional] 
**name** | **str** | The name of the project&#39;s settings. Always of the form: projects/{project-id}/settings In update request: never set In response: always set | [optional] 

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


