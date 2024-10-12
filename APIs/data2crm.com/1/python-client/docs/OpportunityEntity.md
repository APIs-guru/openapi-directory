# OpportunityEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**description** | **str** | Description | [optional] 
**ended_at** | **datetime** | Closed At | [optional] 
**expected_amount** | **float** | Expected Amount | [optional] 
**expected_end_at** | **datetime** | Expected End At | [optional] 
**id** | **str** | Opportunity Identifier | [optional] 
**lead_source** | **str** | Lead Source | [optional] 
**name** | **str** | Name | [optional] 
**next_step** | **str** | Next Step | [optional] 
**pipeline_with_stage** | **str** | Pipeline With Stage | [optional] 
**probability** | **int** | Probability | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**state** | **str** | State | [optional] 
**type** | **str** | Type | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.opportunity_entity import OpportunityEntity

# TODO update the JSON string below
json = "{}"
# create an instance of OpportunityEntity from a JSON string
opportunity_entity_instance = OpportunityEntity.from_json(json)
# print the JSON string representation of the object
print(OpportunityEntity.to_json())

# convert the object into a dict
opportunity_entity_dict = opportunity_entity_instance.to_dict()
# create an instance of OpportunityEntity from a dict
opportunity_entity_from_dict = OpportunityEntity.from_dict(opportunity_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


