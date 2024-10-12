# OrdersCustomBatchResponseEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | The ID of the request entry this entry responds to. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**execution_status** | **str** | The status of the execution. Only defined if 1. the request was successful; and 2. the method is not &#x60;get&#x60;, &#x60;getByMerchantOrderId&#x60;, or one of the test methods. Acceptable values are: - \&quot;&#x60;duplicate&#x60;\&quot; - \&quot;&#x60;executed&#x60;\&quot;  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#ordersCustomBatchResponseEntry&#x60;\&quot; | [optional] 
**order** | [**Order**](Order.md) |  | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_response_entry import OrdersCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchResponseEntry from a JSON string
orders_custom_batch_response_entry_instance = OrdersCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchResponseEntry.to_json())

# convert the object into a dict
orders_custom_batch_response_entry_dict = orders_custom_batch_response_entry_instance.to_dict()
# create an instance of OrdersCustomBatchResponseEntry from a dict
orders_custom_batch_response_entry_from_dict = OrdersCustomBatchResponseEntry.from_dict(orders_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


