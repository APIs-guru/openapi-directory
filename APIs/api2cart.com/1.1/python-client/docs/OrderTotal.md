# OrderTotal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**shipping_ex_tax** | **float** |  | [optional] 
**subtotal_ex_tax** | **float** |  | [optional] 
**total** | **float** |  | [optional] 
**total_discount** | **float** |  | [optional] 
**total_paid** | **float** |  | [optional] 
**total_tax** | **float** |  | [optional] 
**wrapping_ex_tax** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.order_total import OrderTotal

# TODO update the JSON string below
json = "{}"
# create an instance of OrderTotal from a JSON string
order_total_instance = OrderTotal.from_json(json)
# print the JSON string representation of the object
print(OrderTotal.to_json())

# convert the object into a dict
order_total_dict = order_total_instance.to_dict()
# create an instance of OrderTotal from a dict
order_total_from_dict = OrderTotal.from_dict(order_total_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


