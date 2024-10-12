# UpdateDataLakeStoreAccountProperties

Data Lake Store account properties information to be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_group** | **str** | The default owner group for all new folders and files created in the Data Lake Store account. | [optional] 
**encryption_config** | [**UpdateEncryptionConfig**](UpdateEncryptionConfig.md) |  | [optional] 
**firewall_allow_azure_ips** | **str** | The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. | [optional] 
**firewall_rules** | [**List[UpdateFirewallRuleWithAccountParameters]**](UpdateFirewallRuleWithAccountParameters.md) | The list of firewall rules associated with this Data Lake Store account. | [optional] 
**firewall_state** | **str** | The current state of the IP address firewall for this Data Lake Store account. Disabling the firewall does not remove existing rules, they will just be ignored until the firewall is re-enabled. | [optional] 
**new_tier** | **str** | The commitment tier to use for next month. | [optional] 
**trusted_id_provider_state** | **str** | The current state of the trusted identity provider feature for this Data Lake Store account. Disabling trusted identity provider functionality does not remove the providers, they will just be ignored until this feature is re-enabled. | [optional] 
**trusted_id_providers** | [**List[UpdateTrustedIdProviderWithAccountParameters]**](UpdateTrustedIdProviderWithAccountParameters.md) | The list of trusted identity providers associated with this Data Lake Store account. | [optional] 
**virtual_network_rules** | [**List[UpdateVirtualNetworkRuleWithAccountParameters]**](UpdateVirtualNetworkRuleWithAccountParameters.md) | The list of virtual network rules associated with this Data Lake Store account. | [optional] 

## Example

```python
from openapi_client.models.update_data_lake_store_account_properties import UpdateDataLakeStoreAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataLakeStoreAccountProperties from a JSON string
update_data_lake_store_account_properties_instance = UpdateDataLakeStoreAccountProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateDataLakeStoreAccountProperties.to_json())

# convert the object into a dict
update_data_lake_store_account_properties_dict = update_data_lake_store_account_properties_instance.to_dict()
# create an instance of UpdateDataLakeStoreAccountProperties from a dict
update_data_lake_store_account_properties_from_dict = UpdateDataLakeStoreAccountProperties.from_dict(update_data_lake_store_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


