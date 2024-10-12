# TransactionInfo

[Alpha] Information of a multi-statement transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_id** | **str** | Output only. [Alpha] Id of the transaction. | [optional] [readonly] 

## Example

```python
from openapi_client.models.transaction_info import TransactionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionInfo from a JSON string
transaction_info_instance = TransactionInfo.from_json(json)
# print the JSON string representation of the object
print(TransactionInfo.to_json())

# convert the object into a dict
transaction_info_dict = transaction_info_instance.to_dict()
# create an instance of TransactionInfo from a dict
transaction_info_from_dict = TransactionInfo.from_dict(transaction_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


