# RecommendedElasticPoolListResult

Represents the response to a list recommended elastic pool request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[RecommendedElasticPool]**](RecommendedElasticPool.md) | The list of recommended elastic pools hosted in the server. | 

## Example

```python
from openapi_client.models.recommended_elastic_pool_list_result import RecommendedElasticPoolListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedElasticPoolListResult from a JSON string
recommended_elastic_pool_list_result_instance = RecommendedElasticPoolListResult.from_json(json)
# print the JSON string representation of the object
print(RecommendedElasticPoolListResult.to_json())

# convert the object into a dict
recommended_elastic_pool_list_result_dict = recommended_elastic_pool_list_result_instance.to_dict()
# create an instance of RecommendedElasticPoolListResult from a dict
recommended_elastic_pool_list_result_from_dict = RecommendedElasticPoolListResult.from_dict(recommended_elastic_pool_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


