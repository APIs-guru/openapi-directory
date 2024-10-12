# CreditBalanceSummary

Summary of credit balances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_balance** | [**Amount**](Amount.md) |  | [optional] 
**estimated_balance** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.credit_balance_summary import CreditBalanceSummary

# TODO update the JSON string below
json = "{}"
# create an instance of CreditBalanceSummary from a JSON string
credit_balance_summary_instance = CreditBalanceSummary.from_json(json)
# print the JSON string representation of the object
print(CreditBalanceSummary.to_json())

# convert the object into a dict
credit_balance_summary_dict = credit_balance_summary_instance.to_dict()
# create an instance of CreditBalanceSummary from a dict
credit_balance_summary_from_dict = CreditBalanceSummary.from_dict(credit_balance_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


