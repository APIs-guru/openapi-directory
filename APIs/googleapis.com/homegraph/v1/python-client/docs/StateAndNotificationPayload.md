# StateAndNotificationPayload

Payload containing the state and notification information for devices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**ReportStateAndNotificationDevice**](ReportStateAndNotificationDevice.md) |  | [optional] 

## Example

```python
from openapi_client.models.state_and_notification_payload import StateAndNotificationPayload

# TODO update the JSON string below
json = "{}"
# create an instance of StateAndNotificationPayload from a JSON string
state_and_notification_payload_instance = StateAndNotificationPayload.from_json(json)
# print the JSON string representation of the object
print(StateAndNotificationPayload.to_json())

# convert the object into a dict
state_and_notification_payload_dict = state_and_notification_payload_instance.to_dict()
# create an instance of StateAndNotificationPayload from a dict
state_and_notification_payload_from_dict = StateAndNotificationPayload.from_dict(state_and_notification_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


