# ExecutionMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **datetime** |  | [optional] 
**duration** | **float** |  | [optional] 
**received** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.execution_metrics import ExecutionMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionMetrics from a JSON string
execution_metrics_instance = ExecutionMetrics.from_json(json)
# print the JSON string representation of the object
print(ExecutionMetrics.to_json())

# convert the object into a dict
execution_metrics_dict = execution_metrics_instance.to_dict()
# create an instance of ExecutionMetrics from a dict
execution_metrics_from_dict = ExecutionMetrics.from_dict(execution_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


