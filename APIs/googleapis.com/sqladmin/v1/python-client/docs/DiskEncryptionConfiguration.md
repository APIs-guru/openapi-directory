# DiskEncryptionConfiguration

Disk encryption configuration for an instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This is always &#x60;sql#diskEncryptionConfiguration&#x60;. | [optional] 
**kms_key_name** | **str** | Resource name of KMS key for disk encryption | [optional] 

## Example

```python
from openapi_client.models.disk_encryption_configuration import DiskEncryptionConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEncryptionConfiguration from a JSON string
disk_encryption_configuration_instance = DiskEncryptionConfiguration.from_json(json)
# print the JSON string representation of the object
print(DiskEncryptionConfiguration.to_json())

# convert the object into a dict
disk_encryption_configuration_dict = disk_encryption_configuration_instance.to_dict()
# create an instance of DiskEncryptionConfiguration from a dict
disk_encryption_configuration_from_dict = DiskEncryptionConfiguration.from_dict(disk_encryption_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


