# OrdersCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[OrdersCustomBatchResponseEntry]**](OrdersCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#ordersCustomBatchResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_response import OrdersCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchResponse from a JSON string
orders_custom_batch_response_instance = OrdersCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchResponse.to_json())

# convert the object into a dict
orders_custom_batch_response_dict = orders_custom_batch_response_instance.to_dict()
# create an instance of OrdersCustomBatchResponse from a dict
orders_custom_batch_response_from_dict = OrdersCustomBatchResponse.from_dict(orders_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


