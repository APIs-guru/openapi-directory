# HealthQuestionDefinitionResourceAttributesRequirementsInner

The age and gender requirement for the question to be included

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_property** | **str** |  | [optional] 
**should_be_equal** | **bool** | Specifies if the value in property should be equal to the one in value | [optional] 
**should_be_greater_than** | **float** | Specifies if the value in property should be greater than the one in value | [optional] 
**should_be_less_than** | **float** | Specifies if the value in property should be less than the one in value | [optional] 
**value** | **str** | The value to be compared with the one in property, based on shouldBeEqual, shouldBeGreaterThan, or shouldBeLessThan | [optional] 

## Example

```python
from openapi_client.models.health_question_definition_resource_attributes_requirements_inner import HealthQuestionDefinitionResourceAttributesRequirementsInner

# TODO update the JSON string below
json = "{}"
# create an instance of HealthQuestionDefinitionResourceAttributesRequirementsInner from a JSON string
health_question_definition_resource_attributes_requirements_inner_instance = HealthQuestionDefinitionResourceAttributesRequirementsInner.from_json(json)
# print the JSON string representation of the object
print(HealthQuestionDefinitionResourceAttributesRequirementsInner.to_json())

# convert the object into a dict
health_question_definition_resource_attributes_requirements_inner_dict = health_question_definition_resource_attributes_requirements_inner_instance.to_dict()
# create an instance of HealthQuestionDefinitionResourceAttributesRequirementsInner from a dict
health_question_definition_resource_attributes_requirements_inner_from_dict = HealthQuestionDefinitionResourceAttributesRequirementsInner.from_dict(health_question_definition_resource_attributes_requirements_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


