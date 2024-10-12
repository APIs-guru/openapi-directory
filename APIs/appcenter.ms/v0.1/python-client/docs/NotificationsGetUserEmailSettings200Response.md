# NotificationsGetUserEmailSettings200Response

Alerting Default Email Settings of the user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Unique request identifier for tracking | 
**e_tag** | **str** | The ETag of the entity | [optional] 
**enabled** | **bool** | Allows to forcefully disable emails on app or user level | 
**settings** | [**List[NotificationsGetAppEmailSettings200ResponseAllOfAllOfSettingsInner]**](NotificationsGetAppEmailSettings200ResponseAllOfAllOfSettingsInner.md) | The settings the user has for the app | 
**user_id** | **str** | The unique id (UUID) of the user | [optional] 

## Example

```python
from openapi_client.models.notifications_get_user_email_settings200_response import NotificationsGetUserEmailSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationsGetUserEmailSettings200Response from a JSON string
notifications_get_user_email_settings200_response_instance = NotificationsGetUserEmailSettings200Response.from_json(json)
# print the JSON string representation of the object
print(NotificationsGetUserEmailSettings200Response.to_json())

# convert the object into a dict
notifications_get_user_email_settings200_response_dict = notifications_get_user_email_settings200_response_instance.to_dict()
# create an instance of NotificationsGetUserEmailSettings200Response from a dict
notifications_get_user_email_settings200_response_from_dict = NotificationsGetUserEmailSettings200Response.from_dict(notifications_get_user_email_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


