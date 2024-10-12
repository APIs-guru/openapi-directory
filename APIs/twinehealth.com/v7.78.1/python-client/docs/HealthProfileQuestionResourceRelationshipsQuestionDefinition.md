# HealthProfileQuestionResourceRelationshipsQuestionDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActionResourceRelationshipsPlanData**](ActionResourceRelationshipsPlanData.md) |  | [optional] 
**links** | [**HealthProfileQuestionResourceRelationshipsQuestionDefinitionLinks**](HealthProfileQuestionResourceRelationshipsQuestionDefinitionLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.health_profile_question_resource_relationships_question_definition import HealthProfileQuestionResourceRelationshipsQuestionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileQuestionResourceRelationshipsQuestionDefinition from a JSON string
health_profile_question_resource_relationships_question_definition_instance = HealthProfileQuestionResourceRelationshipsQuestionDefinition.from_json(json)
# print the JSON string representation of the object
print(HealthProfileQuestionResourceRelationshipsQuestionDefinition.to_json())

# convert the object into a dict
health_profile_question_resource_relationships_question_definition_dict = health_profile_question_resource_relationships_question_definition_instance.to_dict()
# create an instance of HealthProfileQuestionResourceRelationshipsQuestionDefinition from a dict
health_profile_question_resource_relationships_question_definition_from_dict = HealthProfileQuestionResourceRelationshipsQuestionDefinition.from_dict(health_profile_question_resource_relationships_question_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


