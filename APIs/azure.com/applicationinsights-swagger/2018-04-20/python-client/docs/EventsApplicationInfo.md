# EventsApplicationInfo

Application info for an event result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | Version of the application | [optional] 

## Example

```python
from openapi_client.models.events_application_info import EventsApplicationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsApplicationInfo from a JSON string
events_application_info_instance = EventsApplicationInfo.from_json(json)
# print the JSON string representation of the object
print(EventsApplicationInfo.to_json())

# convert the object into a dict
events_application_info_dict = events_application_info_instance.to_dict()
# create an instance of EventsApplicationInfo from a dict
events_application_info_from_dict = EventsApplicationInfo.from_dict(events_application_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


