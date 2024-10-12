# PoolListUsageMetricsResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[PoolUsageMetrics]**](PoolUsageMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.pool_list_usage_metrics_result import PoolListUsageMetricsResult

# TODO update the JSON string below
json = "{}"
# create an instance of PoolListUsageMetricsResult from a JSON string
pool_list_usage_metrics_result_instance = PoolListUsageMetricsResult.from_json(json)
# print the JSON string representation of the object
print(PoolListUsageMetricsResult.to_json())

# convert the object into a dict
pool_list_usage_metrics_result_dict = pool_list_usage_metrics_result_instance.to_dict()
# create an instance of PoolListUsageMetricsResult from a dict
pool_list_usage_metrics_result_from_dict = PoolListUsageMetricsResult.from_dict(pool_list_usage_metrics_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


