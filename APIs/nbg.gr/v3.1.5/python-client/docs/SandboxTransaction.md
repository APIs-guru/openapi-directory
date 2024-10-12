# SandboxTransaction

Transaction information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounting_balance** | **float** | Balance | [optional] 
**amount** | **float** | Amount | [optional] 
**booking_date_time** | **datetime** | Booking date time | [optional] 
**credit_debit** | **str** | Credit / Debit indicator | [optional] 
**currency** | **str** | Currency (EUR, USD ...) | [optional] 
**description** | **str** | Description | [optional] 
**reference** | **str** | Transaction reference | [optional] 
**related_account** | **str** | Related account | [optional] 
**related_name** | **str** | Related account | [optional] 
**transaction_code** | **str** | Transaction code | [optional] 
**value_date_time** | **datetime** | Valeur | [optional] 

## Example

```python
from openapi_client.models.sandbox_transaction import SandboxTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxTransaction from a JSON string
sandbox_transaction_instance = SandboxTransaction.from_json(json)
# print the JSON string representation of the object
print(SandboxTransaction.to_json())

# convert the object into a dict
sandbox_transaction_dict = sandbox_transaction_instance.to_dict()
# create an instance of SandboxTransaction from a dict
sandbox_transaction_from_dict = SandboxTransaction.from_dict(sandbox_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


