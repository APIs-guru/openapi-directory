# LocalNvmeSsdBlockConfig

LocalNvmeSsdBlockConfig contains configuration for using raw-block local NVMe SSDs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_ssd_count** | **int** | Number of local NVMe SSDs to use. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn&#39;t support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info. | [optional] 

## Example

```python
from openapi_client.models.local_nvme_ssd_block_config import LocalNvmeSsdBlockConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LocalNvmeSsdBlockConfig from a JSON string
local_nvme_ssd_block_config_instance = LocalNvmeSsdBlockConfig.from_json(json)
# print the JSON string representation of the object
print(LocalNvmeSsdBlockConfig.to_json())

# convert the object into a dict
local_nvme_ssd_block_config_dict = local_nvme_ssd_block_config_instance.to_dict()
# create an instance of LocalNvmeSsdBlockConfig from a dict
local_nvme_ssd_block_config_from_dict = LocalNvmeSsdBlockConfig.from_dict(local_nvme_ssd_block_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


