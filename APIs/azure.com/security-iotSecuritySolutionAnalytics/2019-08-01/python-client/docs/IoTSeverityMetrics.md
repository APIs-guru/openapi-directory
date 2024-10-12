# IoTSeverityMetrics

IoT Security solution analytics severity metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high** | **int** | Count of high severity alerts/recommendations. | [optional] 
**low** | **int** | Count of low severity alerts/recommendations. | [optional] 
**medium** | **int** | Count of medium severity alerts/recommendations. | [optional] 

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


