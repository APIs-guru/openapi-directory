# DedicatedHostGroup

Specifies information about the dedicated host group that the dedicated hosts should be assigned to. <br><br> Currently, a dedicated host can only be added to a dedicated host group at creation time. An existing dedicated host cannot be added to another dedicated host group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DedicatedHostGroupProperties**](DedicatedHostGroupProperties.md) |  | [optional] 
**zones** | **List[str]** | Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone. | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.dedicated_host_group import DedicatedHostGroup

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHostGroup from a JSON string
dedicated_host_group_instance = DedicatedHostGroup.from_json(json)
# print the JSON string representation of the object
print(DedicatedHostGroup.to_json())

# convert the object into a dict
dedicated_host_group_dict = dedicated_host_group_instance.to_dict()
# create an instance of DedicatedHostGroup from a dict
dedicated_host_group_from_dict = DedicatedHostGroup.from_dict(dedicated_host_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


