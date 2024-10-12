# PeripheralsConfig

Auxiliary services configuration for a workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metastore_service** | **str** | Optional. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[region]/services/[service_id] | [optional] 
**spark_history_server_config** | [**SparkHistoryServerConfig**](SparkHistoryServerConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.peripherals_config import PeripheralsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PeripheralsConfig from a JSON string
peripherals_config_instance = PeripheralsConfig.from_json(json)
# print the JSON string representation of the object
print(PeripheralsConfig.to_json())

# convert the object into a dict
peripherals_config_dict = peripherals_config_instance.to_dict()
# create an instance of PeripheralsConfig from a dict
peripherals_config_from_dict = PeripheralsConfig.from_dict(peripherals_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


