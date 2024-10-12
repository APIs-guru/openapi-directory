# PatchInstanceFilterGroupLabel

Targets a group of VM instances by using their [assigned labels](https://cloud.google.com/compute/docs/labeling-resources). Labels are key-value pairs. A `GroupLabel` is a combination of labels that is used to target VMs for a patch job. For example, a patch job can target VMs that have the following `GroupLabel`: `{\"env\":\"test\", \"app\":\"web\"}`. This means that the patch job is applied to VMs that have both the labels `env=test` and `app=web`.

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


