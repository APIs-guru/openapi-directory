# ElasticPoolActivity

Represents the activity on an elastic pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The geo-location where the resource lives | [optional] 
**properties** | [**ElasticPoolActivityProperties**](ElasticPoolActivityProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.elastic_pool_activity import ElasticPoolActivity

# TODO update the JSON string below
json = "{}"
# create an instance of ElasticPoolActivity from a JSON string
elastic_pool_activity_instance = ElasticPoolActivity.from_json(json)
# print the JSON string representation of the object
print(ElasticPoolActivity.to_json())

# convert the object into a dict
elastic_pool_activity_dict = elastic_pool_activity_instance.to_dict()
# create an instance of ElasticPoolActivity from a dict
elastic_pool_activity_from_dict = ElasticPoolActivity.from_dict(elastic_pool_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


