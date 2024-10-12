# OrderShippingPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rates** | [**List[Rate]**](Rate.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_shipping_post200_response import OrderShippingPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShippingPost200Response from a JSON string
order_shipping_post200_response_instance = OrderShippingPost200Response.from_json(json)
# print the JSON string representation of the object
print(OrderShippingPost200Response.to_json())

# convert the object into a dict
order_shipping_post200_response_dict = order_shipping_post200_response_instance.to_dict()
# create an instance of OrderShippingPost200Response from a dict
order_shipping_post200_response_from_dict = OrderShippingPost200Response.from_dict(order_shipping_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


