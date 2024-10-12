# WsfcDomainCredentials

Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_bootstrap_account_password** | **str** | Cluster bootstrap account password. | [optional] 
**cluster_operator_account_password** | **str** | Cluster operator account password. | [optional] 
**sql_service_account_password** | **str** | SQL service account password. | [optional] 

## Example

```python
from openapi_client.models.wsfc_domain_credentials import WsfcDomainCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of WsfcDomainCredentials from a JSON string
wsfc_domain_credentials_instance = WsfcDomainCredentials.from_json(json)
# print the JSON string representation of the object
print(WsfcDomainCredentials.to_json())

# convert the object into a dict
wsfc_domain_credentials_dict = wsfc_domain_credentials_instance.to_dict()
# create an instance of WsfcDomainCredentials from a dict
wsfc_domain_credentials_from_dict = WsfcDomainCredentials.from_dict(wsfc_domain_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


