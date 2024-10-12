# OBReadBalance1DataBalanceInnerCreditLineInnerAmount

Amount of money of the credit line.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217. | 
**currency** | **str** | A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 \&quot;Codes for the representation of currencies and funds\&quot;. | 

## Example

```python
from openapi_client.models.ob_read_balance1_data_balance_inner_credit_line_inner_amount import OBReadBalance1DataBalanceInnerCreditLineInnerAmount

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadBalance1DataBalanceInnerCreditLineInnerAmount from a JSON string
ob_read_balance1_data_balance_inner_credit_line_inner_amount_instance = OBReadBalance1DataBalanceInnerCreditLineInnerAmount.from_json(json)
# print the JSON string representation of the object
print(OBReadBalance1DataBalanceInnerCreditLineInnerAmount.to_json())

# convert the object into a dict
ob_read_balance1_data_balance_inner_credit_line_inner_amount_dict = ob_read_balance1_data_balance_inner_credit_line_inner_amount_instance.to_dict()
# create an instance of OBReadBalance1DataBalanceInnerCreditLineInnerAmount from a dict
ob_read_balance1_data_balance_inner_credit_line_inner_amount_from_dict = OBReadBalance1DataBalanceInnerCreditLineInnerAmount.from_dict(ob_read_balance1_data_balance_inner_credit_line_inner_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


