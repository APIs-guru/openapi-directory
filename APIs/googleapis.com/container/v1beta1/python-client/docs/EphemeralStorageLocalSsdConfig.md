# EphemeralStorageLocalSsdConfig

EphemeralStorageLocalSsdConfig contains configuration for the node ephemeral storage using Local SSDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_ssd_count** | **int** | Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn&#39;t support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. | [optional] 

## Example

```python
from openapi_client.models.ephemeral_storage_local_ssd_config import EphemeralStorageLocalSsdConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EphemeralStorageLocalSsdConfig from a JSON string
ephemeral_storage_local_ssd_config_instance = EphemeralStorageLocalSsdConfig.from_json(json)
# print the JSON string representation of the object
print(EphemeralStorageLocalSsdConfig.to_json())

# convert the object into a dict
ephemeral_storage_local_ssd_config_dict = ephemeral_storage_local_ssd_config_instance.to_dict()
# create an instance of EphemeralStorageLocalSsdConfig from a dict
ephemeral_storage_local_ssd_config_from_dict = EphemeralStorageLocalSsdConfig.from_dict(ephemeral_storage_local_ssd_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


