# FailoverGroupProperties

Properties of a failover group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**databases** | **List[str]** | List of databases in the failover group. | [optional] 
**partner_servers** | [**List[PartnerInfo]**](PartnerInfo.md) | List of partner server information for the failover group. | 
**read_only_endpoint** | [**FailoverGroupReadOnlyEndpoint**](FailoverGroupReadOnlyEndpoint.md) |  | [optional] 
**read_write_endpoint** | [**FailoverGroupReadWriteEndpoint**](FailoverGroupReadWriteEndpoint.md) |  | 
**replication_role** | **str** | Local replication role of the failover group instance. | [optional] [readonly] 
**replication_state** | **str** | Replication state of the failover group instance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.failover_group_properties import FailoverGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverGroupProperties from a JSON string
failover_group_properties_instance = FailoverGroupProperties.from_json(json)
# print the JSON string representation of the object
print(FailoverGroupProperties.to_json())

# convert the object into a dict
failover_group_properties_dict = failover_group_properties_instance.to_dict()
# create an instance of FailoverGroupProperties from a dict
failover_group_properties_from_dict = FailoverGroupProperties.from_dict(failover_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


