# VmwareEnginePreferences

The user preferences relating to Google Cloud VMware Engine target platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment_plan** | **str** | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. | [optional] 
**cpu_overcommit_ratio** | **float** | CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment. | [optional] 
**memory_overcommit_ratio** | **float** | Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0. | [optional] 
**storage_deduplication_compression_ratio** | **float** | The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0. | [optional] 

## Example

```python
from openapi_client.models.vmware_engine_preferences import VmwareEnginePreferences

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareEnginePreferences from a JSON string
vmware_engine_preferences_instance = VmwareEnginePreferences.from_json(json)
# print the JSON string representation of the object
print(VmwareEnginePreferences.to_json())

# convert the object into a dict
vmware_engine_preferences_dict = vmware_engine_preferences_instance.to_dict()
# create an instance of VmwareEnginePreferences from a dict
vmware_engine_preferences_from_dict = VmwareEnginePreferences.from_dict(vmware_engine_preferences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


