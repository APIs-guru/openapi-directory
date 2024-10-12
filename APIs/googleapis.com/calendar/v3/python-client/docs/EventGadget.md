# EventGadget

A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** | The gadget&#39;s display mode. Deprecated. Possible values are:   - \&quot;icon\&quot; - The gadget displays next to the event&#39;s title in the calendar view.  - \&quot;chip\&quot; - The gadget displays when the event is clicked. | [optional] 
**height** | **int** | The gadget&#39;s height in pixels. The height must be an integer greater than 0. Optional. Deprecated. | [optional] 
**icon_link** | **str** | The gadget&#39;s icon URL. The URL scheme must be HTTPS. Deprecated. | [optional] 
**link** | **str** | The gadget&#39;s URL. The URL scheme must be HTTPS. Deprecated. | [optional] 
**preferences** | **Dict[str, str]** | Preferences. | [optional] 
**title** | **str** | The gadget&#39;s title. Deprecated. | [optional] 
**type** | **str** | The gadget&#39;s type. Deprecated. | [optional] 
**width** | **int** | The gadget&#39;s width in pixels. The width must be an integer greater than 0. Optional. Deprecated. | [optional] 

## Example

```python
from openapi_client.models.event_gadget import EventGadget

# TODO update the JSON string below
json = "{}"
# create an instance of EventGadget from a JSON string
event_gadget_instance = EventGadget.from_json(json)
# print the JSON string representation of the object
print(EventGadget.to_json())

# convert the object into a dict
event_gadget_dict = event_gadget_instance.to_dict()
# create an instance of EventGadget from a dict
event_gadget_from_dict = EventGadget.from_dict(event_gadget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


