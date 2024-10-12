# RecommendedElasticPoolListMetricsResult

Represents the response to a list recommended elastic pool metrics request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[RecommendedElasticPoolMetric]**](RecommendedElasticPoolMetric.md) | The list of recommended elastic pools metrics. | 

## Example

```python
from openapi_client.models.recommended_elastic_pool_list_metrics_result import RecommendedElasticPoolListMetricsResult

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedElasticPoolListMetricsResult from a JSON string
recommended_elastic_pool_list_metrics_result_instance = RecommendedElasticPoolListMetricsResult.from_json(json)
# print the JSON string representation of the object
print(RecommendedElasticPoolListMetricsResult.to_json())

# convert the object into a dict
recommended_elastic_pool_list_metrics_result_dict = recommended_elastic_pool_list_metrics_result_instance.to_dict()
# create an instance of RecommendedElasticPoolListMetricsResult from a dict
recommended_elastic_pool_list_metrics_result_from_dict = RecommendedElasticPoolListMetricsResult.from_dict(recommended_elastic_pool_list_metrics_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


