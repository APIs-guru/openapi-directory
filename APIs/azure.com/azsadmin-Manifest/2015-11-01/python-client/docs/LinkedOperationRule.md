# LinkedOperationRule

The linked resource access checks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depends_on_types** | **List[str]** | The list of resource types this rule depends on. | [optional] 
**linked_action** | [**LinkedAction**](LinkedAction.md) |  | [optional] 
**linked_operation** | [**LinkedOperation**](LinkedOperation.md) |  | [optional] 

## Example

```python
from openapi_client.models.linked_operation_rule import LinkedOperationRule

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedOperationRule from a JSON string
linked_operation_rule_instance = LinkedOperationRule.from_json(json)
# print the JSON string representation of the object
print(LinkedOperationRule.to_json())

# convert the object into a dict
linked_operation_rule_dict = linked_operation_rule_instance.to_dict()
# create an instance of LinkedOperationRule from a dict
linked_operation_rule_from_dict = LinkedOperationRule.from_dict(linked_operation_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


