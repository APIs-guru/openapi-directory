# DataLakeStoreAccountProperties

Data Lake Store account properties information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_tier** | **str** | The commitment tier in use for the current month. | [optional] [readonly] 
**default_group** | **str** | The default owner group for all new folders and files created in the Data Lake Store account. | [optional] [readonly] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**encryption_provisioning_state** | **str** | The current state of encryption provisioning for this Data Lake Store account. | [optional] [readonly] 
**encryption_state** | **str** | The current state of encryption for this Data Lake Store account. | [optional] [readonly] 
**firewall_allow_azure_ips** | **str** | The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. | [optional] [readonly] 
**firewall_rules** | [**List[FirewallRule]**](FirewallRule.md) | The list of firewall rules associated with this Data Lake Store account. | [optional] [readonly] 
**firewall_state** | **str** | The current state of the IP address firewall for this Data Lake Store account. | [optional] [readonly] 
**new_tier** | **str** | The commitment tier to use for next month. | [optional] [readonly] 
**trusted_id_provider_state** | **str** | The current state of the trusted identity provider feature for this Data Lake Store account. | [optional] [readonly] 
**trusted_id_providers** | [**List[TrustedIdProvider]**](TrustedIdProvider.md) | The list of trusted identity providers associated with this Data Lake Store account. | [optional] [readonly] 
**virtual_network_rules** | [**List[VirtualNetworkRule]**](VirtualNetworkRule.md) | The list of virtual network rules associated with this Data Lake Store account. | [optional] [readonly] 
**account_id** | **str** | The unique identifier associated with this Data Lake Store account. | [optional] [readonly] 
**creation_time** | **datetime** | The account creation time. | [optional] [readonly] 
**endpoint** | **str** | The full CName endpoint for this account. | [optional] [readonly] 
**last_modified_time** | **datetime** | The account last modified time. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning status of the Data Lake Store account. | [optional] [readonly] 
**state** | **str** | The state of the Data Lake Store account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_store_account_properties import DataLakeStoreAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStoreAccountProperties from a JSON string
data_lake_store_account_properties_instance = DataLakeStoreAccountProperties.from_json(json)
# print the JSON string representation of the object
print(DataLakeStoreAccountProperties.to_json())

# convert the object into a dict
data_lake_store_account_properties_dict = data_lake_store_account_properties_instance.to_dict()
# create an instance of DataLakeStoreAccountProperties from a dict
data_lake_store_account_properties_from_dict = DataLakeStoreAccountProperties.from_dict(data_lake_store_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


