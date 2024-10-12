# RuntimeMetrics

Contains runtime daemon metrics, such as OS and kernels and sessions stats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_metrics** | **Dict[str, str]** | Output only. The system metrics. | [optional] [readonly] 

## Example

```python
from openapi_client.models.runtime_metrics import RuntimeMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeMetrics from a JSON string
runtime_metrics_instance = RuntimeMetrics.from_json(json)
# print the JSON string representation of the object
print(RuntimeMetrics.to_json())

# convert the object into a dict
runtime_metrics_dict = runtime_metrics_instance.to_dict()
# create an instance of RuntimeMetrics from a dict
runtime_metrics_from_dict = RuntimeMetrics.from_dict(runtime_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


