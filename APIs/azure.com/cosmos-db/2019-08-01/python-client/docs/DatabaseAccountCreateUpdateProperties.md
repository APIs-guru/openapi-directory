# DatabaseAccountCreateUpdateProperties

Properties to create and update Azure Cosmos DB database accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**List[Capability]**](Capability.md) | List of Cosmos DB capabilities for the account | [optional] 
**connector_offer** | [**ConnectorOffer**](ConnectorOffer.md) |  | [optional] 
**consistency_policy** | [**ConsistencyPolicy**](ConsistencyPolicy.md) |  | [optional] 
**database_account_offer_type** | [**DatabaseAccountOfferType**](DatabaseAccountOfferType.md) |  | 
**disable_key_based_metadata_write_access** | **bool** | Disable write operations on metadata resources (databases, containers, throughput) via account keys | [optional] 
**enable_automatic_failover** | **bool** | Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account. | [optional] 
**enable_cassandra_connector** | **bool** | Enables the cassandra connector on the Cosmos DB C* account | [optional] 
**enable_multiple_write_locations** | **bool** | Enables the account to write in multiple locations | [optional] 
**ip_range_filter** | **str** | Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces. | [optional] 
**is_virtual_network_filter_enabled** | **bool** | Flag to indicate whether to enable/disable Virtual Network ACL rules. | [optional] 
**locations** | [**List[Location]**](Location.md) | An array that contains the georeplication locations enabled for the Cosmos DB account. | 
**virtual_network_rules** | [**List[VirtualNetworkRule]**](VirtualNetworkRule.md) | List of Virtual Network ACL rules configured for the Cosmos DB account. | [optional] 

## Example

```python
from openapi_client.models.database_account_create_update_properties import DatabaseAccountCreateUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseAccountCreateUpdateProperties from a JSON string
database_account_create_update_properties_instance = DatabaseAccountCreateUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(DatabaseAccountCreateUpdateProperties.to_json())

# convert the object into a dict
database_account_create_update_properties_dict = database_account_create_update_properties_instance.to_dict()
# create an instance of DatabaseAccountCreateUpdateProperties from a dict
database_account_create_update_properties_from_dict = DatabaseAccountCreateUpdateProperties.from_dict(database_account_create_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


