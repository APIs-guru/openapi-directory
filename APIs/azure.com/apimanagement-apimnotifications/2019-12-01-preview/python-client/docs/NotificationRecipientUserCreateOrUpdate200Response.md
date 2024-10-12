# NotificationRecipientUserCreateOrUpdate200Response

Recipient User details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NotificationRecipientUserListByNotification200ResponseValueInnerProperties**](NotificationRecipientUserListByNotification200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.notification_recipient_user_create_or_update200_response import NotificationRecipientUserCreateOrUpdate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRecipientUserCreateOrUpdate200Response from a JSON string
notification_recipient_user_create_or_update200_response_instance = NotificationRecipientUserCreateOrUpdate200Response.from_json(json)
# print the JSON string representation of the object
print(NotificationRecipientUserCreateOrUpdate200Response.to_json())

# convert the object into a dict
notification_recipient_user_create_or_update200_response_dict = notification_recipient_user_create_or_update200_response_instance.to_dict()
# create an instance of NotificationRecipientUserCreateOrUpdate200Response from a dict
notification_recipient_user_create_or_update200_response_from_dict = NotificationRecipientUserCreateOrUpdate200Response.from_dict(notification_recipient_user_create_or_update200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


