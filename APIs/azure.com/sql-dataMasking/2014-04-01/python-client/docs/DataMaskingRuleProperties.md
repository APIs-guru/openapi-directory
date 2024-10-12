# DataMaskingRuleProperties

The properties of a database data masking rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias_name** | **str** | The alias name. This is a legacy parameter and is no longer used. | [optional] 
**column_name** | **str** | The column name on which the data masking rule is applied. | 
**id** | **str** | The rule Id. | [optional] [readonly] 
**masking_function** | **str** | The masking function that is used for the data masking rule. | 
**number_from** | **str** | The numberFrom property of the masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. | [optional] 
**number_to** | **str** | The numberTo property of the data masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored. | [optional] 
**prefix_size** | **str** | If maskingFunction is set to Text, the number of characters to show unmasked in the beginning of the string. Otherwise, this parameter will be ignored. | [optional] 
**replacement_string** | **str** | If maskingFunction is set to Text, the character to use for masking the unexposed part of the string. Otherwise, this parameter will be ignored. | [optional] 
**rule_state** | **str** | The rule state. Used to delete a rule. To delete an existing rule, specify the schemaName, tableName, columnName, maskingFunction, and specify ruleState as disabled. However, if the rule doesn&#39;t already exist, the rule will be created with ruleState set to enabled, regardless of the provided value of ruleState. | [optional] 
**schema_name** | **str** | The schema name on which the data masking rule is applied. | 
**suffix_size** | **str** | If maskingFunction is set to Text, the number of characters to show unmasked at the end of the string. Otherwise, this parameter will be ignored. | [optional] 
**table_name** | **str** | The table name on which the data masking rule is applied. | 

## Example

```python
from openapi_client.models.data_masking_rule_properties import DataMaskingRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataMaskingRuleProperties from a JSON string
data_masking_rule_properties_instance = DataMaskingRuleProperties.from_json(json)
# print the JSON string representation of the object
print(DataMaskingRuleProperties.to_json())

# convert the object into a dict
data_masking_rule_properties_dict = data_masking_rule_properties_instance.to_dict()
# create an instance of DataMaskingRuleProperties from a dict
data_masking_rule_properties_from_dict = DataMaskingRuleProperties.from_dict(data_masking_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


