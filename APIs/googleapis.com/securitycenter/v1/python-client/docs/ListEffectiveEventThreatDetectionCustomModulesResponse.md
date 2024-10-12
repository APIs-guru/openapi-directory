# ListEffectiveEventThreatDetectionCustomModulesResponse

Response for listing EffectiveEventThreatDetectionCustomModules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_event_threat_detection_custom_modules** | [**List[EffectiveEventThreatDetectionCustomModule]**](EffectiveEventThreatDetectionCustomModule.md) | Effective custom modules belonging to the requested parent. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_effective_event_threat_detection_custom_modules_response import ListEffectiveEventThreatDetectionCustomModulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEffectiveEventThreatDetectionCustomModulesResponse from a JSON string
list_effective_event_threat_detection_custom_modules_response_instance = ListEffectiveEventThreatDetectionCustomModulesResponse.from_json(json)
# print the JSON string representation of the object
print(ListEffectiveEventThreatDetectionCustomModulesResponse.to_json())

# convert the object into a dict
list_effective_event_threat_detection_custom_modules_response_dict = list_effective_event_threat_detection_custom_modules_response_instance.to_dict()
# create an instance of ListEffectiveEventThreatDetectionCustomModulesResponse from a dict
list_effective_event_threat_detection_custom_modules_response_from_dict = ListEffectiveEventThreatDetectionCustomModulesResponse.from_dict(list_effective_event_threat_detection_custom_modules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


