# MailerSettings

Configuration for mailgun api client

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | Mailgun mailer api key | 
**api_key_private** | **str** | Mailjet mailer private api key | [optional] 
**api_key_public** | **str** | Mailjet mailer public api key | [optional] 
**domain** | **str** | Mailgun mailer domain | 
**eu** | **bool** | Mailgun mailer, use EU tenant api | [optional] 
**header** | **Dict[str, str]** | Generic mailer headers | [optional] 
**type** | **str** | Type of the mailer: console, generic, mailgun, mailjet | [optional] 
**url** | **str** | Generic mailer url | [optional] 

## Example

```python
from openapi_client.models.mailer_settings import MailerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MailerSettings from a JSON string
mailer_settings_instance = MailerSettings.from_json(json)
# print the JSON string representation of the object
print(MailerSettings.to_json())

# convert the object into a dict
mailer_settings_dict = mailer_settings_instance.to_dict()
# create an instance of MailerSettings from a dict
mailer_settings_from_dict = MailerSettings.from_dict(mailer_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


