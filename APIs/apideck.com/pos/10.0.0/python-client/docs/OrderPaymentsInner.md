# OrderPaymentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.order_payments_inner import OrderPaymentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderPaymentsInner from a JSON string
order_payments_inner_instance = OrderPaymentsInner.from_json(json)
# print the JSON string representation of the object
print(OrderPaymentsInner.to_json())

# convert the object into a dict
order_payments_inner_dict = order_payments_inner_instance.to_dict()
# create an instance of OrderPaymentsInner from a dict
order_payments_inner_from_dict = OrderPaymentsInner.from_dict(order_payments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


