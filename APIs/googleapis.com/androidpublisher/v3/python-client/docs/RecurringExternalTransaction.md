# RecurringExternalTransaction

Represents a transaction that is part of a recurring series of payments. This can be a subscription or a one-time product with multiple payments (such as preorder).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_subscription** | [**ExternalSubscription**](ExternalSubscription.md) |  | [optional] 
**external_transaction_token** | **str** | Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched. Required only for the initial purchase. | [optional] 
**initial_external_transaction_id** | **str** | The external transaction id of the first transaction of this recurring series of transactions. For example, for a subscription this would be the transaction id of the first payment. Required when creating recurring external transactions. | [optional] 
**migrated_transaction_program** | **str** | Input only. Provided during the call to Create. Must only be used when migrating a subscription from manual monthly reporting to automated reporting. | [optional] 

## Example

```python
from openapi_client.models.recurring_external_transaction import RecurringExternalTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringExternalTransaction from a JSON string
recurring_external_transaction_instance = RecurringExternalTransaction.from_json(json)
# print the JSON string representation of the object
print(RecurringExternalTransaction.to_json())

# convert the object into a dict
recurring_external_transaction_dict = recurring_external_transaction_instance.to_dict()
# create an instance of RecurringExternalTransaction from a dict
recurring_external_transaction_from_dict = RecurringExternalTransaction.from_dict(recurring_external_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


