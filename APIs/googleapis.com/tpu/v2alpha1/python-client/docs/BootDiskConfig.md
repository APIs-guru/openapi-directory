# BootDiskConfig

Boot disk configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_encryption_key** | [**CustomerEncryptionKey**](CustomerEncryptionKey.md) |  | [optional] 
**enable_confidential_compute** | **bool** | Optional. Whether the boot disk will be created with confidential compute mode. | [optional] 

## Example

```python
from openapi_client.models.boot_disk_config import BootDiskConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BootDiskConfig from a JSON string
boot_disk_config_instance = BootDiskConfig.from_json(json)
# print the JSON string representation of the object
print(BootDiskConfig.to_json())

# convert the object into a dict
boot_disk_config_dict = boot_disk_config_instance.to_dict()
# create an instance of BootDiskConfig from a dict
boot_disk_config_from_dict = BootDiskConfig.from_dict(boot_disk_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


