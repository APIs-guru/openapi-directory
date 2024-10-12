# DataExporterConfig

Settings to export Otorshi events

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buffer_size** | **int** | buffer size | [optional] 
**config** | [**DataExporterConfigConfig**](DataExporterConfigConfig.md) |  | [optional] 
**desc** | **str** | Description | [optional] 
**enabled** | **str** | Boolean | [optional] 
**filtering** | [**Filtering**](Filtering.md) |  | [optional] 
**group_duration** | **int** | duration | [optional] 
**group_size** | **int** | Group size | [optional] 
**id** | **str** | Id | [optional] 
**json_workers** | **int** | nb workers | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**metadata** | **Dict[str, str]** | Metadata | [optional] 
**name** | **str** | Name | [optional] 
**projection** | **Dict[str, str]** | projection | [optional] 
**send_workers** | **int** | send workers | [optional] 
**typ** | **str** | Type of data exporter | [optional] 

## Example

```python
from openapi_client.models.data_exporter_config import DataExporterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DataExporterConfig from a JSON string
data_exporter_config_instance = DataExporterConfig.from_json(json)
# print the JSON string representation of the object
print(DataExporterConfig.to_json())

# convert the object into a dict
data_exporter_config_dict = data_exporter_config_instance.to_dict()
# create an instance of DataExporterConfig from a dict
data_exporter_config_from_dict = DataExporterConfig.from_dict(data_exporter_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


