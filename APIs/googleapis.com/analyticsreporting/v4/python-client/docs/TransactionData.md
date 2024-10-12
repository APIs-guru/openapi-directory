# TransactionData

Represents details collected when the visitor performs a transaction on the page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_id** | **str** | The transaction ID, supplied by the e-commerce tracking method, for the purchase in the shopping cart. | [optional] 
**transaction_revenue** | **float** | The total sale revenue (excluding shipping and tax) of the transaction. | [optional] 
**transaction_shipping** | **float** | Total cost of shipping. | [optional] 
**transaction_tax** | **float** | Total tax for the transaction. | [optional] 

## Example

```python
from openapi_client.models.transaction_data import TransactionData

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionData from a JSON string
transaction_data_instance = TransactionData.from_json(json)
# print the JSON string representation of the object
print(TransactionData.to_json())

# convert the object into a dict
transaction_data_dict = transaction_data_instance.to_dict()
# create an instance of TransactionData from a dict
transaction_data_from_dict = TransactionData.from_dict(transaction_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


