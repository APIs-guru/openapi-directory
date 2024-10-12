# OrderTotalsNewDiscount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**code** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**type** | **str** |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.order_totals_new_discount import OrderTotalsNewDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of OrderTotalsNewDiscount from a JSON string
order_totals_new_discount_instance = OrderTotalsNewDiscount.from_json(json)
# print the JSON string representation of the object
print(OrderTotalsNewDiscount.to_json())

# convert the object into a dict
order_totals_new_discount_dict = order_totals_new_discount_instance.to_dict()
# create an instance of OrderTotalsNewDiscount from a dict
order_totals_new_discount_from_dict = OrderTotalsNewDiscount.from_dict(order_totals_new_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


