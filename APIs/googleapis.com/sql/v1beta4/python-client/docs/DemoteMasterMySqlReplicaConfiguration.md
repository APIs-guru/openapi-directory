# DemoteMasterMySqlReplicaConfiguration

Read-replica configuration specific to MySQL databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | **str** | PEM representation of the trusted CA&#39;s x509 certificate. | [optional] 
**client_certificate** | **str** | PEM representation of the replica&#39;s x509 certificate. | [optional] 
**client_key** | **str** | PEM representation of the replica&#39;s private key. The corresponsing public key is encoded in the client&#39;s certificate. The format of the replica&#39;s private key can be either PKCS #1 or PKCS #8. | [optional] 
**kind** | **str** | This is always &#x60;sql#demoteMasterMysqlReplicaConfiguration&#x60;. | [optional] 
**password** | **str** | The password for the replication connection. | [optional] 
**username** | **str** | The username for the replication connection. | [optional] 

## Example

```python
from openapi_client.models.demote_master_my_sql_replica_configuration import DemoteMasterMySqlReplicaConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DemoteMasterMySqlReplicaConfiguration from a JSON string
demote_master_my_sql_replica_configuration_instance = DemoteMasterMySqlReplicaConfiguration.from_json(json)
# print the JSON string representation of the object
print(DemoteMasterMySqlReplicaConfiguration.to_json())

# convert the object into a dict
demote_master_my_sql_replica_configuration_dict = demote_master_my_sql_replica_configuration_instance.to_dict()
# create an instance of DemoteMasterMySqlReplicaConfiguration from a dict
demote_master_my_sql_replica_configuration_from_dict = DemoteMasterMySqlReplicaConfiguration.from_dict(demote_master_my_sql_replica_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


