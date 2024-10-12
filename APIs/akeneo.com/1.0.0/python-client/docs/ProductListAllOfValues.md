# ProductListAllOfValues

Product attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_code** | [**List[ProductListAllOfValuesAttributeCode]**](ProductListAllOfValuesAttributeCode.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_list_all_of_values import ProductListAllOfValues

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListAllOfValues from a JSON string
product_list_all_of_values_instance = ProductListAllOfValues.from_json(json)
# print the JSON string representation of the object
print(ProductListAllOfValues.to_json())

# convert the object into a dict
product_list_all_of_values_dict = product_list_all_of_values_instance.to_dict()
# create an instance of ProductListAllOfValues from a dict
product_list_all_of_values_from_dict = ProductListAllOfValues.from_dict(product_list_all_of_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


