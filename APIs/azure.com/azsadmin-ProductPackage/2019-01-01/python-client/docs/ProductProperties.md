# ProductProperties

Additional properties of the product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | The version of the product | [optional] 

## Example

```python
from openapi_client.models.product_properties import ProductProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProductProperties from a JSON string
product_properties_instance = ProductProperties.from_json(json)
# print the JSON string representation of the object
print(ProductProperties.to_json())

# convert the object into a dict
product_properties_dict = product_properties_instance.to_dict()
# create an instance of ProductProperties from a dict
product_properties_from_dict = ProductProperties.from_dict(product_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


