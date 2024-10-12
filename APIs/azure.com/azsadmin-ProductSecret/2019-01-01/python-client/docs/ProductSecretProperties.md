# ProductSecretProperties

Properties of product secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The secret description. | [optional] 
**expires_after** | **str** | The expiration period of the secret (in ISO8601 format). | [optional] 
**provisioning_state** | **str** | Provisioning state of the resource. | [optional] 
**secret_descriptor** | [**SecretDescriptor**](SecretDescriptor.md) |  | [optional] 
**secret_kind** | **str** | Specifies the secret kind. | [optional] 
**secret_state** | [**SecretState**](SecretState.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_secret_properties import ProductSecretProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSecretProperties from a JSON string
product_secret_properties_instance = ProductSecretProperties.from_json(json)
# print the JSON string representation of the object
print(ProductSecretProperties.to_json())

# convert the object into a dict
product_secret_properties_dict = product_secret_properties_instance.to_dict()
# create an instance of ProductSecretProperties from a dict
product_secret_properties_from_dict = ProductSecretProperties.from_dict(product_secret_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


