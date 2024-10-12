# InstancePoolUpdate

An update to an Instance pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.instance_pool_update import InstancePoolUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of InstancePoolUpdate from a JSON string
instance_pool_update_instance = InstancePoolUpdate.from_json(json)
# print the JSON string representation of the object
print(InstancePoolUpdate.to_json())

# convert the object into a dict
instance_pool_update_dict = instance_pool_update_instance.to_dict()
# create an instance of InstancePoolUpdate from a dict
instance_pool_update_from_dict = InstancePoolUpdate.from_dict(instance_pool_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


