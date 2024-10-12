# ProjectRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complex_rules_count** | **int** |  | [optional] [readonly] 
**complex_rules_updated_at** | **datetime** |  | [optional] [readonly] 
**configuration** | **List[str]** |  | [optional] [readonly] 
**created_at** | **datetime** |  | [optional] [readonly] 
**current_version** | [**RuleSetVersionRead**](RuleSetVersionRead.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**ignore_project_types** | **List[str]** |  | [optional] 
**is_publishing** | **bool** |  | [optional] [readonly] 
**name** | **str** |  | 
**onboarding_completed_demos** | **List[str]** |  | [optional] 
**organization** | [**OrganizationRead**](OrganizationRead.md) |  | [optional] 
**plan** | **int** |  | [optional] [readonly] 
**rules_hash** | **str** |  | [optional] [readonly] 
**slug** | **str** |  | [optional] [readonly] 
**straight_rules_count** | **int** |  | [optional] [readonly] 
**straight_rules_updated_at** | **datetime** |  | [optional] [readonly] 
**token** | **str** |  | [optional] [readonly] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**user_projects** | [**List[UserProjectRead]**](UserProjectRead.md) |  | [optional] [readonly] 
**users_flattened** | [**List[UserProjectFlattenedRead]**](UserProjectFlattenedRead.md) |  | [optional] [readonly] 
**working_version** | [**RuleSetVersionRead**](RuleSetVersionRead.md) |  | [optional] 

## Example

```python
from openapi_client.models.project_read import ProjectRead

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectRead from a JSON string
project_read_instance = ProjectRead.from_json(json)
# print the JSON string representation of the object
print(ProjectRead.to_json())

# convert the object into a dict
project_read_dict = project_read_instance.to_dict()
# create an instance of ProjectRead from a dict
project_read_from_dict = ProjectRead.from_dict(project_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


