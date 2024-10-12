# OrderHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_history** | [**OrderHistoryFields**](OrderHistoryFields.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_history import OrderHistory

# TODO update the JSON string below
json = "{}"
# create an instance of OrderHistory from a JSON string
order_history_instance = OrderHistory.from_json(json)
# print the JSON string representation of the object
print(OrderHistory.to_json())

# convert the object into a dict
order_history_dict = order_history_instance.to_dict()
# create an instance of OrderHistory from a dict
order_history_from_dict = OrderHistory.from_dict(order_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


