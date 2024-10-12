# LinkedOperationRuleList

List of the linked operation rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[LinkedOperationRule]**](LinkedOperationRule.md) | List of the linked operation rules. | [optional] 

## Example

```python
from openapi_client.models.linked_operation_rule_list import LinkedOperationRuleList

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedOperationRuleList from a JSON string
linked_operation_rule_list_instance = LinkedOperationRuleList.from_json(json)
# print the JSON string representation of the object
print(LinkedOperationRuleList.to_json())

# convert the object into a dict
linked_operation_rule_list_dict = linked_operation_rule_list_instance.to_dict()
# create an instance of LinkedOperationRuleList from a dict
linked_operation_rule_list_from_dict = LinkedOperationRuleList.from_dict(linked_operation_rule_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


