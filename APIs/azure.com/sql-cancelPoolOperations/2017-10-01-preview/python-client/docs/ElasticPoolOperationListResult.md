# ElasticPoolOperationListResult

The response to a list elastic pool operations request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ElasticPoolOperation]**](ElasticPoolOperation.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_operation_list_result import ElasticPoolOperationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolOperationListResult from a JSON string
elastic_pool_operation_list_result_instance = ElasticPoolOperationListResult.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolOperationListResult.to_json())

# convert the object into a dict
elastic_pool_operation_list_result_dict = elastic_pool_operation_list_result_instance.to_dict()
# create an instance of ElasticPoolOperationListResult from a dict
elastic_pool_operation_list_result_from_dict = ElasticPoolOperationListResult.from_dict(elastic_pool_operation_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


