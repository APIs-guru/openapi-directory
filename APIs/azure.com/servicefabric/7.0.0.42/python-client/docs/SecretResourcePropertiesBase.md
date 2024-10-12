# SecretResourcePropertiesBase

This type describes the properties of a secret resource, including its kind.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**SecretKind**](SecretKind.md) |  | 

## Example

```python
from openapi_client.models.secret_resource_properties_base import SecretResourcePropertiesBase

# TODO update the JSON string below
json = "{}"
# create an instance of SecretResourcePropertiesBase from a JSON string
secret_resource_properties_base_instance = SecretResourcePropertiesBase.from_json(json)
# print the JSON string representation of the object
print(SecretResourcePropertiesBase.to_json())

# convert the object into a dict
secret_resource_properties_base_dict = secret_resource_properties_base_instance.to_dict()
# create an instance of SecretResourcePropertiesBase from a dict
secret_resource_properties_base_from_dict = SecretResourcePropertiesBase.from_dict(secret_resource_properties_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


