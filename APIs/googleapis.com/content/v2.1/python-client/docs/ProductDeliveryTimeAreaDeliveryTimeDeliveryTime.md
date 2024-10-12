# ProductDeliveryTimeAreaDeliveryTimeDeliveryTime

A delivery time for this product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_handling_time_days** | **int** | Required. The maximum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0. | [optional] 
**max_transit_time_days** | **int** | Required. The maximum number of business days (inclusive) between when the product ships and when the product is delivered. | [optional] 
**min_handling_time_days** | **int** | Required. The minimum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0. | [optional] 
**min_transit_time_days** | **int** | Required. The minimum number of business days (inclusive) between when the product ships and when the product is delivered. | [optional] 

## Example

```python
from openapi_client.models.product_delivery_time_area_delivery_time_delivery_time import ProductDeliveryTimeAreaDeliveryTimeDeliveryTime

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDeliveryTimeAreaDeliveryTimeDeliveryTime from a JSON string
product_delivery_time_area_delivery_time_delivery_time_instance = ProductDeliveryTimeAreaDeliveryTimeDeliveryTime.from_json(json)
# print the JSON string representation of the object
print(ProductDeliveryTimeAreaDeliveryTimeDeliveryTime.to_json())

# convert the object into a dict
product_delivery_time_area_delivery_time_delivery_time_dict = product_delivery_time_area_delivery_time_delivery_time_instance.to_dict()
# create an instance of ProductDeliveryTimeAreaDeliveryTimeDeliveryTime from a dict
product_delivery_time_area_delivery_time_delivery_time_from_dict = ProductDeliveryTimeAreaDeliveryTimeDeliveryTime.from_dict(product_delivery_time_area_delivery_time_delivery_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


