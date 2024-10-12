# InstanceFlexibilityPolicy

Instance flexibility Policy allowing a mixture of VM shapes and provisioning models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_selection_list** | [**List[InstanceSelection]**](InstanceSelection.md) | Optional. List of instance selection options that the group will use when creating new VMs. | [optional] 
**instance_selection_results** | [**List[InstanceSelectionResult]**](InstanceSelectionResult.md) | Output only. A list of instance selection results in the group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_flexibility_policy import InstanceFlexibilityPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceFlexibilityPolicy from a JSON string
instance_flexibility_policy_instance = InstanceFlexibilityPolicy.from_json(json)
# print the JSON string representation of the object
print(InstanceFlexibilityPolicy.to_json())

# convert the object into a dict
instance_flexibility_policy_dict = instance_flexibility_policy_instance.to_dict()
# create an instance of InstanceFlexibilityPolicy from a dict
instance_flexibility_policy_from_dict = InstanceFlexibilityPolicy.from_dict(instance_flexibility_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


