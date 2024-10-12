# StoreNotificationsGetNotificationByAppId200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**valid_until** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.store_notifications_get_notification_by_app_id200_response import StoreNotificationsGetNotificationByAppId200Response

# TODO update the JSON string below
json = "{}"
# create an instance of StoreNotificationsGetNotificationByAppId200Response from a JSON string
store_notifications_get_notification_by_app_id200_response_instance = StoreNotificationsGetNotificationByAppId200Response.from_json(json)
# print the JSON string representation of the object
print(StoreNotificationsGetNotificationByAppId200Response.to_json())

# convert the object into a dict
store_notifications_get_notification_by_app_id200_response_dict = store_notifications_get_notification_by_app_id200_response_instance.to_dict()
# create an instance of StoreNotificationsGetNotificationByAppId200Response from a dict
store_notifications_get_notification_by_app_id200_response_from_dict = StoreNotificationsGetNotificationByAppId200Response.from_dict(store_notifications_get_notification_by_app_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


