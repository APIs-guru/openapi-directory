# PulsarDataExporterConfig

The configuration for kafka access

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespace** | **str** | Namespace | 
**tenant** | **str** | Tenant | 
**topic** | **str** | Topic | 
**uri** | **List[str]** | URI of the pulsar server | 

## Example

```python
from openapi_client.models.pulsar_data_exporter_config import PulsarDataExporterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PulsarDataExporterConfig from a JSON string
pulsar_data_exporter_config_instance = PulsarDataExporterConfig.from_json(json)
# print the JSON string representation of the object
print(PulsarDataExporterConfig.to_json())

# convert the object into a dict
pulsar_data_exporter_config_dict = pulsar_data_exporter_config_instance.to_dict()
# create an instance of PulsarDataExporterConfig from a dict
pulsar_data_exporter_config_from_dict = PulsarDataExporterConfig.from_dict(pulsar_data_exporter_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


