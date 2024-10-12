# ElasticPoolListResult

The result of an elastic pool list request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ElasticPool]**](ElasticPool.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_list_result import ElasticPoolListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolListResult from a JSON string
elastic_pool_list_result_instance = ElasticPoolListResult.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolListResult.to_json())

# convert the object into a dict
elastic_pool_list_result_dict = elastic_pool_list_result_instance.to_dict()
# create an instance of ElasticPoolListResult from a dict
elastic_pool_list_result_from_dict = ElasticPoolListResult.from_dict(elastic_pool_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


