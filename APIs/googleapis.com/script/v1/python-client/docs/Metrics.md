# Metrics

Resource containing usage stats for a given script, based on the supplied filter and mask present in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_users** | [**List[MetricsValue]**](MetricsValue.md) | Number of active users. | [optional] 
**failed_executions** | [**List[MetricsValue]**](MetricsValue.md) | Number of failed executions. | [optional] 
**total_executions** | [**List[MetricsValue]**](MetricsValue.md) | Number of total executions. | [optional] 

## Example

```python
from openapi_client.models.metrics import Metrics

# TODO update the JSON string below
json = "{}"
# create an instance of Metrics from a JSON string
metrics_instance = Metrics.from_json(json)
# print the JSON string representation of the object
print(Metrics.to_json())

# convert the object into a dict
metrics_dict = metrics_instance.to_dict()
# create an instance of Metrics from a dict
metrics_from_dict = Metrics.from_dict(metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


