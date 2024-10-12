# DedicatedHostGroupUpdate

Specifies information about the dedicated host group that the dedicated host should be assigned to. Only tags may be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DedicatedHostGroupProperties**](DedicatedHostGroupProperties.md) |  | [optional] 
**zones** | **List[str]** | Availability Zone to use for this host group. Only single zone is supported. The zone can be assigned only during creation. If not provided, the group supports all zones in the region. If provided, enforces each host in the group to be in the same zone. | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.dedicated_host_group_update import DedicatedHostGroupUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHostGroupUpdate from a JSON string
dedicated_host_group_update_instance = DedicatedHostGroupUpdate.from_json(json)
# print the JSON string representation of the object
print(DedicatedHostGroupUpdate.to_json())

# convert the object into a dict
dedicated_host_group_update_dict = dedicated_host_group_update_instance.to_dict()
# create an instance of DedicatedHostGroupUpdate from a dict
dedicated_host_group_update_from_dict = DedicatedHostGroupUpdate.from_dict(dedicated_host_group_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


