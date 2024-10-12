# MailerSendgridExporterConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key_public** | **str** | Sendgrid apiKey | [optional] 
**to** | **List[str]** | Email adresses of recipents | [optional] 
**type** | **str** | Type of mailer | 

## Example

```python
from openapi_client.models.mailer_sendgrid_exporter_config import MailerSendgridExporterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MailerSendgridExporterConfig from a JSON string
mailer_sendgrid_exporter_config_instance = MailerSendgridExporterConfig.from_json(json)
# print the JSON string representation of the object
print(MailerSendgridExporterConfig.to_json())

# convert the object into a dict
mailer_sendgrid_exporter_config_dict = mailer_sendgrid_exporter_config_instance.to_dict()
# create an instance of MailerSendgridExporterConfig from a dict
mailer_sendgrid_exporter_config_from_dict = MailerSendgridExporterConfig.from_dict(mailer_sendgrid_exporter_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


