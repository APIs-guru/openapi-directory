# InMageDiskExclusionInput

DiskExclusionInput when doing enable protection of virtual machine in InMage provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_signature_options** | [**List[InMageDiskSignatureExclusionOptions]**](InMageDiskSignatureExclusionOptions.md) | The guest disk signature based option for disk exclusion. | [optional] 
**volume_options** | [**List[InMageVolumeExclusionOptions]**](InMageVolumeExclusionOptions.md) | The volume label based option for disk exclusion. | [optional] 

## Example

```python
from openapi_client.models.in_mage_disk_exclusion_input import InMageDiskExclusionInput

# TODO update the JSON string below
json = "{}"
# create an instance of InMageDiskExclusionInput from a JSON string
in_mage_disk_exclusion_input_instance = InMageDiskExclusionInput.from_json(json)
# print the JSON string representation of the object
print(InMageDiskExclusionInput.to_json())

# convert the object into a dict
in_mage_disk_exclusion_input_dict = in_mage_disk_exclusion_input_instance.to_dict()
# create an instance of InMageDiskExclusionInput from a dict
in_mage_disk_exclusion_input_from_dict = InMageDiskExclusionInput.from_dict(in_mage_disk_exclusion_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


