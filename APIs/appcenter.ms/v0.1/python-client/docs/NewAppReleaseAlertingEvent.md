# NewAppReleaseAlertingEvent

New app release alerting event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_id** | **str** | A unique identifier for this event instance. Useful for deduplication | 
**event_timestamp** | **str** | ISO 8601 date time when event was generated | 
**properties** | **object** | Obsolete. Use emailProperties. | [optional] 
**app_release_properties** | [**NewAppReleaseAlertingEventAllOfAppReleaseProperties**](NewAppReleaseAlertingEventAllOfAppReleaseProperties.md) |  | [optional] 
**disable_webhook** | **bool** | indicate whether notify via webhook or not | [optional] 
**user_ids** | **List[str]** | List of users who need to receive an email notification. If this is not null, then only sending emails will be triggered even if the event requires calling webhooks or doing other actions. | [optional] 

## Example

```python
from openapi_client.models.new_app_release_alerting_event import NewAppReleaseAlertingEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NewAppReleaseAlertingEvent from a JSON string
new_app_release_alerting_event_instance = NewAppReleaseAlertingEvent.from_json(json)
# print the JSON string representation of the object
print(NewAppReleaseAlertingEvent.to_json())

# convert the object into a dict
new_app_release_alerting_event_dict = new_app_release_alerting_event_instance.to_dict()
# create an instance of NewAppReleaseAlertingEvent from a dict
new_app_release_alerting_event_from_dict = NewAppReleaseAlertingEvent.from_dict(new_app_release_alerting_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


