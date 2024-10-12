# ScaleInPolicy

Describes a scale-in policy for a virtual machine scale set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | **List[str]** | The rules to be followed when scaling-in a virtual machine scale set. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Default** When a virtual machine scale set is scaled in, the scale set will first be balanced across zones if it is a zonal scale set. Then, it will be balanced across Fault Domains as far as possible. Within each Fault Domain, the virtual machines chosen for removal will be the newest ones that are not protected from scale-in. &lt;br&gt;&lt;br&gt; **OldestVM** When a virtual machine scale set is being scaled-in, the oldest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the oldest virtual machines that are not protected will be chosen for removal. &lt;br&gt;&lt;br&gt; **NewestVM** When a virtual machine scale set is being scaled-in, the newest virtual machines that are not protected from scale-in will be chosen for removal. For zonal virtual machine scale sets, the scale set will first be balanced across zones. Within each zone, the newest virtual machines that are not protected will be chosen for removal. &lt;br&gt;&lt;br&gt; | [optional] 

## Example

```python
from openapi_client.models.scale_in_policy import ScaleInPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleInPolicy from a JSON string
scale_in_policy_instance = ScaleInPolicy.from_json(json)
# print the JSON string representation of the object
print(ScaleInPolicy.to_json())

# convert the object into a dict
scale_in_policy_dict = scale_in_policy_instance.to_dict()
# create an instance of ScaleInPolicy from a dict
scale_in_policy_from_dict = ScaleInPolicy.from_dict(scale_in_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


