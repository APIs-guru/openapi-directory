# RegistrationParameterProperties

Properties of the Azure Stack registration resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registration_token** | **str** | The token identifying registered Azure Stack | 

## Example

```python
from openapi_client.models.registration_parameter_properties import RegistrationParameterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationParameterProperties from a JSON string
registration_parameter_properties_instance = RegistrationParameterProperties.from_json(json)
# print the JSON string representation of the object
print(RegistrationParameterProperties.to_json())

# convert the object into a dict
registration_parameter_properties_dict = registration_parameter_properties_instance.to_dict()
# create an instance of RegistrationParameterProperties from a dict
registration_parameter_properties_from_dict = RegistrationParameterProperties.from_dict(registration_parameter_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


