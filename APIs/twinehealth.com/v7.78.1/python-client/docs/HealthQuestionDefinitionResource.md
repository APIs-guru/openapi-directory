# HealthQuestionDefinitionResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**HealthQuestionDefinitionResourceAttributes**](HealthQuestionDefinitionResourceAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**HealthQuestionDefinitionResourceLinks**](HealthQuestionDefinitionResourceLinks.md) |  | [optional] 
**relationships** | **object** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.health_question_definition_resource import HealthQuestionDefinitionResource

# TODO update the JSON string below
json = "{}"
# create an instance of HealthQuestionDefinitionResource from a JSON string
health_question_definition_resource_instance = HealthQuestionDefinitionResource.from_json(json)
# print the JSON string representation of the object
print(HealthQuestionDefinitionResource.to_json())

# convert the object into a dict
health_question_definition_resource_dict = health_question_definition_resource_instance.to_dict()
# create an instance of HealthQuestionDefinitionResource from a dict
health_question_definition_resource_from_dict = HealthQuestionDefinitionResource.from_dict(health_question_definition_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


