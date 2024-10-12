# ValidateEventThreatDetectionCustomModuleResponse

Response to validating an Event Threat Detection custom module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**CustomModuleValidationErrors**](CustomModuleValidationErrors.md) |  | [optional] 

## Example

```python
from openapi_client.models.validate_event_threat_detection_custom_module_response import ValidateEventThreatDetectionCustomModuleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateEventThreatDetectionCustomModuleResponse from a JSON string
validate_event_threat_detection_custom_module_response_instance = ValidateEventThreatDetectionCustomModuleResponse.from_json(json)
# print the JSON string representation of the object
print(ValidateEventThreatDetectionCustomModuleResponse.to_json())

# convert the object into a dict
validate_event_threat_detection_custom_module_response_dict = validate_event_threat_detection_custom_module_response_instance.to_dict()
# create an instance of ValidateEventThreatDetectionCustomModuleResponse from a dict
validate_event_threat_detection_custom_module_response_from_dict = ValidateEventThreatDetectionCustomModuleResponse.from_dict(validate_event_threat_detection_custom_module_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


