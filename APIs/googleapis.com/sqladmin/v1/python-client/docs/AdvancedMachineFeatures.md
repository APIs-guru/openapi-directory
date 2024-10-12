# AdvancedMachineFeatures

Specifies options for controlling advanced machine features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threads_per_core** | **int** | The number of threads per physical core. | [optional] 

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


