# ControllerUpdateParameters

Parameters for updating an Azure Dev Spaces Controller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **object** | Tags for the Azure Dev Spaces Controller. | [optional] 

## Example

```python
from openapi_client.models.controller_update_parameters import ControllerUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerUpdateParameters from a JSON string
controller_update_parameters_instance = ControllerUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ControllerUpdateParameters.to_json())

# convert the object into a dict
controller_update_parameters_dict = controller_update_parameters_instance.to_dict()
# create an instance of ControllerUpdateParameters from a dict
controller_update_parameters_from_dict = ControllerUpdateParameters.from_dict(controller_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


