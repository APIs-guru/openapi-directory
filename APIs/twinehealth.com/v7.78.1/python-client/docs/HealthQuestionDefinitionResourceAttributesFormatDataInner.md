# HealthQuestionDefinitionResourceAttributesFormatDataInner

The label, value and icon for the answer choices for the question

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.health_question_definition_resource_attributes_format_data_inner import HealthQuestionDefinitionResourceAttributesFormatDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of HealthQuestionDefinitionResourceAttributesFormatDataInner from a JSON string
health_question_definition_resource_attributes_format_data_inner_instance = HealthQuestionDefinitionResourceAttributesFormatDataInner.from_json(json)
# print the JSON string representation of the object
print(HealthQuestionDefinitionResourceAttributesFormatDataInner.to_json())

# convert the object into a dict
health_question_definition_resource_attributes_format_data_inner_dict = health_question_definition_resource_attributes_format_data_inner_instance.to_dict()
# create an instance of HealthQuestionDefinitionResourceAttributesFormatDataInner from a dict
health_question_definition_resource_attributes_format_data_inner_from_dict = HealthQuestionDefinitionResourceAttributesFormatDataInner.from_dict(health_question_definition_resource_attributes_format_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


