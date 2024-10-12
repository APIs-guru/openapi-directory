# ProjectProperties

Properties of a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessment_solution_id** | **str** | Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects. | [optional] 
**created_timestamp** | **datetime** | Time when this project was created. Date-Time represented in ISO-8601 format. | [optional] [readonly] 
**customer_workspace_id** | **str** | The ARM id of service map workspace created by customer. | [optional] 
**customer_workspace_location** | **str** | Location of service map workspace created by customer. | [optional] 
**last_assessment_timestamp** | **datetime** | Time when last assessment was created. Date-Time represented in ISO-8601 format. This value will be null until assessment is created. | [optional] [readonly] 
**number_of_assessments** | **int** | Number of assessments created in the project. | [optional] [readonly] 
**number_of_groups** | **int** | Number of groups created in the project. | [optional] [readonly] 
**number_of_machines** | **int** | Number of machines in the project. | [optional] [readonly] 
**project_status** | **str** | Assessment project status. | [optional] 
**provisioning_state** | **str** | Provisioning state of the project. | [optional] [readonly] 
**service_endpoint** | **str** | Endpoint at which the collector agent can call agent REST API. | [optional] [readonly] 
**updated_timestamp** | **datetime** | Time when this project was last updated. Date-Time represented in ISO-8601 format. | [optional] [readonly] 

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


