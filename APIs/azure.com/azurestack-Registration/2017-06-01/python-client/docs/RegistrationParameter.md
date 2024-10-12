# RegistrationParameter

Registration resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the resource. | [optional] 
**properties** | [**RegistrationParameterProperties**](RegistrationParameterProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.registration_parameter import RegistrationParameter

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationParameter from a JSON string
registration_parameter_instance = RegistrationParameter.from_json(json)
# print the JSON string representation of the object
print(RegistrationParameter.to_json())

# convert the object into a dict
registration_parameter_dict = registration_parameter_instance.to_dict()
# create an instance of RegistrationParameter from a dict
registration_parameter_from_dict = RegistrationParameter.from_dict(registration_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


