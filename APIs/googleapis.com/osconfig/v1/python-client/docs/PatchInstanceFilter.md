# PatchInstanceFilter

A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all** | **bool** | Target all VM instances in the project. If true, no other criteria is permitted. | [optional] 
**group_labels** | [**List[PatchInstanceFilterGroupLabel]**](PatchInstanceFilterGroupLabel.md) | Targets VM instances matching ANY of these GroupLabels. This allows targeting of disparate groups of VM instances. | [optional] 
**instance_name_prefixes** | **List[str]** | Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group VMs when targeting configs, for example prefix&#x3D;\&quot;prod-\&quot;. | [optional] 
**instances** | **List[str]** | Targets any of the VM instances specified. Instances are specified by their URI in the form &#x60;zones/[ZONE]/instances/[INSTANCE_NAME]&#x60;, &#x60;projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]&#x60;, or &#x60;https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]&#x60; | [optional] 
**zones** | **List[str]** | Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone. | [optional] 

## Example

```python
from openapi_client.models.patch_instance_filter import PatchInstanceFilter

# TODO update the JSON string below
json = "{}"
# create an instance of PatchInstanceFilter from a JSON string
patch_instance_filter_instance = PatchInstanceFilter.from_json(json)
# print the JSON string representation of the object
print(PatchInstanceFilter.to_json())

# convert the object into a dict
patch_instance_filter_dict = patch_instance_filter_instance.to_dict()
# create an instance of PatchInstanceFilter from a dict
patch_instance_filter_from_dict = PatchInstanceFilter.from_dict(patch_instance_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


