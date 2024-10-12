# OrdersCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[OrdersCustomBatchRequestEntry]**](OrdersCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_request import OrdersCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchRequest from a JSON string
orders_custom_batch_request_instance = OrdersCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchRequest.to_json())

# convert the object into a dict
orders_custom_batch_request_dict = orders_custom_batch_request_instance.to_dict()
# create an instance of OrdersCustomBatchRequest from a dict
orders_custom_batch_request_from_dict = OrdersCustomBatchRequest.from_dict(orders_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


