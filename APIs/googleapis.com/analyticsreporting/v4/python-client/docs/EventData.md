# EventData

Represents all the details pertaining to an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_action** | **str** | Type of interaction with the object. Eg: &#39;play&#39;. | [optional] 
**event_category** | **str** | The object on the page that was interacted with. Eg: &#39;Video&#39;. | [optional] 
**event_count** | **str** | Number of such events in this activity. | [optional] 
**event_label** | **str** | Label attached with the event. | [optional] 
**event_value** | **str** | Numeric value associated with the event. | [optional] 

## Example

```python
from openapi_client.models.event_data import EventData

# TODO update the JSON string below
json = "{}"
# create an instance of EventData from a JSON string
event_data_instance = EventData.from_json(json)
# print the JSON string representation of the object
print(EventData.to_json())

# convert the object into a dict
event_data_dict = event_data_instance.to_dict()
# create an instance of EventData from a dict
event_data_from_dict = EventData.from_dict(event_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


