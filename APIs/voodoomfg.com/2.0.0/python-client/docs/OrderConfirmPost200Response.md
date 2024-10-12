# OrderConfirmPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 
**delivery_date** | **str** | The target delivery date for the shipping method. Formatted as a datetime string. | [optional] 
**notes** | **str** |  | [optional] 
**order_id** | **str** | Unique identifier for referencing this order. | [optional] 
**order_items** | [**List[ModelPrint]**](ModelPrint.md) |  | [optional] 
**purchased** | **bool** | true if the purchase was completed successfully. | [optional] 
**quote** | [**Quote**](Quote.md) |  | [optional] 
**shipping_service** | **str** | Service identifier string pulled from a specific rate returned by /order/shipping. | [optional] 

## Example

```python
from openapi_client.models.order_confirm_post200_response import OrderConfirmPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrderConfirmPost200Response from a JSON string
order_confirm_post200_response_instance = OrderConfirmPost200Response.from_json(json)
# print the JSON string representation of the object
print(OrderConfirmPost200Response.to_json())

# convert the object into a dict
order_confirm_post200_response_dict = order_confirm_post200_response_instance.to_dict()
# create an instance of OrderConfirmPost200Response from a dict
order_confirm_post200_response_from_dict = OrderConfirmPost200Response.from_dict(order_confirm_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


