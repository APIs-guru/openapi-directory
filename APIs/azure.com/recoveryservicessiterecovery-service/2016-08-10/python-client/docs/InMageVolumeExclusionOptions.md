# InMageVolumeExclusionOptions

Guest disk signature based disk exclusion option when doing enable protection of virtual machine in InMage provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**only_exclude_if_single_volume** | **str** | The value indicating whether to exclude multi volume disk or not. If a disk has multiple volumes and one of the volume has label matching with VolumeLabel this disk will be excluded from replication if OnlyExcludeIfSingleVolume is false. | [optional] 
**volume_label** | **str** | The volume label. The disk having any volume with this label will be excluded from replication. | [optional] 

## Example

```python
from openapi_client.models.in_mage_volume_exclusion_options import InMageVolumeExclusionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of InMageVolumeExclusionOptions from a JSON string
in_mage_volume_exclusion_options_instance = InMageVolumeExclusionOptions.from_json(json)
# print the JSON string representation of the object
print(InMageVolumeExclusionOptions.to_json())

# convert the object into a dict
in_mage_volume_exclusion_options_dict = in_mage_volume_exclusion_options_instance.to_dict()
# create an instance of InMageVolumeExclusionOptions from a dict
in_mage_volume_exclusion_options_from_dict = InMageVolumeExclusionOptions.from_dict(in_mage_volume_exclusion_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


