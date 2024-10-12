# OrderItemOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**name** | **str** |  | [optional] 
**option_id** | **str** |  | [optional] 
**price** | **float** |  | [optional] 
**product_option_value_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**value** | **str** |  | [optional] 
**weight** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.order_item_option import OrderItemOption

# TODO update the JSON string below
json = "{}"
# create an instance of OrderItemOption from a JSON string
order_item_option_instance = OrderItemOption.from_json(json)
# print the JSON string representation of the object
print(OrderItemOption.to_json())

# convert the object into a dict
order_item_option_dict = order_item_option_instance.to_dict()
# create an instance of OrderItemOption from a dict
order_item_option_from_dict = OrderItemOption.from_dict(order_item_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


