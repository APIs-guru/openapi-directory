# GoogleCloudDataplexV1SessionEvent

These messages contain information about sessions within an environment. The monitored resource is 'Environment'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_succeeded** | **bool** | The status of the event. | [optional] 
**fast_startup_enabled** | **bool** | If the session is associated with an environment with fast startup enabled, and was created before being assigned to a user. | [optional] 
**message** | **str** | The log message. | [optional] 
**query** | [**GoogleCloudDataplexV1SessionEventQueryDetail**](GoogleCloudDataplexV1SessionEventQueryDetail.md) |  | [optional] 
**session_id** | **str** | Unique identifier for the session. | [optional] 
**type** | **str** | The type of the event. | [optional] 
**unassigned_duration** | **str** | The idle duration of a warm pooled session before it is assigned to user. | [optional] 
**user_id** | **str** | The information about the user that created the session. It will be the email address of the user. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_session_event import GoogleCloudDataplexV1SessionEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1SessionEvent from a JSON string
google_cloud_dataplex_v1_session_event_instance = GoogleCloudDataplexV1SessionEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1SessionEvent.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_session_event_dict = google_cloud_dataplex_v1_session_event_instance.to_dict()
# create an instance of GoogleCloudDataplexV1SessionEvent from a dict
google_cloud_dataplex_v1_session_event_from_dict = GoogleCloudDataplexV1SessionEvent.from_dict(google_cloud_dataplex_v1_session_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


