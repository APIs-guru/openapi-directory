# OrderStatus

Represents a single status change.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** | Comments related to this status change. | [optional] 
**status** | **str** | Status of the order as per the allowed status types. | 
**update_date_time** | **datetime** | Time of status update. | [optional] [readonly] 

## Example

```python
from openapi_client.models.order_status import OrderStatus

# TODO update the JSON string below
json = "{}"
# create an instance of OrderStatus from a JSON string
order_status_instance = OrderStatus.from_json(json)
# print the JSON string representation of the object
print(OrderStatus.to_json())

# convert the object into a dict
order_status_dict = order_status_instance.to_dict()
# create an instance of OrderStatus from a dict
order_status_from_dict = OrderStatus.from_dict(order_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


