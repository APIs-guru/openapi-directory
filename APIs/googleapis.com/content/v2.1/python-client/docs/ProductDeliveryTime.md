# ProductDeliveryTime

The estimated days to deliver a product after an order is placed. Only authorized shipping signals partners working with a merchant can use this resource. Merchants should use the [`products`](https://developers.google.com/shopping-content/reference/rest/v2.1/products#productshipping) resource instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area_delivery_times** | [**List[ProductDeliveryTimeAreaDeliveryTime]**](ProductDeliveryTimeAreaDeliveryTime.md) | Required. A set of associations between &#x60;DeliveryArea&#x60; and &#x60;DeliveryTime&#x60; entries. The total number of &#x60;areaDeliveryTimes&#x60; can be at most 100. | [optional] 
**product_id** | [**ProductId**](ProductId.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_delivery_time import ProductDeliveryTime

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDeliveryTime from a JSON string
product_delivery_time_instance = ProductDeliveryTime.from_json(json)
# print the JSON string representation of the object
print(ProductDeliveryTime.to_json())

# convert the object into a dict
product_delivery_time_dict = product_delivery_time_instance.to_dict()
# create an instance of ProductDeliveryTime from a dict
product_delivery_time_from_dict = ProductDeliveryTime.from_dict(product_delivery_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


