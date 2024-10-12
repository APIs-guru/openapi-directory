# HealthProfileAnswerResourceAttributesLatest

The details of the latest answer for a health profile question

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** | The id of the patient or coach who answered the health profile question | [optional] 
**answered_at** | **str** | The date when the health profile question is answered | [optional] 
**value** | **str** | The value of the answer entered for the health profile question | [optional] 

## Example

```python
from openapi_client.models.health_profile_answer_resource_attributes_latest import HealthProfileAnswerResourceAttributesLatest

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileAnswerResourceAttributesLatest from a JSON string
health_profile_answer_resource_attributes_latest_instance = HealthProfileAnswerResourceAttributesLatest.from_json(json)
# print the JSON string representation of the object
print(HealthProfileAnswerResourceAttributesLatest.to_json())

# convert the object into a dict
health_profile_answer_resource_attributes_latest_dict = health_profile_answer_resource_attributes_latest_instance.to_dict()
# create an instance of HealthProfileAnswerResourceAttributesLatest from a dict
health_profile_answer_resource_attributes_latest_from_dict = HealthProfileAnswerResourceAttributesLatest.from_dict(health_profile_answer_resource_attributes_latest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


