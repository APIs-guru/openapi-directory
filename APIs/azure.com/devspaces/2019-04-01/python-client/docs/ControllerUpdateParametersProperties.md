# ControllerUpdateParametersProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_container_host_credentials_base64** | **str** | Credentials of the target container host (base64). | [optional] 

## Example

```python
from openapi_client.models.controller_update_parameters_properties import ControllerUpdateParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerUpdateParametersProperties from a JSON string
controller_update_parameters_properties_instance = ControllerUpdateParametersProperties.from_json(json)
# print the JSON string representation of the object
print(ControllerUpdateParametersProperties.to_json())

# convert the object into a dict
controller_update_parameters_properties_dict = controller_update_parameters_properties_instance.to_dict()
# create an instance of ControllerUpdateParametersProperties from a dict
controller_update_parameters_properties_from_dict = ControllerUpdateParametersProperties.from_dict(controller_update_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


