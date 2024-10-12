# ProductGroupPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**expire_time** | **str** |  | [optional] 
**group_id** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**price** | **float** |  | [optional] 
**quantity** | **float** |  | [optional] 
**start_time** | **str** |  | [optional] 
**store_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_group_price import ProductGroupPrice

# TODO update the JSON string below
json = "{}"
# create an instance of ProductGroupPrice from a JSON string
product_group_price_instance = ProductGroupPrice.from_json(json)
# print the JSON string representation of the object
print(ProductGroupPrice.to_json())

# convert the object into a dict
product_group_price_dict = product_group_price_instance.to_dict()
# create an instance of ProductGroupPrice from a dict
product_group_price_from_dict = ProductGroupPrice.from_dict(product_group_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


