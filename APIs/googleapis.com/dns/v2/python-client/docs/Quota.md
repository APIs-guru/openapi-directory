# Quota

Limits associated with a Project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_keys_per_managed_zone** | **int** | Maximum allowed number of DnsKeys per ManagedZone. | [optional] 
**gke_clusters_per_managed_zone** | **int** | Maximum allowed number of GKE clusters to which a privately scoped zone can be attached. | [optional] 
**gke_clusters_per_policy** | **int** | Maximum allowed number of GKE clusters per policy. | [optional] 
**gke_clusters_per_response_policy** | **int** | Maximum allowed number of GKE clusters per response policy. | [optional] 
**items_per_routing_policy** | **int** | Maximum allowed number of items per routing policy. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#quota']
**managed_zones** | **int** | Maximum allowed number of managed zones in the project. | [optional] 
**managed_zones_per_gke_cluster** | **int** | Maximum allowed number of managed zones which can be attached to a GKE cluster. | [optional] 
**managed_zones_per_network** | **int** | Maximum allowed number of managed zones which can be attached to a network. | [optional] 
**nameservers_per_delegation** | **int** | Maximum number of nameservers per delegation, meant to prevent abuse | [optional] 
**networks_per_managed_zone** | **int** | Maximum allowed number of networks to which a privately scoped zone can be attached. | [optional] 
**networks_per_policy** | **int** | Maximum allowed number of networks per policy. | [optional] 
**networks_per_response_policy** | **int** | Maximum allowed number of networks per response policy. | [optional] 
**peering_zones_per_target_network** | **int** | Maximum allowed number of consumer peering zones per target network owned by this producer project | [optional] 
**policies** | **int** | Maximum allowed number of policies per project. | [optional] 
**resource_records_per_rrset** | **int** | Maximum allowed number of ResourceRecords per ResourceRecordSet. | [optional] 
**response_policies** | **int** | Maximum allowed number of response policies per project. | [optional] 
**response_policy_rules_per_response_policy** | **int** | Maximum allowed number of rules per response policy. | [optional] 
**rrset_additions_per_change** | **int** | Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest. | [optional] 
**rrset_deletions_per_change** | **int** | Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest. | [optional] 
**rrsets_per_managed_zone** | **int** | Maximum allowed number of ResourceRecordSets per zone in the project. | [optional] 
**target_name_servers_per_managed_zone** | **int** | Maximum allowed number of target name servers per managed forwarding zone. | [optional] 
**target_name_servers_per_policy** | **int** | Maximum allowed number of alternative target name servers per policy. | [optional] 
**total_rrdata_size_per_change** | **int** | Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes. | [optional] 
**whitelisted_key_specs** | [**List[DnsKeySpec]**](DnsKeySpec.md) | DNSSEC algorithm and key length types that can be used for DnsKeys. | [optional] 

## Example

```python
from openapi_client.models.quota import Quota

# TODO update the JSON string below
json = "{}"
# create an instance of Quota from a JSON string
quota_instance = Quota.from_json(json)
# print the JSON string representation of the object
print(Quota.to_json())

# convert the object into a dict
quota_dict = quota_instance.to_dict()
# create an instance of Quota from a dict
quota_from_dict = Quota.from_dict(quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


