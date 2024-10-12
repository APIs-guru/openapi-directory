# ValidateEventThreatDetectionCustomModuleRequest

Request to validate an Event Threat Detection custom module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**raw_text** | **str** | Required. The raw text of the module&#39;s contents. Used to generate error messages. | [optional] 
**type** | **str** | Required. The type of the module (e.g. CONFIGURABLE_BAD_IP). | [optional] 

## Example

```python
from openapi_client.models.validate_event_threat_detection_custom_module_request import ValidateEventThreatDetectionCustomModuleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateEventThreatDetectionCustomModuleRequest from a JSON string
validate_event_threat_detection_custom_module_request_instance = ValidateEventThreatDetectionCustomModuleRequest.from_json(json)
# print the JSON string representation of the object
print(ValidateEventThreatDetectionCustomModuleRequest.to_json())

# convert the object into a dict
validate_event_threat_detection_custom_module_request_dict = validate_event_threat_detection_custom_module_request_instance.to_dict()
# create an instance of ValidateEventThreatDetectionCustomModuleRequest from a dict
validate_event_threat_detection_custom_module_request_from_dict = ValidateEventThreatDetectionCustomModuleRequest.from_dict(validate_event_threat_detection_custom_module_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


