# PatchInstanceFilterGroupLabel

Represents a group of VMs that can be identified as having all these labels, for example \"env=prod and app=web\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Compute Engine instance labels that must be present for a VM instance to be targeted by this filter. | [optional] 

## Example

```python
from openapi_client.models.patch_instance_filter_group_label import PatchInstanceFilterGroupLabel

# TODO update the JSON string below
json = "{}"
# create an instance of PatchInstanceFilterGroupLabel from a JSON string
patch_instance_filter_group_label_instance = PatchInstanceFilterGroupLabel.from_json(json)
# print the JSON string representation of the object
print(PatchInstanceFilterGroupLabel.to_json())

# convert the object into a dict
patch_instance_filter_group_label_dict = patch_instance_filter_group_label_instance.to_dict()
# create an instance of PatchInstanceFilterGroupLabel from a dict
patch_instance_filter_group_label_from_dict = PatchInstanceFilterGroupLabel.from_dict(patch_instance_filter_group_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


