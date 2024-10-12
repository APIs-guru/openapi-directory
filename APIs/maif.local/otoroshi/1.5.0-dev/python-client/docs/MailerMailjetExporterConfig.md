# MailerMailjetExporterConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key_private** | **str** | Mailjet private apiKey | [optional] 
**api_key_public** | **str** | Mailjet public apiKey | [optional] 
**to** | **List[str]** | Email adresses of recipents | [optional] 
**type** | **str** | Type of mailer | 

## Example

```python
from openapi_client.models.mailer_mailjet_exporter_config import MailerMailjetExporterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MailerMailjetExporterConfig from a JSON string
mailer_mailjet_exporter_config_instance = MailerMailjetExporterConfig.from_json(json)
# print the JSON string representation of the object
print(MailerMailjetExporterConfig.to_json())

# convert the object into a dict
mailer_mailjet_exporter_config_dict = mailer_mailjet_exporter_config_instance.to_dict()
# create an instance of MailerMailjetExporterConfig from a dict
mailer_mailjet_exporter_config_from_dict = MailerMailjetExporterConfig.from_dict(mailer_mailjet_exporter_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


