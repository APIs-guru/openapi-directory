# OrderDiscountsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** |  | [optional] 
**product_id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**scope** | **str** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.order_discounts_inner import OrderDiscountsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderDiscountsInner from a JSON string
order_discounts_inner_instance = OrderDiscountsInner.from_json(json)
# print the JSON string representation of the object
print(OrderDiscountsInner.to_json())

# convert the object into a dict
order_discounts_inner_dict = order_discounts_inner_instance.to_dict()
# create an instance of OrderDiscountsInner from a dict
order_discounts_inner_from_dict = OrderDiscountsInner.from_dict(order_discounts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


