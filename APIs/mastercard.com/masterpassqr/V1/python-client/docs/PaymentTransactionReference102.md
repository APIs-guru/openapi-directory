# PaymentTransactionReference102

This section describes information used by the Mastercard and Visa networks to link a funding and payment transaction when both card accounts are Visa accounts or both accounts are Mastercard accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Network on which payment transaction is processed is required. Valid values will be provided during partner onboarding. | [optional] 
**reference_number** | **str** | Unique reference number for the transaction. Type: Alphanumeric Special [a-zA-Z0-9* , - . _ ~ ], Length:19 | 

## Example

```python
from openapi_client.models.payment_transaction_reference102 import PaymentTransactionReference102

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentTransactionReference102 from a JSON string
payment_transaction_reference102_instance = PaymentTransactionReference102.from_json(json)
# print the JSON string representation of the object
print(PaymentTransactionReference102.to_json())

# convert the object into a dict
payment_transaction_reference102_dict = payment_transaction_reference102_instance.to_dict()
# create an instance of PaymentTransactionReference102 from a dict
payment_transaction_reference102_from_dict = PaymentTransactionReference102.from_dict(payment_transaction_reference102_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


