# EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex

Rule used to validate strings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusive** | **bool** | Whether the regex matcher is applied exclusively (if true, matching values will be rejected). | [optional] 
**regex** | **str** | The regex applied to the input value(s). | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_param_spec_entry_validation_rule_string_regex import EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex from a JSON string
enterprise_crm_eventbus_proto_param_spec_entry_validation_rule_string_regex_instance = EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_param_spec_entry_validation_rule_string_regex_dict = enterprise_crm_eventbus_proto_param_spec_entry_validation_rule_string_regex_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex from a dict
enterprise_crm_eventbus_proto_param_spec_entry_validation_rule_string_regex_from_dict = EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex.from_dict(enterprise_crm_eventbus_proto_param_spec_entry_validation_rule_string_regex_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


