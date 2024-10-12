# ProductAdvancedPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**avail** | **bool** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**expire_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**group_id** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**quantity_from** | **float** |  | [optional] 
**start_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.product_advanced_price import ProductAdvancedPrice

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAdvancedPrice from a JSON string
product_advanced_price_instance = ProductAdvancedPrice.from_json(json)
# print the JSON string representation of the object
print(ProductAdvancedPrice.to_json())

# convert the object into a dict
product_advanced_price_dict = product_advanced_price_instance.to_dict()
# create an instance of ProductAdvancedPrice from a dict
product_advanced_price_from_dict = ProductAdvancedPrice.from_dict(product_advanced_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


