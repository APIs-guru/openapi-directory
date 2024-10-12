# TransactionAmount164

Contains the currency of the notification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The currency as an ISO 4217 alpha-3 currency code, in uppercase. Details- alpha, 3 | [optional] 
**value** | **str** | Amount for the transfer in notification. Will default to 5300 if not provided. Details- numeric, 1-999999999999 | [optional] 

## Example

```python
from openapi_client.models.transaction_amount164 import TransactionAmount164

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionAmount164 from a JSON string
transaction_amount164_instance = TransactionAmount164.from_json(json)
# print the JSON string representation of the object
print(TransactionAmount164.to_json())

# convert the object into a dict
transaction_amount164_dict = transaction_amount164_instance.to_dict()
# create an instance of TransactionAmount164 from a dict
transaction_amount164_from_dict = TransactionAmount164.from_dict(transaction_amount164_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


