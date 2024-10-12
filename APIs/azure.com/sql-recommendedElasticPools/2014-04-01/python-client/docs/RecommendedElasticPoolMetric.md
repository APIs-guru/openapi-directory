# RecommendedElasticPoolMetric

Represents recommended elastic pool metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_time** | **datetime** | The time of metric (ISO8601 format). | [optional] 
**dtu** | **float** | Gets or sets the DTUs (Database Transaction Units). See https://azure.microsoft.com/documentation/articles/sql-database-what-is-a-dtu/ | [optional] 
**size_gb** | **float** | Gets or sets size in gigabytes. | [optional] 

## Example

```python
from openapi_client.models.recommended_elastic_pool_metric import RecommendedElasticPoolMetric

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedElasticPoolMetric from a JSON string
recommended_elastic_pool_metric_instance = RecommendedElasticPoolMetric.from_json(json)
# print the JSON string representation of the object
print(RecommendedElasticPoolMetric.to_json())

# convert the object into a dict
recommended_elastic_pool_metric_dict = recommended_elastic_pool_metric_instance.to_dict()
# create an instance of RecommendedElasticPoolMetric from a dict
recommended_elastic_pool_metric_from_dict = RecommendedElasticPoolMetric.from_dict(recommended_elastic_pool_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


