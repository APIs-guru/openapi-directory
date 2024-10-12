# ResponsePolicyRuleLocalData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_datas** | [**List[ResourceRecordSet]**](ResourceRecordSet.md) | All resource record sets for this selector, one per resource record type. The name must match the dns_name. | [optional] 

## Example

```python
from openapi_client.models.response_policy_rule_local_data import ResponsePolicyRuleLocalData

# TODO update the JSON string below
json = "{}"
# create an instance of ResponsePolicyRuleLocalData from a JSON string
response_policy_rule_local_data_instance = ResponsePolicyRuleLocalData.from_json(json)
# print the JSON string representation of the object
print(ResponsePolicyRuleLocalData.to_json())

# convert the object into a dict
response_policy_rule_local_data_dict = response_policy_rule_local_data_instance.to_dict()
# create an instance of ResponsePolicyRuleLocalData from a dict
response_policy_rule_local_data_from_dict = ResponsePolicyRuleLocalData.from_dict(response_policy_rule_local_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


