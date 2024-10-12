# PublishUrlNotificationResponse

Output for PublishUrlNotification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url_notification_metadata** | [**UrlNotificationMetadata**](UrlNotificationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.publish_url_notification_response import PublishUrlNotificationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PublishUrlNotificationResponse from a JSON string
publish_url_notification_response_instance = PublishUrlNotificationResponse.from_json(json)
# print the JSON string representation of the object
print(PublishUrlNotificationResponse.to_json())

# convert the object into a dict
publish_url_notification_response_dict = publish_url_notification_response_instance.to_dict()
# create an instance of PublishUrlNotificationResponse from a dict
publish_url_notification_response_from_dict = PublishUrlNotificationResponse.from_dict(publish_url_notification_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


