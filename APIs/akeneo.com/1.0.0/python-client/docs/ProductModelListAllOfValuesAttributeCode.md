# ProductModelListAllOfValuesAttributeCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | &lt;a href&#x3D;&#39;api-reference.html#Productuuid&#39;&gt;Product&lt;/a&gt; value | [optional] 
**locale** | **str** | &lt;a href&#x3D;&#39;api-reference.html#Locale&#39;&gt;Locale&lt;/a&gt; code of the product value | [optional] 
**scope** | **str** | &lt;a href&#x3D;&#39;api-reference.html#Channel&#39;&gt;Channel&lt;/a&gt; code of the product value | [optional] 

## Example

```python
from openapi_client.models.product_model_list_all_of_values_attribute_code import ProductModelListAllOfValuesAttributeCode

# TODO update the JSON string below
json = "{}"
# create an instance of ProductModelListAllOfValuesAttributeCode from a JSON string
product_model_list_all_of_values_attribute_code_instance = ProductModelListAllOfValuesAttributeCode.from_json(json)
# print the JSON string representation of the object
print(ProductModelListAllOfValuesAttributeCode.to_json())

# convert the object into a dict
product_model_list_all_of_values_attribute_code_dict = product_model_list_all_of_values_attribute_code_instance.to_dict()
# create an instance of ProductModelListAllOfValuesAttributeCode from a dict
product_model_list_all_of_values_attribute_code_from_dict = ProductModelListAllOfValuesAttributeCode.from_dict(product_model_list_all_of_values_attribute_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


