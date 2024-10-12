# MetricsResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**MetricsResult**](MetricsResult.md) |  | 
**id** | **str** | The specified ID for this metric. | 
**status** | **int** | The HTTP status code of this metric query. | 

## Example

```python
from openapi_client.models.metrics_results_inner import MetricsResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MetricsResultsInner from a JSON string
metrics_results_inner_instance = MetricsResultsInner.from_json(json)
# print the JSON string representation of the object
print(MetricsResultsInner.to_json())

# convert the object into a dict
metrics_results_inner_dict = metrics_results_inner_instance.to_dict()
# create an instance of MetricsResultsInner from a dict
metrics_results_inner_from_dict = MetricsResultsInner.from_dict(metrics_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


