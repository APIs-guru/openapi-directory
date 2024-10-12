# FundingTransactionReference38

This section describes information used by the Mastercard and Visa networks to link a funding and payment transaction when both card accounts are Visa accounts or both accounts are Mastercard accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Network on which funding transaction is processed required. Valid values will be provided during partner onboarding. | [optional] 
**reference_number** | **str** | Provide the id from the funding transfer resource.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 * , - . _ ~ ], Length: 1-19 | 

## Example

```python
from openapi_client.models.funding_transaction_reference38 import FundingTransactionReference38

# TODO update the JSON string below
json = "{}"
# create an instance of FundingTransactionReference38 from a JSON string
funding_transaction_reference38_instance = FundingTransactionReference38.from_json(json)
# print the JSON string representation of the object
print(FundingTransactionReference38.to_json())

# convert the object into a dict
funding_transaction_reference38_dict = funding_transaction_reference38_instance.to_dict()
# create an instance of FundingTransactionReference38 from a dict
funding_transaction_reference38_from_dict = FundingTransactionReference38.from_dict(funding_transaction_reference38_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


