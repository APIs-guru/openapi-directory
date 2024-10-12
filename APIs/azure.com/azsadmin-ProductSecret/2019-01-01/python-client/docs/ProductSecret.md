# ProductSecret

Properties for a product secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProductSecretProperties**](ProductSecretProperties.md) |  | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_secret import ProductSecret

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSecret from a JSON string
product_secret_instance = ProductSecret.from_json(json)
# print the JSON string representation of the object
print(ProductSecret.to_json())

# convert the object into a dict
product_secret_dict = product_secret_instance.to_dict()
# create an instance of ProductSecret from a dict
product_secret_from_dict = ProductSecret.from_dict(product_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


