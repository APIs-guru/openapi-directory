# ConnectionProfile

A set of reusable connection configurations to be used as a source or destination for a stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_profile** | **object** | BigQuery warehouse profile. | [optional] 
**create_time** | **str** | Output only. The create time of the resource. | [optional] [readonly] 
**display_name** | **str** | Required. Display name. | [optional] 
**forward_ssh_connectivity** | [**ForwardSshTunnelConnectivity**](ForwardSshTunnelConnectivity.md) |  | [optional] 
**gcs_profile** | [**GcsProfile**](GcsProfile.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels. | [optional] 
**mysql_profile** | [**MysqlProfile**](MysqlProfile.md) |  | [optional] 
**name** | **str** | Output only. The resource&#39;s name. | [optional] [readonly] 
**oracle_profile** | [**OracleProfile**](OracleProfile.md) |  | [optional] 
**postgresql_profile** | [**PostgresqlProfile**](PostgresqlProfile.md) |  | [optional] 
**private_connectivity** | [**PrivateConnectivity**](PrivateConnectivity.md) |  | [optional] 
**sql_server_profile** | [**SqlServerProfile**](SqlServerProfile.md) |  | [optional] 
**static_service_ip_connectivity** | **object** | Static IP address connectivity. Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile. | [optional] 
**update_time** | **str** | Output only. The update time of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_profile import ConnectionProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionProfile from a JSON string
connection_profile_instance = ConnectionProfile.from_json(json)
# print the JSON string representation of the object
print(ConnectionProfile.to_json())

# convert the object into a dict
connection_profile_dict = connection_profile_instance.to_dict()
# create an instance of ConnectionProfile from a dict
connection_profile_from_dict = ConnectionProfile.from_dict(connection_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


