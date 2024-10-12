# Transaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjusted_by** | [**List[Adjustment]**](Adjustment.md) |  | [optional] 
**amount** | **float** |  | [optional] 
**approved** | **bool** |  | [optional] 
**auth_code** | **str** |  | [optional] 
**batch_number** | **str** |  | [optional] 
**billing** | [**Address**](Address.md) |  | [optional] 
**card** | [**CardGetTransactionResponse**](CardGetTransactionResponse.md) |  | [optional] 
**comments** | **str** |  | [optional] 
**created** | **str** | The date it was created &#39;2015-04-22T10:03:19.323-07:00&#39; | [optional] 
**custom** | [**Custom**](Custom.md) |  | [optional] 
**id** | **float** |  | [optional] 
**links** | [**List[Link]**](Link.md) |  | [optional] 
**message** | **str** |  | [optional] 
**message_id** | **float** |  | [optional] 
**order_number** | **str** |  | [optional] 
**payment_method** | **str** |  | [optional] 
**shipping** | [**Address**](Address.md) |  | [optional] 
**total_completions** | **float** |  | [optional] 
**total_refunds** | **float** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.transaction import Transaction

# TODO update the JSON string below
json = "{}"
# create an instance of Transaction from a JSON string
transaction_instance = Transaction.from_json(json)
# print the JSON string representation of the object
print(Transaction.to_json())

# convert the object into a dict
transaction_dict = transaction_instance.to_dict()
# create an instance of Transaction from a dict
transaction_from_dict = Transaction.from_dict(transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


