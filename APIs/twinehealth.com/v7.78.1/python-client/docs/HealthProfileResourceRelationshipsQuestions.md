# HealthProfileResourceRelationshipsQuestions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ActionResourceRelationshipsPlanData]**](ActionResourceRelationshipsPlanData.md) |  | [optional] 
**links** | [**HealthProfileResourceRelationshipsQuestionsLinks**](HealthProfileResourceRelationshipsQuestionsLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.health_profile_resource_relationships_questions import HealthProfileResourceRelationshipsQuestions

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileResourceRelationshipsQuestions from a JSON string
health_profile_resource_relationships_questions_instance = HealthProfileResourceRelationshipsQuestions.from_json(json)
# print the JSON string representation of the object
print(HealthProfileResourceRelationshipsQuestions.to_json())

# convert the object into a dict
health_profile_resource_relationships_questions_dict = health_profile_resource_relationships_questions_instance.to_dict()
# create an instance of HealthProfileResourceRelationshipsQuestions from a dict
health_profile_resource_relationships_questions_from_dict = HealthProfileResourceRelationshipsQuestions.from_dict(health_profile_resource_relationships_questions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


