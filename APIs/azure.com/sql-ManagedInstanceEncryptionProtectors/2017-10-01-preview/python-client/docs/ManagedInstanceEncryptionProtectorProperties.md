# ManagedInstanceEncryptionProtectorProperties

Properties for an encryption protector execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**server_key_name** | **str** | The name of the managed instance key. | [optional] 
**server_key_type** | **str** | The encryption protector type like &#39;ServiceManaged&#39;, &#39;AzureKeyVault&#39;. | 
**thumbprint** | **str** | Thumbprint of the server key. | [optional] [readonly] 
**uri** | **str** | The URI of the server key. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_encryption_protector_properties import ManagedInstanceEncryptionProtectorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceEncryptionProtectorProperties from a JSON string
managed_instance_encryption_protector_properties_instance = ManagedInstanceEncryptionProtectorProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceEncryptionProtectorProperties.to_json())

# convert the object into a dict
managed_instance_encryption_protector_properties_dict = managed_instance_encryption_protector_properties_instance.to_dict()
# create an instance of ManagedInstanceEncryptionProtectorProperties from a dict
managed_instance_encryption_protector_properties_from_dict = ManagedInstanceEncryptionProtectorProperties.from_dict(managed_instance_encryption_protector_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


