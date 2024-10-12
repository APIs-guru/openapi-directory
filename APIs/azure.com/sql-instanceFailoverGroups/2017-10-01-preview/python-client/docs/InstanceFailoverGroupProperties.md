# InstanceFailoverGroupProperties

Properties of a instance failover group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_instance_pairs** | [**List[ManagedInstancePairInfo]**](ManagedInstancePairInfo.md) | List of managed instance pairs in the failover group. | 
**partner_regions** | [**List[PartnerRegionInfo]**](PartnerRegionInfo.md) | Partner region information for the failover group. | 
**read_only_endpoint** | [**InstanceFailoverGroupReadOnlyEndpoint**](InstanceFailoverGroupReadOnlyEndpoint.md) |  | [optional] 
**read_write_endpoint** | [**InstanceFailoverGroupReadWriteEndpoint**](InstanceFailoverGroupReadWriteEndpoint.md) |  | 
**replication_role** | **str** | Local replication role of the failover group instance. | [optional] [readonly] 
**replication_state** | **str** | Replication state of the failover group instance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_failover_group_properties import InstanceFailoverGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceFailoverGroupProperties from a JSON string
instance_failover_group_properties_instance = InstanceFailoverGroupProperties.from_json(json)
# print the JSON string representation of the object
print(InstanceFailoverGroupProperties.to_json())

# convert the object into a dict
instance_failover_group_properties_dict = instance_failover_group_properties_instance.to_dict()
# create an instance of InstanceFailoverGroupProperties from a dict
instance_failover_group_properties_from_dict = InstanceFailoverGroupProperties.from_dict(instance_failover_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


