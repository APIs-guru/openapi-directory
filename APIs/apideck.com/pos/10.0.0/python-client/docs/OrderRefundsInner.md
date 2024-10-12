# OrderRefundsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**location_id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**reason** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**tender_id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**transaction_id** | **str** | A unique identifier for an object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.order_refunds_inner import OrderRefundsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderRefundsInner from a JSON string
order_refunds_inner_instance = OrderRefundsInner.from_json(json)
# print the JSON string representation of the object
print(OrderRefundsInner.to_json())

# convert the object into a dict
order_refunds_inner_dict = order_refunds_inner_instance.to_dict()
# create an instance of OrderRefundsInner from a dict
order_refunds_inner_from_dict = OrderRefundsInner.from_dict(order_refunds_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


