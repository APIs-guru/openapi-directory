# ProductDeliveryTimeAreaDeliveryTime

A pairing of `DeliveryArea` associated with a `DeliveryTime` for this product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_area** | [**DeliveryArea**](DeliveryArea.md) |  | [optional] 
**delivery_time** | [**ProductDeliveryTimeAreaDeliveryTimeDeliveryTime**](ProductDeliveryTimeAreaDeliveryTimeDeliveryTime.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_delivery_time_area_delivery_time import ProductDeliveryTimeAreaDeliveryTime

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDeliveryTimeAreaDeliveryTime from a JSON string
product_delivery_time_area_delivery_time_instance = ProductDeliveryTimeAreaDeliveryTime.from_json(json)
# print the JSON string representation of the object
print(ProductDeliveryTimeAreaDeliveryTime.to_json())

# convert the object into a dict
product_delivery_time_area_delivery_time_dict = product_delivery_time_area_delivery_time_instance.to_dict()
# create an instance of ProductDeliveryTimeAreaDeliveryTime from a dict
product_delivery_time_area_delivery_time_from_dict = ProductDeliveryTimeAreaDeliveryTime.from_dict(product_delivery_time_area_delivery_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


