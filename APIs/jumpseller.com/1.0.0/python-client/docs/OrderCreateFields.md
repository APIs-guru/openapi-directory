# OrderCreateFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**CustomerFieldsWithBillingAddressAndShippingAddressFields**](CustomerFieldsWithBillingAddressAndShippingAddressFields.md) |  | [optional] 
**products** | [**List[OrderProductOrderCreate]**](OrderProductOrderCreate.md) |  | [optional] 
**shipping_method_id** | **int** | Shipping method id | [optional] 
**shipping_method_name** | **str** | Shipping method name e.g. Royal Mail | [optional] 
**shipping_price** | **float** | Shipping method&#39;s price (applicable if shipping_method_name is provided instead of a shipping_method_id) | [optional] 
**status** | **str** | Status of the Order | [optional] 

## Example

```python
from openapi_client.models.order_create_fields import OrderCreateFields

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCreateFields from a JSON string
order_create_fields_instance = OrderCreateFields.from_json(json)
# print the JSON string representation of the object
print(OrderCreateFields.to_json())

# convert the object into a dict
order_create_fields_dict = order_create_fields_instance.to_dict()
# create an instance of OrderCreateFields from a dict
order_create_fields_from_dict = OrderCreateFields.from_dict(order_create_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


