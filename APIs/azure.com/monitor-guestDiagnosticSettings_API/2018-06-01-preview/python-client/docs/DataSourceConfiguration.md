# DataSourceConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_logs** | [**List[EventLogConfiguration]**](EventLogConfiguration.md) | Windows event logs configuration. | [optional] 
**perf_counters** | [**List[PerformanceCounterConfiguration]**](PerformanceCounterConfiguration.md) | Performance counter configuration | [optional] 
**providers** | [**List[EtwProviderConfiguration]**](EtwProviderConfiguration.md) | ETW providers configuration | [optional] 

## Example

```python
from openapi_client.models.data_source_configuration import DataSourceConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceConfiguration from a JSON string
data_source_configuration_instance = DataSourceConfiguration.from_json(json)
# print the JSON string representation of the object
print(DataSourceConfiguration.to_json())

# convert the object into a dict
data_source_configuration_dict = data_source_configuration_instance.to_dict()
# create an instance of DataSourceConfiguration from a dict
data_source_configuration_from_dict = DataSourceConfiguration.from_dict(data_source_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


