# ElasticPoolActivityListResult

Represents the response to a list elastic pool activity request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ElasticPoolActivity]**](ElasticPoolActivity.md) | The list of elastic pool activities. | 

## Example

```python
from openapi_client.models.elastic_pool_activity_list_result import ElasticPoolActivityListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolActivityListResult from a JSON string
elastic_pool_activity_list_result_instance = ElasticPoolActivityListResult.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolActivityListResult.to_json())

# convert the object into a dict
elastic_pool_activity_list_result_dict = elastic_pool_activity_list_result_instance.to_dict()
# create an instance of ElasticPoolActivityListResult from a dict
elastic_pool_activity_list_result_from_dict = ElasticPoolActivityListResult.from_dict(elastic_pool_activity_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


