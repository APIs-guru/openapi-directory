# ElasticPool

Represents a database elastic pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of elastic pool.  This is metadata used for the Azure portal experience. | [optional] [readonly] 
**properties** | [**ElasticPoolProperties**](ElasticPoolProperties.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool import ElasticPool

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPool from a JSON string
elastic_pool_instance = ElasticPool.from_json(json)
# print the JSON string representation of the object
print(ElasticPool.to_json())

# convert the object into a dict
elastic_pool_dict = elastic_pool_instance.to_dict()
# create an instance of ElasticPool from a dict
elastic_pool_from_dict = ElasticPool.from_dict(elastic_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


