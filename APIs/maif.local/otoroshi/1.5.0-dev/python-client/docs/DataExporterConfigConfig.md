# DataExporterConfigConfig

Data Exporter config

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_uri** | **str** | URL of the elastic cluster | 
**headers** | **Dict[str, str]** | Optional headers | 
**index** | **str** | Index for events. Default is otoroshi-events | 
**password** | **str** | Optional password | 
**type** | **str** | Type of events. Default is event | 
**user** | **str** | Optional user | 
**key_pass** | **str** | Optional keypass | [optional] 
**key_store** | **str** | Optional path to keystore | [optional] 
**servers** | **List[str]** | URLs of the kafka servers | 
**topic** | **str** | Topic | 
**trustore** | **str** | Optional path to trustore | [optional] 
**namespace** | **str** | Namespace | 
**tenant** | **str** | Tenant | 
**uri** | **List[str]** | URI of the pulsar server | 
**path** | **str** | Path to file | 
**to** | **List[str]** | Email adresses of recipents | [optional] 
**url** | **str** | Url of mailer | [optional] 
**api_key** | **str** | Mailgun apiKey | [optional] 
**domain** | **str** | Mailgun domain | [optional] 
**eu** | **bool** | Whether the mailgun server is european | [optional] 
**api_key_private** | **str** | Mailjet private apiKey | [optional] 
**api_key_public** | **str** | Sendgrid apiKey | [optional] 
**config** | **Dict[str, str]** | Custom data exporter config | 
**ref** | **str** | Script Ref | 

## Example

```python
from openapi_client.models.data_exporter_config_config import DataExporterConfigConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DataExporterConfigConfig from a JSON string
data_exporter_config_config_instance = DataExporterConfigConfig.from_json(json)
# print the JSON string representation of the object
print(DataExporterConfigConfig.to_json())

# convert the object into a dict
data_exporter_config_config_dict = data_exporter_config_config_instance.to_dict()
# create an instance of DataExporterConfigConfig from a dict
data_exporter_config_config_from_dict = DataExporterConfigConfig.from_dict(data_exporter_config_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


