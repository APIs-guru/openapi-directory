# OrderCreatePost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 
**delivery_date** | **str** | The target delivery date for the shipping method. Formatted as a datetime string. | [optional] 
**notes** | **str** |  | [optional] 
**order_items** | [**List[ModelPrint]**](ModelPrint.md) |  | [optional] 
**quote** | [**Quote**](Quote.md) |  | [optional] 
**quote_id** | **str** | Unique identifier for confirming this order. Use this value with /order/confirm place the order. | [optional] 
**shipping_service** | **str** | Service identifier string pulled from a specific rate returned by /order/shipping. | [optional] 

## Example

```python
from openapi_client.models.order_create_post200_response import OrderCreatePost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCreatePost200Response from a JSON string
order_create_post200_response_instance = OrderCreatePost200Response.from_json(json)
# print the JSON string representation of the object
print(OrderCreatePost200Response.to_json())

# convert the object into a dict
order_create_post200_response_dict = order_create_post200_response_instance.to_dict()
# create an instance of OrderCreatePost200Response from a dict
order_create_post200_response_from_dict = OrderCreatePost200Response.from_dict(order_create_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


