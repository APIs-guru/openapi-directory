# OrderHistoryEdit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_history** | [**OrderHistoryEditFields**](OrderHistoryEditFields.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_history_edit import OrderHistoryEdit

# TODO update the JSON string below
json = "{}"
# create an instance of OrderHistoryEdit from a JSON string
order_history_edit_instance = OrderHistoryEdit.from_json(json)
# print the JSON string representation of the object
print(OrderHistoryEdit.to_json())

# convert the object into a dict
order_history_edit_dict = order_history_edit_instance.to_dict()
# create an instance of OrderHistoryEdit from a dict
order_history_edit_from_dict = OrderHistoryEdit.from_dict(order_history_edit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


