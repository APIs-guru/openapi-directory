# EphemeralStorageConfig

EphemeralStorageConfig contains configuration for the ephemeral storage filesystem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_ssd_count** | **int** | Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn&#39;t support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. | [optional] 

## Example

```python
from openapi_client.models.ephemeral_storage_config import EphemeralStorageConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EphemeralStorageConfig from a JSON string
ephemeral_storage_config_instance = EphemeralStorageConfig.from_json(json)
# print the JSON string representation of the object
print(EphemeralStorageConfig.to_json())

# convert the object into a dict
ephemeral_storage_config_dict = ephemeral_storage_config_instance.to_dict()
# create an instance of EphemeralStorageConfig from a dict
ephemeral_storage_config_from_dict = EphemeralStorageConfig.from_dict(ephemeral_storage_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


