# FleetObservabilityLoggingConfig

LoggingConfig defines the configuration for different types of logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_config** | [**FleetObservabilityRoutingConfig**](FleetObservabilityRoutingConfig.md) |  | [optional] 
**fleet_scope_logs_config** | [**FleetObservabilityRoutingConfig**](FleetObservabilityRoutingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.fleet_observability_logging_config import FleetObservabilityLoggingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FleetObservabilityLoggingConfig from a JSON string
fleet_observability_logging_config_instance = FleetObservabilityLoggingConfig.from_json(json)
# print the JSON string representation of the object
print(FleetObservabilityLoggingConfig.to_json())

# convert the object into a dict
fleet_observability_logging_config_dict = fleet_observability_logging_config_instance.to_dict()
# create an instance of FleetObservabilityLoggingConfig from a dict
fleet_observability_logging_config_from_dict = FleetObservabilityLoggingConfig.from_dict(fleet_observability_logging_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


