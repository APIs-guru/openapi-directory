# PoolResizeParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_deallocation_option** | [**ComputeNodeDeallocationOption**](ComputeNodeDeallocationOption.md) |  | [optional] 
**resize_timeout** | **str** | The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). | [optional] 
**target_dedicated_nodes** | **int** |  | [optional] 
**target_low_priority_nodes** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.pool_resize_parameter import PoolResizeParameter

# TODO update the JSON string below
json = "{}"
# create an instance of PoolResizeParameter from a JSON string
pool_resize_parameter_instance = PoolResizeParameter.from_json(json)
# print the JSON string representation of the object
print(PoolResizeParameter.to_json())

# convert the object into a dict
pool_resize_parameter_dict = pool_resize_parameter_instance.to_dict()
# create an instance of PoolResizeParameter from a dict
pool_resize_parameter_from_dict = PoolResizeParameter.from_dict(pool_resize_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


