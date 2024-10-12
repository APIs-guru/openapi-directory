# TelemetryConfig

Telemetry Configuration for the Dataproc Metastore service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_format** | **str** | The output format of the Dataproc Metastore service&#39;s logs. | [optional] 

## Example

```python
from openapi_client.models.telemetry_config import TelemetryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TelemetryConfig from a JSON string
telemetry_config_instance = TelemetryConfig.from_json(json)
# print the JSON string representation of the object
print(TelemetryConfig.to_json())

# convert the object into a dict
telemetry_config_dict = telemetry_config_instance.to_dict()
# create an instance of TelemetryConfig from a dict
telemetry_config_from_dict = TelemetryConfig.from_dict(telemetry_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


