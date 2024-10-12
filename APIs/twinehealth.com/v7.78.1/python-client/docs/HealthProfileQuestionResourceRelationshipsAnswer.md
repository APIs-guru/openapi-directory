# HealthProfileQuestionResourceRelationshipsAnswer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActionResourceRelationshipsPlanData**](ActionResourceRelationshipsPlanData.md) |  | [optional] 
**links** | [**HealthProfileQuestionResourceRelationshipsAnswerLinks**](HealthProfileQuestionResourceRelationshipsAnswerLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.health_profile_question_resource_relationships_answer import HealthProfileQuestionResourceRelationshipsAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileQuestionResourceRelationshipsAnswer from a JSON string
health_profile_question_resource_relationships_answer_instance = HealthProfileQuestionResourceRelationshipsAnswer.from_json(json)
# print the JSON string representation of the object
print(HealthProfileQuestionResourceRelationshipsAnswer.to_json())

# convert the object into a dict
health_profile_question_resource_relationships_answer_dict = health_profile_question_resource_relationships_answer_instance.to_dict()
# create an instance of HealthProfileQuestionResourceRelationshipsAnswer from a dict
health_profile_question_resource_relationships_answer_from_dict = HealthProfileQuestionResourceRelationshipsAnswer.from_dict(health_profile_question_resource_relationships_answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


