# ProjectEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Body | [optional] 
**ended_at** | **datetime** | Ended At | [optional] 
**id** | **str** | Project Identifier | [optional] 
**name** | **str** | Name | [optional] 
**pipeline_with_stage** | **str** | Pipeline With Stage | [optional] 
**priority** | **str** | Priority | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**started_at** | **datetime** | Started At | [optional] 
**status** | **str** | Status | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.project_entity import ProjectEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectEntity from a JSON string
project_entity_instance = ProjectEntity.from_json(json)
# print the JSON string representation of the object
print(ProjectEntity.to_json())

# convert the object into a dict
project_entity_dict = project_entity_instance.to_dict()
# create an instance of ProjectEntity from a dict
project_entity_from_dict = ProjectEntity.from_dict(project_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


