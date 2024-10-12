# CreateDataLakeStoreAccountProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_group** | **str** | The default owner group for all new folders and files created in the Data Lake Store account. | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**encryption_state** | **str** | The current state of encryption for this Data Lake Store account. | [optional] 
**firewall_allow_azure_ips** | **str** | The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. | [optional] 
**firewall_rules** | [**List[CreateFirewallRuleWithAccountParameters]**](CreateFirewallRuleWithAccountParameters.md) | The list of firewall rules associated with this Data Lake Store account. | [optional] 
**firewall_state** | **str** | The current state of the IP address firewall for this Data Lake Store account. | [optional] 
**new_tier** | **str** | The commitment tier to use for next month. | [optional] 
**trusted_id_provider_state** | **str** | The current state of the trusted identity provider feature for this Data Lake Store account. | [optional] 
**trusted_id_providers** | [**List[CreateTrustedIdProviderWithAccountParameters]**](CreateTrustedIdProviderWithAccountParameters.md) | The list of trusted identity providers associated with this Data Lake Store account. | [optional] 
**virtual_network_rules** | [**List[CreateVirtualNetworkRuleWithAccountParameters]**](CreateVirtualNetworkRuleWithAccountParameters.md) | The list of virtual network rules associated with this Data Lake Store account. | [optional] 

## Example

```python
from openapi_client.models.create_data_lake_store_account_properties import CreateDataLakeStoreAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDataLakeStoreAccountProperties from a JSON string
create_data_lake_store_account_properties_instance = CreateDataLakeStoreAccountProperties.from_json(json)
# print the JSON string representation of the object
print(CreateDataLakeStoreAccountProperties.to_json())

# convert the object into a dict
create_data_lake_store_account_properties_dict = create_data_lake_store_account_properties_instance.to_dict()
# create an instance of CreateDataLakeStoreAccountProperties from a dict
create_data_lake_store_account_properties_from_dict = CreateDataLakeStoreAccountProperties.from_dict(create_data_lake_store_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


