# AutoPoolSpecification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_pool_id_prefix** | **str** | The Batch service assigns each auto pool a unique identifier on creation. To distinguish between pools created for different purposes, you can specify this element to add a prefix to the ID that is assigned. The prefix can be up to 20 characters long. | [optional] 
**keep_alive** | **bool** | If false, the Batch service deletes the pool once its lifetime (as determined by the poolLifetimeOption setting) expires; that is, when the job or job schedule completes. If true, the Batch service does not delete the pool automatically. It is up to the user to delete auto pools created with this option. | [optional] 
**pool** | [**PoolSpecification**](PoolSpecification.md) |  | [optional] 
**pool_lifetime_option** | **str** |  | 

## Example

```python
from openapi_client.models.auto_pool_specification import AutoPoolSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of AutoPoolSpecification from a JSON string
auto_pool_specification_instance = AutoPoolSpecification.from_json(json)
# print the JSON string representation of the object
print(AutoPoolSpecification.to_json())

# convert the object into a dict
auto_pool_specification_dict = auto_pool_specification_instance.to_dict()
# create an instance of AutoPoolSpecification from a dict
auto_pool_specification_from_dict = AutoPoolSpecification.from_dict(auto_pool_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


