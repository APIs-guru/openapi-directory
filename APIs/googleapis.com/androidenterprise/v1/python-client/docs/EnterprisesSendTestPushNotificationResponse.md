# EnterprisesSendTestPushNotificationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** | The message ID of the test push notification that was sent. | [optional] 
**topic_name** | **str** | The name of the Cloud Pub/Sub topic to which notifications for this enterprise&#39;s enrolled account will be sent. | [optional] 

## Example

```python
from openapi_client.models.enterprises_send_test_push_notification_response import EnterprisesSendTestPushNotificationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EnterprisesSendTestPushNotificationResponse from a JSON string
enterprises_send_test_push_notification_response_instance = EnterprisesSendTestPushNotificationResponse.from_json(json)
# print the JSON string representation of the object
print(EnterprisesSendTestPushNotificationResponse.to_json())

# convert the object into a dict
enterprises_send_test_push_notification_response_dict = enterprises_send_test_push_notification_response_instance.to_dict()
# create an instance of EnterprisesSendTestPushNotificationResponse from a dict
enterprises_send_test_push_notification_response_from_dict = EnterprisesSendTestPushNotificationResponse.from_dict(enterprises_send_test_push_notification_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


