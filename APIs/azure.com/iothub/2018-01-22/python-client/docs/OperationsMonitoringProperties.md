# OperationsMonitoringProperties

The operations monitoring properties for the IoT hub. The possible keys to the dictionary are Connections, DeviceTelemetry, C2DCommands, DeviceIdentityOperations, FileUploadOperations, Routes, D2CTwinOperations, C2DTwinOperations, TwinQueries, JobsOperations, DirectMethods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.operations_monitoring_properties import OperationsMonitoringProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsMonitoringProperties from a JSON string
operations_monitoring_properties_instance = OperationsMonitoringProperties.from_json(json)
# print the JSON string representation of the object
print(OperationsMonitoringProperties.to_json())

# convert the object into a dict
operations_monitoring_properties_dict = operations_monitoring_properties_instance.to_dict()
# create an instance of OperationsMonitoringProperties from a dict
operations_monitoring_properties_from_dict = OperationsMonitoringProperties.from_dict(operations_monitoring_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


