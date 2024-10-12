# ProjectListProjectsInner

Information about a single project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friendly_name** | **str** | A descriptive name for this project. A wrapper is used here because friendlyName can be set to the empty string. | [optional] 
**id** | **str** | An opaque ID of this project. | [optional] 
**kind** | **str** | The resource type. | [optional] 
**numeric_id** | **str** | The numeric ID of this project. | [optional] 
**project_reference** | [**ProjectReference**](ProjectReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.project_list_projects_inner import ProjectListProjectsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectListProjectsInner from a JSON string
project_list_projects_inner_instance = ProjectListProjectsInner.from_json(json)
# print the JSON string representation of the object
print(ProjectListProjectsInner.to_json())

# convert the object into a dict
project_list_projects_inner_dict = project_list_projects_inner_instance.to_dict()
# create an instance of ProjectListProjectsInner from a dict
project_list_projects_inner_from_dict = ProjectListProjectsInner.from_dict(project_list_projects_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


