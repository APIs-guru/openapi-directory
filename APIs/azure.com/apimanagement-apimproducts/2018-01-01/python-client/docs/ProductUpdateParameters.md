# ProductUpdateParameters

Product Update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProductUpdateProperties**](ProductUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_update_parameters import ProductUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ProductUpdateParameters from a JSON string
product_update_parameters_instance = ProductUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ProductUpdateParameters.to_json())

# convert the object into a dict
product_update_parameters_dict = product_update_parameters_instance.to_dict()
# create an instance of ProductUpdateParameters from a dict
product_update_parameters_from_dict = ProductUpdateParameters.from_dict(product_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


