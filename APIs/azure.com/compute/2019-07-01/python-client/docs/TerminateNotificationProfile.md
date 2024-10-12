# TerminateNotificationProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable** | **bool** | Specifies whether the Terminate Scheduled event is enabled or disabled. | [optional] 
**not_before_timeout** | **str** | Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M) | [optional] 

## Example

```python
from openapi_client.models.terminate_notification_profile import TerminateNotificationProfile

# TODO update the JSON string below
json = "{}"
# create an instance of TerminateNotificationProfile from a JSON string
terminate_notification_profile_instance = TerminateNotificationProfile.from_json(json)
# print the JSON string representation of the object
print(TerminateNotificationProfile.to_json())

# convert the object into a dict
terminate_notification_profile_dict = terminate_notification_profile_instance.to_dict()
# create an instance of TerminateNotificationProfile from a dict
terminate_notification_profile_from_dict = TerminateNotificationProfile.from_dict(terminate_notification_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


