# UserActivitySession

This represents a user session performed on a specific device at a certain time over a period of time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activities** | [**List[Activity]**](Activity.md) | Represents a detailed view into each of the activity in this session. | [optional] 
**data_source** | **str** | The data source of a hit. By default, hits sent from analytics.js are reported as \&quot;web\&quot; and hits sent from the mobile SDKs are reported as \&quot;app\&quot;. These values can be overridden in the Measurement Protocol. | [optional] 
**device_category** | **str** | The type of device used: \&quot;mobile\&quot;, \&quot;tablet\&quot; etc. | [optional] 
**platform** | **str** | Platform on which the activity happened: \&quot;android\&quot;, \&quot;ios\&quot; etc. | [optional] 
**session_date** | **str** | Date of this session in ISO-8601 format. | [optional] 
**session_id** | **str** | Unique ID of the session. | [optional] 

## Example

```python
from openapi_client.models.user_activity_session import UserActivitySession

# TODO update the JSON string below
json = "{}"
# create an instance of UserActivitySession from a JSON string
user_activity_session_instance = UserActivitySession.from_json(json)
# print the JSON string representation of the object
print(UserActivitySession.to_json())

# convert the object into a dict
user_activity_session_dict = user_activity_session_instance.to_dict()
# create an instance of UserActivitySession from a dict
user_activity_session_from_dict = UserActivitySession.from_dict(user_activity_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


