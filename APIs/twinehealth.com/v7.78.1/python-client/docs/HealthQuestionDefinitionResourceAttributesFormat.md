# HealthQuestionDefinitionResourceAttributesFormat

The list of formats for the health profile definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[HealthQuestionDefinitionResourceAttributesFormatDataInner]**](HealthQuestionDefinitionResourceAttributesFormatDataInner.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.health_question_definition_resource_attributes_format import HealthQuestionDefinitionResourceAttributesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of HealthQuestionDefinitionResourceAttributesFormat from a JSON string
health_question_definition_resource_attributes_format_instance = HealthQuestionDefinitionResourceAttributesFormat.from_json(json)
# print the JSON string representation of the object
print(HealthQuestionDefinitionResourceAttributesFormat.to_json())

# convert the object into a dict
health_question_definition_resource_attributes_format_dict = health_question_definition_resource_attributes_format_instance.to_dict()
# create an instance of HealthQuestionDefinitionResourceAttributesFormat from a dict
health_question_definition_resource_attributes_format_from_dict = HealthQuestionDefinitionResourceAttributesFormat.from_dict(health_question_definition_resource_attributes_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


