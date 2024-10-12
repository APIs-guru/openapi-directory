# CasesEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**ended_at** | **datetime** | Ended At | [optional] 
**expected_end_at** | **datetime** | Expected End At | [optional] 
**id** | **str** | Case Identifier | [optional] 
**internal_comments** | **str** | Internal Comments | [optional] 
**is_closed** | **bool** | Is Closed | [optional] 
**is_escalated** | **bool** | Is Escalated | [optional] 
**number** | **str** | Number | [optional] 
**origin** | **str** | Origin | [optional] 
**pipeline_with_stage** | **str** | Pipeline With Stage | [optional] 
**priority** | **str** | Priority | [optional] 
**reason** | **str** | Reason | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**resolution** | **str** | Resolution | [optional] 
**resolution_comments** | **str** | Resolution Comments | [optional] 
**satisfaction** | **str** | Satisfaction | [optional] 
**status** | **str** | Status | [optional] 
**subject** | **str** | Subject | [optional] 
**type** | **str** | Type | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.cases_entity import CasesEntity

# TODO update the JSON string below
json = "{}"
# create an instance of CasesEntity from a JSON string
cases_entity_instance = CasesEntity.from_json(json)
# print the JSON string representation of the object
print(CasesEntity.to_json())

# convert the object into a dict
cases_entity_dict = cases_entity_instance.to_dict()
# create an instance of CasesEntity from a dict
cases_entity_from_dict = CasesEntity.from_dict(cases_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


