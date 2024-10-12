# OrderreportsListTransactionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#orderreportsListTransactionsResponse&#x60;\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of transactions. | [optional] 
**transactions** | [**List[OrderReportTransaction]**](OrderReportTransaction.md) | The list of transactions. | [optional] 

## Example

```python
from openapi_client.models.orderreports_list_transactions_response import OrderreportsListTransactionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreportsListTransactionsResponse from a JSON string
orderreports_list_transactions_response_instance = OrderreportsListTransactionsResponse.from_json(json)
# print the JSON string representation of the object
print(OrderreportsListTransactionsResponse.to_json())

# convert the object into a dict
orderreports_list_transactions_response_dict = orderreports_list_transactions_response_instance.to_dict()
# create an instance of OrderreportsListTransactionsResponse from a dict
orderreports_list_transactions_response_from_dict = OrderreportsListTransactionsResponse.from_dict(orderreports_list_transactions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


