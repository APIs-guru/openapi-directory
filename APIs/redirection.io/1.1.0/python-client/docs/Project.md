# Project



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complex_rules_count** | **int** |  | [optional] [readonly] 
**complex_rules_updated_at** | **datetime** |  | [optional] [readonly] 
**configuration** | **List[str]** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**current_version** | [**RuleSetVersion**](RuleSetVersion.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**ignore_project_types** | **List[str]** |  | [optional] 
**is_publishing** | **bool** |  | [optional] [readonly] 
**name** | **str** |  | 
**onboarding_completed_demos** | **List[str]** |  | [optional] 
**organization** | [**Organization**](Organization.md) |  | [optional] 
**plan** | **int** |  | [optional] [readonly] 
**rules_hash** | **str** |  | [optional] [readonly] 
**slug** | **str** |  | [optional] [readonly] 
**straight_rules_count** | **int** |  | [optional] [readonly] 
**straight_rules_updated_at** | **datetime** |  | [optional] [readonly] 
**token** | **str** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**user_projects** | [**List[UserProject]**](UserProject.md) |  | [optional] [readonly] 
**users_flattened** | [**List[UserProjectFlattened]**](UserProjectFlattened.md) |  | [optional] [readonly] 
**working_version** | [**RuleSetVersion**](RuleSetVersion.md) |  | [optional] 

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


