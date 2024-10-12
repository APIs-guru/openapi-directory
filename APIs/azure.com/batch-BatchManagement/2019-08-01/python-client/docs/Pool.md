# Pool

Contains information about a pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PoolProperties**](PoolProperties.md) |  | [optional] 
**etag** | **str** | The ETag of the resource, used for concurrency statements. | [optional] [readonly] 
**id** | **str** | The ID of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.pool import Pool

# TODO update the JSON string below
json = "{}"
# create an instance of Pool from a JSON string
pool_instance = Pool.from_json(json)
# print the JSON string representation of the object
print(Pool.to_json())

# convert the object into a dict
pool_dict = pool_instance.to_dict()
# create an instance of Pool from a dict
pool_from_dict = Pool.from_dict(pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


