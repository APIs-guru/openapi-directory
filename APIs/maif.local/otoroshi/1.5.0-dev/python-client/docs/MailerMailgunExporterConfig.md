# MailerMailgunExporterConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | Mailgun apiKey | [optional] 
**domain** | **str** | Mailgun domain | [optional] 
**eu** | **bool** | Whether the mailgun server is european | [optional] 
**to** | **List[str]** | Email adresses of recipents | [optional] 
**type** | **str** | Type of mailer | 

## Example

```python
from openapi_client.models.mailer_mailgun_exporter_config import MailerMailgunExporterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MailerMailgunExporterConfig from a JSON string
mailer_mailgun_exporter_config_instance = MailerMailgunExporterConfig.from_json(json)
# print the JSON string representation of the object
print(MailerMailgunExporterConfig.to_json())

# convert the object into a dict
mailer_mailgun_exporter_config_dict = mailer_mailgun_exporter_config_instance.to_dict()
# create an instance of MailerMailgunExporterConfig from a dict
mailer_mailgun_exporter_config_from_dict = MailerMailgunExporterConfig.from_dict(mailer_mailgun_exporter_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


