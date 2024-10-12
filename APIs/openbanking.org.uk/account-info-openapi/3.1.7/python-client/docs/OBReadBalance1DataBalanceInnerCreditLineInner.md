# OBReadBalance1DataBalanceInnerCreditLineInner

Set of elements used to provide details on the credit line.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**OBReadBalance1DataBalanceInnerCreditLineInnerAmount**](OBReadBalance1DataBalanceInnerCreditLineInnerAmount.md) |  | [optional] 
**included** | **bool** | Indicates whether or not the credit line is included in the balance of the account. Usage: If not present, credit line is not included in the balance amount of the account. | 
**type** | **str** | Limit type, in a coded form. | [optional] 

## Example

```python
from openapi_client.models.ob_read_balance1_data_balance_inner_credit_line_inner import OBReadBalance1DataBalanceInnerCreditLineInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadBalance1DataBalanceInnerCreditLineInner from a JSON string
ob_read_balance1_data_balance_inner_credit_line_inner_instance = OBReadBalance1DataBalanceInnerCreditLineInner.from_json(json)
# print the JSON string representation of the object
print(OBReadBalance1DataBalanceInnerCreditLineInner.to_json())

# convert the object into a dict
ob_read_balance1_data_balance_inner_credit_line_inner_dict = ob_read_balance1_data_balance_inner_credit_line_inner_instance.to_dict()
# create an instance of OBReadBalance1DataBalanceInnerCreditLineInner from a dict
ob_read_balance1_data_balance_inner_credit_line_inner_from_dict = OBReadBalance1DataBalanceInnerCreditLineInner.from_dict(ob_read_balance1_data_balance_inner_credit_line_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


