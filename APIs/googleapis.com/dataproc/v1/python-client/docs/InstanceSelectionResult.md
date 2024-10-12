# InstanceSelectionResult

Defines a mapping from machine types to the number of VMs that are created with each machine type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_type** | **str** | Output only. Full machine-type names, e.g. \&quot;n1-standard-16\&quot;. | [optional] [readonly] 
**vm_count** | **int** | Output only. Number of VM provisioned with the machine_type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_selection_result import InstanceSelectionResult

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceSelectionResult from a JSON string
instance_selection_result_instance = InstanceSelectionResult.from_json(json)
# print the JSON string representation of the object
print(InstanceSelectionResult.to_json())

# convert the object into a dict
instance_selection_result_dict = instance_selection_result_instance.to_dict()
# create an instance of InstanceSelectionResult from a dict
instance_selection_result_from_dict = InstanceSelectionResult.from_dict(instance_selection_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


