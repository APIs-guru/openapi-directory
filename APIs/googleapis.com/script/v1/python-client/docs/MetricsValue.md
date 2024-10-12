# MetricsValue

Metrics value that holds number of executions counted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Required field indicating the end time of the interval. | [optional] 
**start_time** | **str** | Required field indicating the start time of the interval. | [optional] 
**value** | **str** | Indicates the number of executions counted. | [optional] 

## Example

```python
from openapi_client.models.metrics_value import MetricsValue

# TODO update the JSON string below
json = "{}"
# create an instance of MetricsValue from a JSON string
metrics_value_instance = MetricsValue.from_json(json)
# print the JSON string representation of the object
print(MetricsValue.to_json())

# convert the object into a dict
metrics_value_dict = metrics_value_instance.to_dict()
# create an instance of MetricsValue from a dict
metrics_value_from_dict = MetricsValue.from_dict(metrics_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


