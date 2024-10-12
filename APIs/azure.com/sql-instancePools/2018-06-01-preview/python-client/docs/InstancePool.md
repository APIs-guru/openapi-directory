# InstancePool

An Azure SQL instance pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**InstancePoolProperties**](InstancePoolProperties.md) |  | [optional] 
**sku** | **object** | An ARM Resource SKU. | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_pool import InstancePool

# TODO update the JSON string below
json = "{}"
# create an instance of InstancePool from a JSON string
instance_pool_instance = InstancePool.from_json(json)
# print the JSON string representation of the object
print(InstancePool.to_json())

# convert the object into a dict
instance_pool_dict = instance_pool_instance.to_dict()
# create an instance of InstancePool from a dict
instance_pool_from_dict = InstancePool.from_dict(instance_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


