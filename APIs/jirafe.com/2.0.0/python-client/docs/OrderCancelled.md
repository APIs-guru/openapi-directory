# OrderCancelled


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_date** | **datetime** |  | 
**order_number** | **str** |  | 
**status** | **str** |  | [default to 'cancelled']

## Example

```python
from openapi_client.models.order_cancelled import OrderCancelled

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCancelled from a JSON string
order_cancelled_instance = OrderCancelled.from_json(json)
# print the JSON string representation of the object
print(OrderCancelled.to_json())

# convert the object into a dict
order_cancelled_dict = order_cancelled_instance.to_dict()
# create an instance of OrderCancelled from a dict
order_cancelled_from_dict = OrderCancelled.from_dict(order_cancelled_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


