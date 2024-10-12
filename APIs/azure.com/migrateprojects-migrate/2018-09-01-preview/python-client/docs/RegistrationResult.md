# RegistrationResult

Class representing the registration status of a tool with the migrate project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_registered** | **bool** | Gets or sets a value indicating whether the tool is registered or not. | [optional] 

## Example

```python
from openapi_client.models.registration_result import RegistrationResult

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationResult from a JSON string
registration_result_instance = RegistrationResult.from_json(json)
# print the JSON string representation of the object
print(RegistrationResult.to_json())

# convert the object into a dict
registration_result_dict = registration_result_instance.to_dict()
# create an instance of RegistrationResult from a dict
registration_result_from_dict = RegistrationResult.from_dict(registration_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


