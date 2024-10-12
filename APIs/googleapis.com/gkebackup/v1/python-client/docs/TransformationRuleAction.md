# TransformationRuleAction

TransformationRuleAction defines a TransformationRule action based on the JSON Patch RFC (https://www.rfc-editor.org/rfc/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_path** | **str** | Optional. A string containing a JSON Pointer value that references the location in the target document to move the value from. | [optional] 
**op** | **str** | Required. op specifies the operation to perform. | [optional] 
**path** | **str** | Optional. A string containing a JSON-Pointer value that references a location within the target document where the operation is performed. | [optional] 
**value** | **str** | Optional. A string that specifies the desired value in string format to use for transformation. | [optional] 

## Example

```python
from openapi_client.models.transformation_rule_action import TransformationRuleAction

# TODO update the JSON string below
json = "{}"
# create an instance of TransformationRuleAction from a JSON string
transformation_rule_action_instance = TransformationRuleAction.from_json(json)
# print the JSON string representation of the object
print(TransformationRuleAction.to_json())

# convert the object into a dict
transformation_rule_action_dict = transformation_rule_action_instance.to_dict()
# create an instance of TransformationRuleAction from a dict
transformation_rule_action_from_dict = TransformationRuleAction.from_dict(transformation_rule_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


