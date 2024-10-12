# CustomEvent

Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an annotation on a first party impression, or an annotation on a first party click.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotate_click_event** | [**CustomEventClickAnnotation**](CustomEventClickAnnotation.md) |  | [optional] 
**annotate_impression_event** | [**CustomEventImpressionAnnotation**](CustomEventImpressionAnnotation.md) |  | [optional] 
**custom_variables** | [**List[CustomVariable]**](CustomVariable.md) | Custom variables associated with the event. | [optional] 
**event_type** | **str** | The type of event. If INSERT, the fields in insertEvent need to be populated. If ANNOTATE, the fields in either annotateClickEvent or annotateImpressionEvent need to be populated. | [optional] 
**floodlight_configuration_id** | **str** | Floodlight configuration ID of the advertiser the event is linked to. This is a required field. | [optional] 
**insert_event** | [**CustomEventInsert**](CustomEventInsert.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#customEvent\&quot;. | [optional] 
**ordinal** | **str** | The ordinal of this custom event. This is a required field. | [optional] 
**timestamp_micros** | **str** | The timestamp of this custom event, in Unix epoch micros. This is a required field. | [optional] 

## Example

```python
from openapi_client.models.custom_event import CustomEvent

# TODO update the JSON string below
json = "{}"
# create an instance of CustomEvent from a JSON string
custom_event_instance = CustomEvent.from_json(json)
# print the JSON string representation of the object
print(CustomEvent.to_json())

# convert the object into a dict
custom_event_dict = custom_event_instance.to_dict()
# create an instance of CustomEvent from a dict
custom_event_from_dict = CustomEvent.from_dict(custom_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


