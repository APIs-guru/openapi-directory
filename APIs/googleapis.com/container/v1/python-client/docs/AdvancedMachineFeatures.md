# AdvancedMachineFeatures

Specifies options for controlling advanced machine features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threads_per_core** | **str** | The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed. | [optional] 

## Example

```python
from openapi_client.models.advanced_machine_features import AdvancedMachineFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of AdvancedMachineFeatures from a JSON string
advanced_machine_features_instance = AdvancedMachineFeatures.from_json(json)
# print the JSON string representation of the object
print(AdvancedMachineFeatures.to_json())

# convert the object into a dict
advanced_machine_features_dict = advanced_machine_features_instance.to_dict()
# create an instance of AdvancedMachineFeatures from a dict
advanced_machine_features_from_dict = AdvancedMachineFeatures.from_dict(advanced_machine_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


