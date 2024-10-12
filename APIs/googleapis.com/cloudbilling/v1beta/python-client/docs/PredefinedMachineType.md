# PredefinedMachineType

Specification of a predefined machine type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_type** | **str** | The [machine type](https://cloud.google.com/compute/docs/machine-types). For example: \&quot;n1-standard1\&quot;. | [optional] 

## Example

```python
from openapi_client.models.predefined_machine_type import PredefinedMachineType

# TODO update the JSON string below
json = "{}"
# create an instance of PredefinedMachineType from a JSON string
predefined_machine_type_instance = PredefinedMachineType.from_json(json)
# print the JSON string representation of the object
print(PredefinedMachineType.to_json())

# convert the object into a dict
predefined_machine_type_dict = predefined_machine_type_instance.to_dict()
# create an instance of PredefinedMachineType from a dict
predefined_machine_type_from_dict = PredefinedMachineType.from_dict(predefined_machine_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


