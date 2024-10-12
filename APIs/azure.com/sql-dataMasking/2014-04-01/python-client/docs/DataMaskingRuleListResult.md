# DataMaskingRuleListResult

The response to a list data masking rules request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DataMaskingRule]**](DataMaskingRule.md) | The list of database data masking rules. | [optional] 

## Example

```python
from openapi_client.models.data_masking_rule_list_result import DataMaskingRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataMaskingRuleListResult from a JSON string
data_masking_rule_list_result_instance = DataMaskingRuleListResult.from_json(json)
# print the JSON string representation of the object
print(DataMaskingRuleListResult.to_json())

# convert the object into a dict
data_masking_rule_list_result_dict = data_masking_rule_list_result_instance.to_dict()
# create an instance of DataMaskingRuleListResult from a dict
data_masking_rule_list_result_from_dict = DataMaskingRuleListResult.from_dict(data_masking_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


