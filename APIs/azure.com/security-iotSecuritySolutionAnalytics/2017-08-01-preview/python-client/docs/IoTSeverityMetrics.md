# IoTSeverityMetrics

Severity metrics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high** | **int** | count of high severity items | [optional] 
**low** | **int** | count of low severity items | [optional] 
**medium** | **int** | count of medium severity items | [optional] 

## Example

```python
from openapi_client.models.io_t_severity_metrics import IoTSeverityMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSeverityMetrics from a JSON string
io_t_severity_metrics_instance = IoTSeverityMetrics.from_json(json)
# print the JSON string representation of the object
print(IoTSeverityMetrics.to_json())

# convert the object into a dict
io_t_severity_metrics_dict = io_t_severity_metrics_instance.to_dict()
# create an instance of IoTSeverityMetrics from a dict
io_t_severity_metrics_from_dict = IoTSeverityMetrics.from_dict(io_t_severity_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


