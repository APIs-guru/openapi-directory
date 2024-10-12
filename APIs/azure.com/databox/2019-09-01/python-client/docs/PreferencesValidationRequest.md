# PreferencesValidationRequest

Request to validate preference of transport and data center.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_type** | **str** | Device type to be used for the job. | 
**preference** | [**Preferences**](Preferences.md) |  | [optional] 

## Example

```python
from openapi_client.models.preferences_validation_request import PreferencesValidationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PreferencesValidationRequest from a JSON string
preferences_validation_request_instance = PreferencesValidationRequest.from_json(json)
# print the JSON string representation of the object
print(PreferencesValidationRequest.to_json())

# convert the object into a dict
preferences_validation_request_dict = preferences_validation_request_instance.to_dict()
# create an instance of PreferencesValidationRequest from a dict
preferences_validation_request_from_dict = PreferencesValidationRequest.from_dict(preferences_validation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


