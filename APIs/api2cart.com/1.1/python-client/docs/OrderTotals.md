# OrderTotals


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**discount** | **float** |  | [optional] 
**shipping** | **float** |  | [optional] 
**subtotal** | **float** |  | [optional] 
**tax** | **float** |  | [optional] 
**total** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.order_totals import OrderTotals

# TODO update the JSON string below
json = "{}"
# create an instance of OrderTotals from a JSON string
order_totals_instance = OrderTotals.from_json(json)
# print the JSON string representation of the object
print(OrderTotals.to_json())

# convert the object into a dict
order_totals_dict = order_totals_instance.to_dict()
# create an instance of OrderTotals from a dict
order_totals_from_dict = OrderTotals.from_dict(order_totals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


