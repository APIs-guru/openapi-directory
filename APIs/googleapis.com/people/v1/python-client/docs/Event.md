# Event

An event related to the person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**formatted_type** | **str** | Output only. The type of the event translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. | [optional] [readonly] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**type** | **str** | The type of the event. The type can be custom or one of these predefined values: * &#x60;anniversary&#x60; * &#x60;other&#x60; | [optional] 

## Example

```python
from openapi_client.models.event import Event

# TODO update the JSON string below
json = "{}"
# create an instance of Event from a JSON string
event_instance = Event.from_json(json)
# print the JSON string representation of the object
print(Event.to_json())

# convert the object into a dict
event_dict = event_instance.to_dict()
# create an instance of Event from a dict
event_from_dict = Event.from_dict(event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


