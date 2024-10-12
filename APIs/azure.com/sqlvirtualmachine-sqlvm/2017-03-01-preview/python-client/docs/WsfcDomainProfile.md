# WsfcDomainProfile

Active Directory account details to operate Windows Server Failover Cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_bootstrap_account** | **str** | Account name used for creating cluster (at minimum needs permissions to &#39;Create Computer Objects&#39; in domain). | [optional] 
**cluster_operator_account** | **str** | Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster. | [optional] 
**domain_fqdn** | **str** | Fully qualified name of the domain. | [optional] 
**file_share_witness_path** | **str** | Optional path for fileshare witness. | [optional] 
**ou_path** | **str** | Organizational Unit path in which the nodes and cluster will be present. | [optional] 
**sql_service_account** | **str** | Account name under which SQL service will run on all participating SQL virtual machines in the cluster. | [optional] 
**storage_account_primary_key** | **str** | Primary key of the witness storage account. | [optional] 
**storage_account_url** | **str** | Fully qualified ARM resource id of the witness storage account. | [optional] 

## Example

```python
from openapi_client.models.wsfc_domain_profile import WsfcDomainProfile

# TODO update the JSON string below
json = "{}"
# create an instance of WsfcDomainProfile from a JSON string
wsfc_domain_profile_instance = WsfcDomainProfile.from_json(json)
# print the JSON string representation of the object
print(WsfcDomainProfile.to_json())

# convert the object into a dict
wsfc_domain_profile_dict = wsfc_domain_profile_instance.to_dict()
# create an instance of WsfcDomainProfile from a dict
wsfc_domain_profile_from_dict = WsfcDomainProfile.from_dict(wsfc_domain_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


