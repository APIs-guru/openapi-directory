# ImageRegistryCredential

Image registry credential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password for the private registry. | [optional] 
**server** | **str** | The Docker image registry server without a protocol such as \&quot;http\&quot; and \&quot;https\&quot;. | 
**username** | **str** | The username for the private registry. | 

## Example

```python
from openapi_client.models.image_registry_credential import ImageRegistryCredential

# TODO update the JSON string below
json = "{}"
# create an instance of ImageRegistryCredential from a JSON string
image_registry_credential_instance = ImageRegistryCredential.from_json(json)
# print the JSON string representation of the object
print(ImageRegistryCredential.to_json())

# convert the object into a dict
image_registry_credential_dict = image_registry_credential_instance.to_dict()
# create an instance of ImageRegistryCredential from a dict
image_registry_credential_from_dict = ImageRegistryCredential.from_dict(image_registry_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


