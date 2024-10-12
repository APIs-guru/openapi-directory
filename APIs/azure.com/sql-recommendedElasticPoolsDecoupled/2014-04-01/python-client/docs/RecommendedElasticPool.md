# RecommendedElasticPool

Represents a recommended elastic pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecommendedElasticPoolProperties**](RecommendedElasticPoolProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommended_elastic_pool import RecommendedElasticPool

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedElasticPool from a JSON string
recommended_elastic_pool_instance = RecommendedElasticPool.from_json(json)
# print the JSON string representation of the object
print(RecommendedElasticPool.to_json())

# convert the object into a dict
recommended_elastic_pool_dict = recommended_elastic_pool_instance.to_dict()
# create an instance of RecommendedElasticPool from a dict
recommended_elastic_pool_from_dict = RecommendedElasticPool.from_dict(recommended_elastic_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


