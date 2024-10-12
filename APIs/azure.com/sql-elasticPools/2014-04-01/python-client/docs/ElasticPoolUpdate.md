# ElasticPoolUpdate

Represents an elastic pool update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ElasticPoolProperties**](ElasticPoolProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_update import ElasticPoolUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolUpdate from a JSON string
elastic_pool_update_instance = ElasticPoolUpdate.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolUpdate.to_json())

# convert the object into a dict
elastic_pool_update_dict = elastic_pool_update_instance.to_dict()
# create an instance of ElasticPoolUpdate from a dict
elastic_pool_update_from_dict = ElasticPoolUpdate.from_dict(elastic_pool_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


