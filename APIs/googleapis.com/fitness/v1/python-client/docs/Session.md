# Session

Sessions contain metadata, such as a user-friendly name and time interval information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_time_millis** | **str** | Session active time. While start_time_millis and end_time_millis define the full session time, the active time can be shorter and specified by active_time_millis. If the inactive time during the session is known, it should also be inserted via a com.google.activity.segment data point with a STILL activity value | [optional] 
**activity_type** | **int** | The type of activity this session represents. | [optional] 
**application** | [**Application**](Application.md) |  | [optional] 
**description** | **str** | A description for this session. | [optional] 
**end_time_millis** | **str** | An end time, in milliseconds since epoch, inclusive. | [optional] 
**id** | **str** | A client-generated identifier that is unique across all sessions owned by this particular user. | [optional] 
**modified_time_millis** | **str** | A timestamp that indicates when the session was last modified. | [optional] 
**name** | **str** | A human readable name of the session. | [optional] 
**start_time_millis** | **str** | A start time, in milliseconds since epoch, inclusive. | [optional] 

## Example

```python
from openapi_client.models.session import Session

# TODO update the JSON string below
json = "{}"
# create an instance of Session from a JSON string
session_instance = Session.from_json(json)
# print the JSON string representation of the object
print(Session.to_json())

# convert the object into a dict
session_dict = session_instance.to_dict()
# create an instance of Session from a dict
session_from_dict = Session.from_dict(session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


