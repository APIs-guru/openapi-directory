# Project

The script project resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | When the script was created. | [optional] 
**creator** | [**GoogleAppsScriptTypeUser**](GoogleAppsScriptTypeUser.md) |  | [optional] 
**last_modify_user** | [**GoogleAppsScriptTypeUser**](GoogleAppsScriptTypeUser.md) |  | [optional] 
**parent_id** | **str** | The parent&#39;s Drive ID that the script will be attached to. This is usually the ID of a Google Document or Google Sheet. This filed is optional, and if not set, a stand-alone script will be created. | [optional] 
**script_id** | **str** | The script project&#39;s Drive ID. | [optional] 
**title** | **str** | The title for the project. | [optional] 
**update_time** | **str** | When the script was last updated. | [optional] 

## Example

```python
from openapi_client.models.project import Project

# TODO update the JSON string below
json = "{}"
# create an instance of Project from a JSON string
project_instance = Project.from_json(json)
# print the JSON string representation of the object
print(Project.to_json())

# convert the object into a dict
project_dict = project_instance.to_dict()
# create an instance of Project from a dict
project_from_dict = Project.from_dict(project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


