# OrdersAcknowledgeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 

## Example

```python
from openapi_client.models.orders_acknowledge_request import OrdersAcknowledgeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersAcknowledgeRequest from a JSON string
orders_acknowledge_request_instance = OrdersAcknowledgeRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersAcknowledgeRequest.to_json())

# convert the object into a dict
orders_acknowledge_request_dict = orders_acknowledge_request_instance.to_dict()
# create an instance of OrdersAcknowledgeRequest from a dict
orders_acknowledge_request_from_dict = OrdersAcknowledgeRequest.from_dict(orders_acknowledge_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


