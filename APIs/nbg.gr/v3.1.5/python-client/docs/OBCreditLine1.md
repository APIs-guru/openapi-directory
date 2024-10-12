# OBCreditLine1



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**OBActiveOrHistoricCurrencyAndAmount**](OBActiveOrHistoricCurrencyAndAmount.md) |  | [optional] 
**included** | **bool** | Indicates whether or not the credit line is included in the balance of the account.  Usage: If not present, credit line is not included in the balance amount of the account. | 
**type** | [**OBExternalLimitType1Code**](OBExternalLimitType1Code.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_credit_line1 import OBCreditLine1

# TODO update the JSON string below
json = "{}"
# create an instance of OBCreditLine1 from a JSON string
ob_credit_line1_instance = OBCreditLine1.from_json(json)
# print the JSON string representation of the object
print(OBCreditLine1.to_json())

# convert the object into a dict
ob_credit_line1_dict = ob_credit_line1_instance.to_dict()
# create an instance of OBCreditLine1 from a dict
ob_credit_line1_from_dict = OBCreditLine1.from_dict(ob_credit_line1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


