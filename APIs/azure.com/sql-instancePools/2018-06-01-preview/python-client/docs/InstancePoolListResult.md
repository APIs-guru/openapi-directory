# InstancePoolListResult

A list of Azure SQL instance pools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[InstancePool]**](InstancePool.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_pool_list_result import InstancePoolListResult

# TODO update the JSON string below
json = "{}"
# create an instance of InstancePoolListResult from a JSON string
instance_pool_list_result_instance = InstancePoolListResult.from_json(json)
# print the JSON string representation of the object
print(InstancePoolListResult.to_json())

# convert the object into a dict
instance_pool_list_result_dict = instance_pool_list_result_instance.to_dict()
# create an instance of InstancePoolListResult from a dict
instance_pool_list_result_from_dict = InstancePoolListResult.from_dict(instance_pool_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


