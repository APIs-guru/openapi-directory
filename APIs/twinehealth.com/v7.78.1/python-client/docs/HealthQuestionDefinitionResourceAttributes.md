# HealthQuestionDefinitionResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category for the health profile definition | [optional] 
**format** | [**HealthQuestionDefinitionResourceAttributesFormat**](HealthQuestionDefinitionResourceAttributesFormat.md) |  | [optional] 
**requirements** | [**List[HealthQuestionDefinitionResourceAttributesRequirementsInner]**](HealthQuestionDefinitionResourceAttributesRequirementsInner.md) | The lsit of age and gender requirements for the question to be included | [optional] 
**text** | **str** | The question text which corresponds to the answer choices | [optional] 

## Example

```python
from openapi_client.models.health_question_definition_resource_attributes import HealthQuestionDefinitionResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of HealthQuestionDefinitionResourceAttributes from a JSON string
health_question_definition_resource_attributes_instance = HealthQuestionDefinitionResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(HealthQuestionDefinitionResourceAttributes.to_json())

# convert the object into a dict
health_question_definition_resource_attributes_dict = health_question_definition_resource_attributes_instance.to_dict()
# create an instance of HealthQuestionDefinitionResourceAttributes from a dict
health_question_definition_resource_attributes_from_dict = HealthQuestionDefinitionResourceAttributes.from_dict(health_question_definition_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


