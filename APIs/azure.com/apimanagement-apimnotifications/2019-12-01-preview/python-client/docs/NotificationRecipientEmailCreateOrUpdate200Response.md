# NotificationRecipientEmailCreateOrUpdate200Response

Recipient Email details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NotificationRecipientEmailListByNotification200ResponseValueInnerProperties**](NotificationRecipientEmailListByNotification200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.notification_recipient_email_create_or_update200_response import NotificationRecipientEmailCreateOrUpdate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRecipientEmailCreateOrUpdate200Response from a JSON string
notification_recipient_email_create_or_update200_response_instance = NotificationRecipientEmailCreateOrUpdate200Response.from_json(json)
# print the JSON string representation of the object
print(NotificationRecipientEmailCreateOrUpdate200Response.to_json())

# convert the object into a dict
notification_recipient_email_create_or_update200_response_dict = notification_recipient_email_create_or_update200_response_instance.to_dict()
# create an instance of NotificationRecipientEmailCreateOrUpdate200Response from a dict
notification_recipient_email_create_or_update200_response_from_dict = NotificationRecipientEmailCreateOrUpdate200Response.from_dict(notification_recipient_email_create_or_update200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


