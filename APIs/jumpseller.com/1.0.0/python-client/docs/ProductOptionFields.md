# ProductOptionFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the product option | [optional] 
**name** | **str** | Name of the product option | [optional] 
**option_type** | **str** | Type of the product option | [optional] 
**position** | **int** | Position of the product option | [optional] 
**values** | [**List[ProductOptionValueFields]**](ProductOptionValueFields.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_option_fields import ProductOptionFields

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOptionFields from a JSON string
product_option_fields_instance = ProductOptionFields.from_json(json)
# print the JSON string representation of the object
print(ProductOptionFields.to_json())

# convert the object into a dict
product_option_fields_dict = product_option_fields_instance.to_dict()
# create an instance of ProductOptionFields from a dict
product_option_fields_from_dict = ProductOptionFields.from_dict(product_option_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


