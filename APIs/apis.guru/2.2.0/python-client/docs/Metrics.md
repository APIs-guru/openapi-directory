# Metrics

List of basic metrics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasets** | **List[object]** | Data used for charting etc | [optional] 
**fixed_pct** | **int** | Percentage of all APIs where auto fixes have been applied | [optional] 
**fixes** | **int** | Total number of fixes applied across all APIs | [optional] 
**invalid** | **int** | Number of newly invalid APIs | [optional] 
**issues** | **int** | Open GitHub issues on our main repo | [optional] 
**num_apis** | **int** | Number of unique APIs | 
**num_drivers** | **int** | Number of methods of API retrieval | [optional] 
**num_endpoints** | **int** | Total number of endpoints inside all definitions | 
**num_providers** | **int** | Number of API providers in directory | [optional] 
**num_specs** | **int** | Number of API definitions including different versions of the same API | 
**stars** | **int** | GitHub stars for our main repo | [optional] 
**this_week** | [**MetricsThisWeek**](MetricsThisWeek.md) |  | [optional] 
**unofficial** | **int** | Number of unofficial APIs | [optional] 
**unreachable** | **int** | Number of unreachable (4XX,5XX status) APIs | [optional] 

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


