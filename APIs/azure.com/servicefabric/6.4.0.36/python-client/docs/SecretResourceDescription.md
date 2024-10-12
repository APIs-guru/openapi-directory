# SecretResourceDescription

This type describes a secret resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the Secret resource. | 
**properties** | [**SecretResourceProperties**](SecretResourceProperties.md) |  | 

## Example

```python
from openapi_client.models.secret_resource_description import SecretResourceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of SecretResourceDescription from a JSON string
secret_resource_description_instance = SecretResourceDescription.from_json(json)
# print the JSON string representation of the object
print(SecretResourceDescription.to_json())

# convert the object into a dict
secret_resource_description_dict = secret_resource_description_instance.to_dict()
# create an instance of SecretResourceDescription from a dict
secret_resource_description_from_dict = SecretResourceDescription.from_dict(secret_resource_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


