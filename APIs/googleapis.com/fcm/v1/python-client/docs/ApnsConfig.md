# ApnsConfig

[Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fcm_options** | [**ApnsFcmOptions**](ApnsFcmOptions.md) |  | [optional] 
**headers** | **Dict[str, str]** | HTTP request headers defined in Apple Push Notification Service. Refer to [APNs request headers](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns) for supported headers such as &#x60;apns-expiration&#x60; and &#x60;apns-priority&#x60;. The backend sets a default value for &#x60;apns-expiration&#x60; of 30 days and a default value for &#x60;apns-priority&#x60; of 10 if not explicitly set. | [optional] 
**payload** | **Dict[str, object]** | APNs payload as a JSON object, including both &#x60;aps&#x60; dictionary and custom payload. See [Payload Key Reference](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification). If present, it overrides google.firebase.fcm.v1.Notification.title and google.firebase.fcm.v1.Notification.body. | [optional] 

## Example

```python
from openapi_client.models.apns_config import ApnsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ApnsConfig from a JSON string
apns_config_instance = ApnsConfig.from_json(json)
# print the JSON string representation of the object
print(ApnsConfig.to_json())

# convert the object into a dict
apns_config_dict = apns_config_instance.to_dict()
# create an instance of ApnsConfig from a dict
apns_config_from_dict = ApnsConfig.from_dict(apns_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


