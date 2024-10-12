# OrdersCreateTestReturnRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[OrdersCustomBatchRequestEntryCreateTestReturnReturnItem]**](OrdersCustomBatchRequestEntryCreateTestReturnReturnItem.md) | Returned items. | [optional] 

## Example

```python
from openapi_client.models.orders_create_test_return_request import OrdersCreateTestReturnRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCreateTestReturnRequest from a JSON string
orders_create_test_return_request_instance = OrdersCreateTestReturnRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersCreateTestReturnRequest.to_json())

# convert the object into a dict
orders_create_test_return_request_dict = orders_create_test_return_request_instance.to_dict()
# create an instance of OrdersCreateTestReturnRequest from a dict
orders_create_test_return_request_from_dict = OrdersCreateTestReturnRequest.from_dict(orders_create_test_return_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


