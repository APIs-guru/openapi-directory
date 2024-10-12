# BackendPool

A backend pool is a collection of backends that can be routed to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Resource name. | [optional] 
**properties** | [**BackendPoolProperties**](BackendPoolProperties.md) |  | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.backend_pool import BackendPool

# TODO update the JSON string below
json = "{}"
# create an instance of BackendPool from a JSON string
backend_pool_instance = BackendPool.from_json(json)
# print the JSON string representation of the object
print(BackendPool.to_json())

# convert the object into a dict
backend_pool_dict = backend_pool_instance.to_dict()
# create an instance of BackendPool from a dict
backend_pool_from_dict = BackendPool.from_dict(backend_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


