# DataMaskingRule

Represents a database data masking rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of Data Masking Rule. Metadata, used for Azure portal. | [optional] [readonly] 
**location** | **str** | The location of the data masking rule. | [optional] [readonly] 
**properties** | [**DataMaskingRuleProperties**](DataMaskingRuleProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_masking_rule import DataMaskingRule

# TODO update the JSON string below
json = "{}"
# create an instance of DataMaskingRule from a JSON string
data_masking_rule_instance = DataMaskingRule.from_json(json)
# print the JSON string representation of the object
print(DataMaskingRule.to_json())

# convert the object into a dict
data_masking_rule_dict = data_masking_rule_instance.to_dict()
# create an instance of DataMaskingRule from a dict
data_masking_rule_from_dict = DataMaskingRule.from_dict(data_masking_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


