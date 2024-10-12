# CapacityPool

Capacity pool resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**properties** | [**PoolProperties**](PoolProperties.md) |  | 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.capacity_pool import CapacityPool

# TODO update the JSON string below
json = "{}"
# create an instance of CapacityPool from a JSON string
capacity_pool_instance = CapacityPool.from_json(json)
# print the JSON string representation of the object
print(CapacityPool.to_json())

# convert the object into a dict
capacity_pool_dict = capacity_pool_instance.to_dict()
# create an instance of CapacityPool from a dict
capacity_pool_from_dict = CapacityPool.from_dict(capacity_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


