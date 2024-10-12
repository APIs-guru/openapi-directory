# MailerGenericExporterConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | **Dict[str, str]** | Optional headers | [optional] 
**to** | **List[str]** | Email adresses of recipents | [optional] 
**type** | **str** | Type of mailer | 
**url** | **str** | Url of mailer | [optional] 

## Example

```python
from openapi_client.models.mailer_generic_exporter_config import MailerGenericExporterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MailerGenericExporterConfig from a JSON string
mailer_generic_exporter_config_instance = MailerGenericExporterConfig.from_json(json)
# print the JSON string representation of the object
print(MailerGenericExporterConfig.to_json())

# convert the object into a dict
mailer_generic_exporter_config_dict = mailer_generic_exporter_config_instance.to_dict()
# create an instance of MailerGenericExporterConfig from a dict
mailer_generic_exporter_config_from_dict = MailerGenericExporterConfig.from_dict(mailer_generic_exporter_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


