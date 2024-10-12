# OrderFulfillmentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**pickup_details** | [**OrderFulfillmentsInnerPickupDetails**](OrderFulfillmentsInnerPickupDetails.md) |  | [optional] 
**shipment_details** | **object** |  | [optional] 
**status** | **str** | The state of the fulfillment. | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_fulfillments_inner import OrderFulfillmentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFulfillmentsInner from a JSON string
order_fulfillments_inner_instance = OrderFulfillmentsInner.from_json(json)
# print the JSON string representation of the object
print(OrderFulfillmentsInner.to_json())

# convert the object into a dict
order_fulfillments_inner_dict = order_fulfillments_inner_instance.to_dict()
# create an instance of OrderFulfillmentsInner from a dict
order_fulfillments_inner_from_dict = OrderFulfillmentsInner.from_dict(order_fulfillments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


