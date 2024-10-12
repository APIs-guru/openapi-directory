# MySqlReplicaConfiguration

Read-replica configuration specific to MySQL databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | **str** | PEM representation of the trusted CA&#39;s x509 certificate. | [optional] 
**client_certificate** | **str** | PEM representation of the replica&#39;s x509 certificate. | [optional] 
**client_key** | **str** | PEM representation of the replica&#39;s private key. The corresponsing public key is encoded in the client&#39;s certificate. | [optional] 
**connect_retry_interval** | **int** | Seconds to wait between connect retries. MySQL&#39;s default is 60 seconds. | [optional] 
**dump_file_path** | **str** | Path to a SQL dump file in Google Cloud Storage from which the replica instance is to be created. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported. Dumps have the binlog co-ordinates from which replication begins. This can be accomplished by setting --master-data to 1 when using mysqldump. | [optional] 
**kind** | **str** | This is always &#x60;sql#mysqlReplicaConfiguration&#x60;. | [optional] 
**master_heartbeat_period** | **str** | Interval in milliseconds between replication heartbeats. | [optional] 
**password** | **str** | The password for the replication connection. | [optional] 
**ssl_cipher** | **str** | A list of permissible ciphers to use for SSL encryption. | [optional] 
**username** | **str** | The username for the replication connection. | [optional] 
**verify_server_certificate** | **bool** | Whether or not to check the primary instance&#39;s Common Name value in the certificate that it sends during the SSL handshake. | [optional] 

## Example

```python
from openapi_client.models.my_sql_replica_configuration import MySqlReplicaConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of MySqlReplicaConfiguration from a JSON string
my_sql_replica_configuration_instance = MySqlReplicaConfiguration.from_json(json)
# print the JSON string representation of the object
print(MySqlReplicaConfiguration.to_json())

# convert the object into a dict
my_sql_replica_configuration_dict = my_sql_replica_configuration_instance.to_dict()
# create an instance of MySqlReplicaConfiguration from a dict
my_sql_replica_configuration_from_dict = MySqlReplicaConfiguration.from_dict(my_sql_replica_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


