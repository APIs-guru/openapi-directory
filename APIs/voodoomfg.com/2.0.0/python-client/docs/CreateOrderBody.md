# CreateOrderBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[ModelPrint]**](ModelPrint.md) |  | [optional] 
**notes** | **str** | Any notes about this order. This field is always returned when reading the order back. | [optional] 
**shipping_address** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 
**shipping_service** | **str** | Service identifier string pulled from a specific rate returned by /order/shipping. | [optional] 

## Example

```python
from openapi_client.models.create_order_body import CreateOrderBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderBody from a JSON string
create_order_body_instance = CreateOrderBody.from_json(json)
# print the JSON string representation of the object
print(CreateOrderBody.to_json())

# convert the object into a dict
create_order_body_dict = create_order_body_instance.to_dict()
# create an instance of CreateOrderBody from a dict
create_order_body_from_dict = CreateOrderBody.from_dict(create_order_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


