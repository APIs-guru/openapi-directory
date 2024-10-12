# EventsUserInfo

User info for an event result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of the user | [optional] 
**authenticated_id** | **str** | Authenticated ID of the user | [optional] 
**id** | **str** | ID of the user | [optional] 

## Example

```python
from openapi_client.models.events_user_info import EventsUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsUserInfo from a JSON string
events_user_info_instance = EventsUserInfo.from_json(json)
# print the JSON string representation of the object
print(EventsUserInfo.to_json())

# convert the object into a dict
events_user_info_dict = events_user_info_instance.to_dict()
# create an instance of EventsUserInfo from a dict
events_user_info_from_dict = EventsUserInfo.from_dict(events_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


