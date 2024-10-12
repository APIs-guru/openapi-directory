# HealthProfileQuestionResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | [**HealthProfileQuestionResourceRelationshipsAnswer**](HealthProfileQuestionResourceRelationshipsAnswer.md) |  | [optional] 
**profile** | [**HealthProfileQuestionResourceRelationshipsProfile**](HealthProfileQuestionResourceRelationshipsProfile.md) |  | [optional] 
**question_definition** | [**HealthProfileQuestionResourceRelationshipsQuestionDefinition**](HealthProfileQuestionResourceRelationshipsQuestionDefinition.md) |  | [optional] 

## Example

```python
from openapi_client.models.health_profile_question_resource_relationships import HealthProfileQuestionResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileQuestionResourceRelationships from a JSON string
health_profile_question_resource_relationships_instance = HealthProfileQuestionResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(HealthProfileQuestionResourceRelationships.to_json())

# convert the object into a dict
health_profile_question_resource_relationships_dict = health_profile_question_resource_relationships_instance.to_dict()
# create an instance of HealthProfileQuestionResourceRelationships from a dict
health_profile_question_resource_relationships_from_dict = HealthProfileQuestionResourceRelationships.from_dict(health_profile_question_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


