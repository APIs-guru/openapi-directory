# ProjectProperties

The properties of a machine learning project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The immutable id of the team account which contains this project. | [optional] [readonly] 
**creation_date** | **datetime** | The creation date of the project in ISO8601 format. | [optional] [readonly] 
**description** | **str** | The description of this project. | [optional] 
**friendly_name** | **str** | The friendly name for this project. | 
**gitrepo** | **str** | The reference to git repo for this project. | [optional] 
**project_id** | **str** | The immutable id of this project. | [optional] [readonly] 
**provisioning_state** | **str** | The current deployment state of project resource. The provisioningState is to indicate states for resource provisioning. | [optional] [readonly] 
**workspace_id** | **str** | The immutable id of the workspace which contains this project. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_properties import ProjectProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectProperties from a JSON string
project_properties_instance = ProjectProperties.from_json(json)
# print the JSON string representation of the object
print(ProjectProperties.to_json())

# convert the object into a dict
project_properties_dict = project_properties_instance.to_dict()
# create an instance of ProjectProperties from a dict
project_properties_from_dict = ProjectProperties.from_dict(project_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


