# DiskEncryptionSetUpdate

disk encryption set update resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiskEncryptionSetUpdateProperties**](DiskEncryptionSetUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.disk_encryption_set_update import DiskEncryptionSetUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEncryptionSetUpdate from a JSON string
disk_encryption_set_update_instance = DiskEncryptionSetUpdate.from_json(json)
# print the JSON string representation of the object
print(DiskEncryptionSetUpdate.to_json())

# convert the object into a dict
disk_encryption_set_update_dict = disk_encryption_set_update_instance.to_dict()
# create an instance of DiskEncryptionSetUpdate from a dict
disk_encryption_set_update_from_dict = DiskEncryptionSetUpdate.from_dict(disk_encryption_set_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


