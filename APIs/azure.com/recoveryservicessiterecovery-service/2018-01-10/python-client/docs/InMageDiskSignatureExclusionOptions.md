# InMageDiskSignatureExclusionOptions

Guest disk signature based disk exclusion option when doing enable protection of virtual machine in InMage provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_signature** | **str** | The guest signature of disk to be excluded from replication. | [optional] 

## Example

```python
from openapi_client.models.in_mage_disk_signature_exclusion_options import InMageDiskSignatureExclusionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of InMageDiskSignatureExclusionOptions from a JSON string
in_mage_disk_signature_exclusion_options_instance = InMageDiskSignatureExclusionOptions.from_json(json)
# print the JSON string representation of the object
print(InMageDiskSignatureExclusionOptions.to_json())

# convert the object into a dict
in_mage_disk_signature_exclusion_options_dict = in_mage_disk_signature_exclusion_options_instance.to_dict()
# create an instance of InMageDiskSignatureExclusionOptions from a dict
in_mage_disk_signature_exclusion_options_from_dict = InMageDiskSignatureExclusionOptions.from_dict(in_mage_disk_signature_exclusion_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


