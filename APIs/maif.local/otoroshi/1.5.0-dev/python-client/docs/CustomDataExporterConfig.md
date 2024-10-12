# CustomDataExporterConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **Dict[str, str]** | Custom data exporter config | 
**ref** | **str** | Script Ref | 

## Example

```python
from openapi_client.models.custom_data_exporter_config import CustomDataExporterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDataExporterConfig from a JSON string
custom_data_exporter_config_instance = CustomDataExporterConfig.from_json(json)
# print the JSON string representation of the object
print(CustomDataExporterConfig.to_json())

# convert the object into a dict
custom_data_exporter_config_dict = custom_data_exporter_config_instance.to_dict()
# create an instance of CustomDataExporterConfig from a dict
custom_data_exporter_config_from_dict = CustomDataExporterConfig.from_dict(custom_data_exporter_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


