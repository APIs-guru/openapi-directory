# ExitEvent

Exit event of the creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the click tag of the exit event. The name must be unique within one creative. Leave it empty or unset for creatives containing image assets only. | [optional] 
**reporting_name** | **str** | The name used to identify this event in reports. Leave it empty or unset for creatives containing image assets only. | [optional] 
**type** | **str** | Required. The type of the exit event. | [optional] 
**url** | **str** | Required. The click through URL of the exit event. This is required when type is: * &#x60;EXIT_EVENT_TYPE_DEFAULT&#x60; * &#x60;EXIT_EVENT_TYPE_BACKUP&#x60; | [optional] 

## Example

```python
from openapi_client.models.exit_event import ExitEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ExitEvent from a JSON string
exit_event_instance = ExitEvent.from_json(json)
# print the JSON string representation of the object
print(ExitEvent.to_json())

# convert the object into a dict
exit_event_dict = exit_event_instance.to_dict()
# create an instance of ExitEvent from a dict
exit_event_from_dict = ExitEvent.from_dict(exit_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


