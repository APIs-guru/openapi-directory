# EnterpriseCrmEventbusProtoParamSpecEntryValidationRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**double_range** | [**EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange**](EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange.md) |  | [optional] 
**int_range** | [**EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange**](EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange.md) |  | [optional] 
**string_regex** | [**EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex**](EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_param_spec_entry_validation_rule import EnterpriseCrmEventbusProtoParamSpecEntryValidationRule

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoParamSpecEntryValidationRule from a JSON string
enterprise_crm_eventbus_proto_param_spec_entry_validation_rule_instance = EnterpriseCrmEventbusProtoParamSpecEntryValidationRule.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoParamSpecEntryValidationRule.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_param_spec_entry_validation_rule_dict = enterprise_crm_eventbus_proto_param_spec_entry_validation_rule_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoParamSpecEntryValidationRule from a dict
enterprise_crm_eventbus_proto_param_spec_entry_validation_rule_from_dict = EnterpriseCrmEventbusProtoParamSpecEntryValidationRule.from_dict(enterprise_crm_eventbus_proto_param_spec_entry_validation_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


