# DiskEncryptionProperties

The disk encryption properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_algorithm** | **str** | Algorithm identifier for encryption, default RSA-OAEP. | [optional] 
**key_name** | **str** | Key name that is used for enabling disk encryption. | [optional] 
**key_version** | **str** | Specific key version that is used for enabling disk encryption. | [optional] 
**msi_resource_id** | **str** | Resource ID of Managed Identity that is used to access the key vault. | [optional] 
**vault_uri** | **str** | Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net | [optional] 

## Example

```python
from openapi_client.models.disk_encryption_properties import DiskEncryptionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEncryptionProperties from a JSON string
disk_encryption_properties_instance = DiskEncryptionProperties.from_json(json)
# print the JSON string representation of the object
print(DiskEncryptionProperties.to_json())

# convert the object into a dict
disk_encryption_properties_dict = disk_encryption_properties_instance.to_dict()
# create an instance of DiskEncryptionProperties from a dict
disk_encryption_properties_from_dict = DiskEncryptionProperties.from_dict(disk_encryption_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


