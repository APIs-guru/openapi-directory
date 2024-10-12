# EncryptionProtectorProperties

Properties for an encryption protector execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**server_key_name** | **str** | The name of the server key. | [optional] 
**server_key_type** | **str** | The encryption protector type like &#39;ServiceManaged&#39;, &#39;AzureKeyVault&#39;. | 
**subregion** | **str** | Subregion of the encryption protector. | [optional] [readonly] 
**thumbprint** | **str** | Thumbprint of the server key. | [optional] [readonly] 
**uri** | **str** | The URI of the server key. | [optional] [readonly] 

## Example

```python
from openapi_client.models.encryption_protector_properties import EncryptionProtectorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionProtectorProperties from a JSON string
encryption_protector_properties_instance = EncryptionProtectorProperties.from_json(json)
# print the JSON string representation of the object
print(EncryptionProtectorProperties.to_json())

# convert the object into a dict
encryption_protector_properties_dict = encryption_protector_properties_instance.to_dict()
# create an instance of EncryptionProtectorProperties from a dict
encryption_protector_properties_from_dict = EncryptionProtectorProperties.from_dict(encryption_protector_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


