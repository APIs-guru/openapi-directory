# TransactionSelector

This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin** | [**TransactionOptions**](TransactionOptions.md) |  | [optional] 
**id** | **bytearray** | Execute the read or SQL query in a previously-started transaction. | [optional] 
**single_use** | [**TransactionOptions**](TransactionOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.transaction_selector import TransactionSelector

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionSelector from a JSON string
transaction_selector_instance = TransactionSelector.from_json(json)
# print the JSON string representation of the object
print(TransactionSelector.to_json())

# convert the object into a dict
transaction_selector_dict = transaction_selector_instance.to_dict()
# create an instance of TransactionSelector from a dict
transaction_selector_from_dict = TransactionSelector.from_dict(transaction_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


