# EmailNotification

Email notification of an autoscale event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_emails** | **List[str]** | the custom e-mails list. This value can be null or empty, in which case this attribute will be ignored. | [optional] 
**send_to_subscription_administrator** | **bool** | a value indicating whether to send email to subscription administrator. | [optional] 
**send_to_subscription_co_administrators** | **bool** | a value indicating whether to send email to subscription co-administrators. | [optional] 

## Example

```python
from openapi_client.models.email_notification import EmailNotification

# TODO update the JSON string below
json = "{}"
# create an instance of EmailNotification from a JSON string
email_notification_instance = EmailNotification.from_json(json)
# print the JSON string representation of the object
print(EmailNotification.to_json())

# convert the object into a dict
email_notification_dict = email_notification_instance.to_dict()
# create an instance of EmailNotification from a dict
email_notification_from_dict = EmailNotification.from_dict(email_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


