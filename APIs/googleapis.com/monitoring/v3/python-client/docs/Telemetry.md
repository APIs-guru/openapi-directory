# Telemetry

Configuration for how to query telemetry on a Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **str** | The full name of the resource that defines this service. Formatted as described in https://cloud.google.com/apis/design/resource_names. | [optional] 

## Example

```python
from openapi_client.models.telemetry import Telemetry

# TODO update the JSON string below
json = "{}"
# create an instance of Telemetry from a JSON string
telemetry_instance = Telemetry.from_json(json)
# print the JSON string representation of the object
print(Telemetry.to_json())

# convert the object into a dict
telemetry_dict = telemetry_instance.to_dict()
# create an instance of Telemetry from a dict
telemetry_from_dict = Telemetry.from_dict(telemetry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


