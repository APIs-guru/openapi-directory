# OneTimeExternalTransaction

Represents a one-time transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_transaction_token** | **str** | Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched. | [optional] 

## Example

```python
from openapi_client.models.one_time_external_transaction import OneTimeExternalTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of OneTimeExternalTransaction from a JSON string
one_time_external_transaction_instance = OneTimeExternalTransaction.from_json(json)
# print the JSON string representation of the object
print(OneTimeExternalTransaction.to_json())

# convert the object into a dict
one_time_external_transaction_dict = one_time_external_transaction_instance.to_dict()
# create an instance of OneTimeExternalTransaction from a dict
one_time_external_transaction_from_dict = OneTimeExternalTransaction.from_dict(one_time_external_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


