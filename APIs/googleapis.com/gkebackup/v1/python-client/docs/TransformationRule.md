# TransformationRule

A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to transform) and transformation logic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. The description is a user specified string description of the transformation rule. | [optional] 
**field_actions** | [**List[TransformationRuleAction]**](TransformationRuleAction.md) | Required. A list of transformation rule actions to take against candidate resources. Actions are executed in order defined - this order matters, as they could potentially interfere with each other and the first operation could affect the outcome of the second operation. | [optional] 
**resource_filter** | [**ResourceFilter**](ResourceFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.transformation_rule import TransformationRule

# TODO update the JSON string below
json = "{}"
# create an instance of TransformationRule from a JSON string
transformation_rule_instance = TransformationRule.from_json(json)
# print the JSON string representation of the object
print(TransformationRule.to_json())

# convert the object into a dict
transformation_rule_dict = transformation_rule_instance.to_dict()
# create an instance of TransformationRule from a dict
transformation_rule_from_dict = TransformationRule.from_dict(transformation_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


