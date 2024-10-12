# OrdersCustomBatchRequestEntryCreateTestReturnReturnItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_id** | **str** | The ID of the line item to return. | [optional] 
**quantity** | **int** | Quantity that is returned. | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_request_entry_create_test_return_return_item import OrdersCustomBatchRequestEntryCreateTestReturnReturnItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchRequestEntryCreateTestReturnReturnItem from a JSON string
orders_custom_batch_request_entry_create_test_return_return_item_instance = OrdersCustomBatchRequestEntryCreateTestReturnReturnItem.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchRequestEntryCreateTestReturnReturnItem.to_json())

# convert the object into a dict
orders_custom_batch_request_entry_create_test_return_return_item_dict = orders_custom_batch_request_entry_create_test_return_return_item_instance.to_dict()
# create an instance of OrdersCustomBatchRequestEntryCreateTestReturnReturnItem from a dict
orders_custom_batch_request_entry_create_test_return_return_item_from_dict = OrdersCustomBatchRequestEntryCreateTestReturnReturnItem.from_dict(orders_custom_batch_request_entry_create_test_return_return_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


