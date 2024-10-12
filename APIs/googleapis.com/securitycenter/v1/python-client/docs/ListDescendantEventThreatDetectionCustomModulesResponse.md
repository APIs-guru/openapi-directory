# ListDescendantEventThreatDetectionCustomModulesResponse

Response for listing current and descendant resident Event Threat Detection custom modules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_threat_detection_custom_modules** | [**List[EventThreatDetectionCustomModule]**](EventThreatDetectionCustomModule.md) | Custom modules belonging to the requested parent. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_descendant_event_threat_detection_custom_modules_response import ListDescendantEventThreatDetectionCustomModulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDescendantEventThreatDetectionCustomModulesResponse from a JSON string
list_descendant_event_threat_detection_custom_modules_response_instance = ListDescendantEventThreatDetectionCustomModulesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDescendantEventThreatDetectionCustomModulesResponse.to_json())

# convert the object into a dict
list_descendant_event_threat_detection_custom_modules_response_dict = list_descendant_event_threat_detection_custom_modules_response_instance.to_dict()
# create an instance of ListDescendantEventThreatDetectionCustomModulesResponse from a dict
list_descendant_event_threat_detection_custom_modules_response_from_dict = ListDescendantEventThreatDetectionCustomModulesResponse.from_dict(list_descendant_event_threat_detection_custom_modules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


