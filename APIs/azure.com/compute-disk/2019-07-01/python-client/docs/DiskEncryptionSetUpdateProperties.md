# DiskEncryptionSetUpdateProperties

disk encryption set resource update properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_key** | [**KeyVaultAndKeyReference**](KeyVaultAndKeyReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.disk_encryption_set_update_properties import DiskEncryptionSetUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEncryptionSetUpdateProperties from a JSON string
disk_encryption_set_update_properties_instance = DiskEncryptionSetUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(DiskEncryptionSetUpdateProperties.to_json())

# convert the object into a dict
disk_encryption_set_update_properties_dict = disk_encryption_set_update_properties_instance.to_dict()
# create an instance of DiskEncryptionSetUpdateProperties from a dict
disk_encryption_set_update_properties_from_dict = DiskEncryptionSetUpdateProperties.from_dict(disk_encryption_set_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


