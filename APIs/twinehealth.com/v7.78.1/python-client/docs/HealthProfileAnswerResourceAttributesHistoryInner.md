# HealthProfileAnswerResourceAttributesHistoryInner

The details of a previous answer for a health profile question

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** | The id of the patient or coach who answered the health profile question | [optional] 
**answered_at** | **str** | The date when the health profile question is answered | [optional] 
**value** | **str** | The value of the answer entered for the health profile question | [optional] 

## Example

```python
from openapi_client.models.health_profile_answer_resource_attributes_history_inner import HealthProfileAnswerResourceAttributesHistoryInner

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileAnswerResourceAttributesHistoryInner from a JSON string
health_profile_answer_resource_attributes_history_inner_instance = HealthProfileAnswerResourceAttributesHistoryInner.from_json(json)
# print the JSON string representation of the object
print(HealthProfileAnswerResourceAttributesHistoryInner.to_json())

# convert the object into a dict
health_profile_answer_resource_attributes_history_inner_dict = health_profile_answer_resource_attributes_history_inner_instance.to_dict()
# create an instance of HealthProfileAnswerResourceAttributesHistoryInner from a dict
health_profile_answer_resource_attributes_history_inner_from_dict = HealthProfileAnswerResourceAttributesHistoryInner.from_dict(health_profile_answer_resource_attributes_history_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


