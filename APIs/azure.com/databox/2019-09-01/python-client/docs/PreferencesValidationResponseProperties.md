# PreferencesValidationResponseProperties

Properties of data center and transport preference validation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Validation status of requested data center and transport. | [optional] [readonly] 

## Example

```python
from openapi_client.models.preferences_validation_response_properties import PreferencesValidationResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PreferencesValidationResponseProperties from a JSON string
preferences_validation_response_properties_instance = PreferencesValidationResponseProperties.from_json(json)
# print the JSON string representation of the object
print(PreferencesValidationResponseProperties.to_json())

# convert the object into a dict
preferences_validation_response_properties_dict = preferences_validation_response_properties_instance.to_dict()
# create an instance of PreferencesValidationResponseProperties from a dict
preferences_validation_response_properties_from_dict = PreferencesValidationResponseProperties.from_dict(preferences_validation_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


