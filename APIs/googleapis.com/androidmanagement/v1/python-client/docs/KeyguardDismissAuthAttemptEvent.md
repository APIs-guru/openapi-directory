# KeyguardDismissAuthAttemptEvent

An attempt was made to unlock the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strong_auth_method_used** | **bool** | Whether a strong form of authentication (password, PIN, or pattern) was used to unlock device. | [optional] 
**success** | **bool** | Whether the unlock attempt was successful. | [optional] 

## Example

```python
from openapi_client.models.keyguard_dismiss_auth_attempt_event import KeyguardDismissAuthAttemptEvent

# TODO update the JSON string below
json = "{}"
# create an instance of KeyguardDismissAuthAttemptEvent from a JSON string
keyguard_dismiss_auth_attempt_event_instance = KeyguardDismissAuthAttemptEvent.from_json(json)
# print the JSON string representation of the object
print(KeyguardDismissAuthAttemptEvent.to_json())

# convert the object into a dict
keyguard_dismiss_auth_attempt_event_dict = keyguard_dismiss_auth_attempt_event_instance.to_dict()
# create an instance of KeyguardDismissAuthAttemptEvent from a dict
keyguard_dismiss_auth_attempt_event_from_dict = KeyguardDismissAuthAttemptEvent.from_dict(keyguard_dismiss_auth_attempt_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


