# ProductModelListAllOfValues

Product model attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_code** | [**List[ProductModelListAllOfValuesAttributeCode]**](ProductModelListAllOfValuesAttributeCode.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_model_list_all_of_values import ProductModelListAllOfValues

# TODO update the JSON string below
json = "{}"
# create an instance of ProductModelListAllOfValues from a JSON string
product_model_list_all_of_values_instance = ProductModelListAllOfValues.from_json(json)
# print the JSON string representation of the object
print(ProductModelListAllOfValues.to_json())

# convert the object into a dict
product_model_list_all_of_values_dict = product_model_list_all_of_values_instance.to_dict()
# create an instance of ProductModelListAllOfValues from a dict
product_model_list_all_of_values_from_dict = ProductModelListAllOfValues.from_dict(product_model_list_all_of_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


