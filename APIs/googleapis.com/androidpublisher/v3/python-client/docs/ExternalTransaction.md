# ExternalTransaction

The details of an external transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when this transaction was created. This is the time when Google was notified of the transaction. | [optional] [readonly] 
**current_pre_tax_amount** | [**Price**](Price.md) |  | [optional] 
**current_tax_amount** | [**Price**](Price.md) |  | [optional] 
**external_transaction_id** | **str** | Output only. The id of this transaction. All transaction ids under the same package name must be unique. Set when creating the external transaction. | [optional] [readonly] 
**one_time_transaction** | [**OneTimeExternalTransaction**](OneTimeExternalTransaction.md) |  | [optional] 
**original_pre_tax_amount** | [**Price**](Price.md) |  | [optional] 
**original_tax_amount** | [**Price**](Price.md) |  | [optional] 
**package_name** | **str** | Output only. The resource name of the external transaction. The package name of the application the inapp products were sold (for example, &#39;com.some.app&#39;). | [optional] [readonly] 
**recurring_transaction** | [**RecurringExternalTransaction**](RecurringExternalTransaction.md) |  | [optional] 
**test_purchase** | **object** | Represents a transaction performed using a test account. These transactions will not be charged by Google. | [optional] 
**transaction_state** | **str** | Output only. The current state of the transaction. | [optional] [readonly] 
**transaction_time** | **str** | Required. The time when the transaction was completed. | [optional] 
**user_tax_address** | [**ExternalTransactionAddress**](ExternalTransactionAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.external_transaction import ExternalTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalTransaction from a JSON string
external_transaction_instance = ExternalTransaction.from_json(json)
# print the JSON string representation of the object
print(ExternalTransaction.to_json())

# convert the object into a dict
external_transaction_dict = external_transaction_instance.to_dict()
# create an instance of ExternalTransaction from a dict
external_transaction_from_dict = ExternalTransaction.from_dict(external_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


