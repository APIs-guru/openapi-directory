# InstanceFailoverGroup

An instance failover group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**InstanceFailoverGroupProperties**](InstanceFailoverGroupProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_failover_group import InstanceFailoverGroup

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceFailoverGroup from a JSON string
instance_failover_group_instance = InstanceFailoverGroup.from_json(json)
# print the JSON string representation of the object
print(InstanceFailoverGroup.to_json())

# convert the object into a dict
instance_failover_group_dict = instance_failover_group_instance.to_dict()
# create an instance of InstanceFailoverGroup from a dict
instance_failover_group_from_dict = InstanceFailoverGroup.from_dict(instance_failover_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


