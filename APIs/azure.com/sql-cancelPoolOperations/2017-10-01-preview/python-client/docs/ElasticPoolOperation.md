# ElasticPoolOperation

A elastic pool operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ElasticPoolOperationProperties**](ElasticPoolOperationProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_operation import ElasticPoolOperation

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolOperation from a JSON string
elastic_pool_operation_instance = ElasticPoolOperation.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolOperation.to_json())

# convert the object into a dict
elastic_pool_operation_dict = elastic_pool_operation_instance.to_dict()
# create an instance of ElasticPoolOperation from a dict
elastic_pool_operation_from_dict = ElasticPoolOperation.from_dict(elastic_pool_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


