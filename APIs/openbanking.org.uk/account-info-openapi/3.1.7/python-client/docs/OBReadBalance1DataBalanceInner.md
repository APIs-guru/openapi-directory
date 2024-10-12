# OBReadBalance1DataBalanceInner

Set of elements used to define the balance details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. | 
**amount** | [**OBReadBalance1DataBalanceInnerAmount**](OBReadBalance1DataBalanceInnerAmount.md) |  | 
**credit_debit_indicator** | [**OBCreditDebitCode2**](OBCreditDebitCode2.md) |  | 
**credit_line** | [**List[OBReadBalance1DataBalanceInnerCreditLineInner]**](OBReadBalance1DataBalanceInnerCreditLineInner.md) |  | [optional] 
**date_time** | **datetime** | Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**type** | [**OBBalanceType1Code**](OBBalanceType1Code.md) |  | 

## Example

```python
from openapi_client.models.ob_read_balance1_data_balance_inner import OBReadBalance1DataBalanceInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadBalance1DataBalanceInner from a JSON string
ob_read_balance1_data_balance_inner_instance = OBReadBalance1DataBalanceInner.from_json(json)
# print the JSON string representation of the object
print(OBReadBalance1DataBalanceInner.to_json())

# convert the object into a dict
ob_read_balance1_data_balance_inner_dict = ob_read_balance1_data_balance_inner_instance.to_dict()
# create an instance of OBReadBalance1DataBalanceInner from a dict
ob_read_balance1_data_balance_inner_from_dict = OBReadBalance1DataBalanceInner.from_dict(ob_read_balance1_data_balance_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


