# OrderPreestimateShipping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**carrier_code** | **str** |  | [optional] 
**carrier_name** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**delivery_time** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**method_code** | **str** |  | [optional] 
**method_name** | **str** |  | [optional] 
**price** | **float** |  | [optional] 
**price_inc_tax** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.order_preestimate_shipping import OrderPreestimateShipping

# TODO update the JSON string below
json = "{}"
# create an instance of OrderPreestimateShipping from a JSON string
order_preestimate_shipping_instance = OrderPreestimateShipping.from_json(json)
# print the JSON string representation of the object
print(OrderPreestimateShipping.to_json())

# convert the object into a dict
order_preestimate_shipping_dict = order_preestimate_shipping_instance.to_dict()
# create an instance of OrderPreestimateShipping from a dict
order_preestimate_shipping_from_dict = OrderPreestimateShipping.from_dict(order_preestimate_shipping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


