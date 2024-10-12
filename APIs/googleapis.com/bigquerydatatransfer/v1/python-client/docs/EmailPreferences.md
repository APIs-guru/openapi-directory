# EmailPreferences

Represents preferences for sending email notifications for transfer run events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_failure_email** | **bool** | If true, email notifications will be sent on transfer run failures. | [optional] 

## Example

```python
from openapi_client.models.email_preferences import EmailPreferences

# TODO update the JSON string below
json = "{}"
# create an instance of EmailPreferences from a JSON string
email_preferences_instance = EmailPreferences.from_json(json)
# print the JSON string representation of the object
print(EmailPreferences.to_json())

# convert the object into a dict
email_preferences_dict = email_preferences_instance.to_dict()
# create an instance of EmailPreferences from a dict
email_preferences_from_dict = EmailPreferences.from_dict(email_preferences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


