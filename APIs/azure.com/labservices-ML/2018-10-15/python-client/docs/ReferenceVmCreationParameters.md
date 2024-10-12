# ReferenceVmCreationParameters

Creation parameters for Reference Vm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password of the virtual machine. | 
**user_name** | **str** | The username of the virtual machine | 

## Example

```python
from openapi_client.models.reference_vm_creation_parameters import ReferenceVmCreationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceVmCreationParameters from a JSON string
reference_vm_creation_parameters_instance = ReferenceVmCreationParameters.from_json(json)
# print the JSON string representation of the object
print(ReferenceVmCreationParameters.to_json())

# convert the object into a dict
reference_vm_creation_parameters_dict = reference_vm_creation_parameters_instance.to_dict()
# create an instance of ReferenceVmCreationParameters from a dict
reference_vm_creation_parameters_from_dict = ReferenceVmCreationParameters.from_dict(reference_vm_creation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


