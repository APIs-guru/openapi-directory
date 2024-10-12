# DedicatedHsmPatchParameters

Patchable properties of the dedicated HSM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.dedicated_hsm_patch_parameters import DedicatedHsmPatchParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHsmPatchParameters from a JSON string
dedicated_hsm_patch_parameters_instance = DedicatedHsmPatchParameters.from_json(json)
# print the JSON string representation of the object
print(DedicatedHsmPatchParameters.to_json())

# convert the object into a dict
dedicated_hsm_patch_parameters_dict = dedicated_hsm_patch_parameters_instance.to_dict()
# create an instance of DedicatedHsmPatchParameters from a dict
dedicated_hsm_patch_parameters_from_dict = DedicatedHsmPatchParameters.from_dict(dedicated_hsm_patch_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


