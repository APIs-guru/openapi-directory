# PostgreSqlConnectionProfile

Specifies connection parameters required specifically for PostgreSQL databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alloydb_cluster_id** | **str** | Optional. If the destination is an AlloyDB database, use this field to provide the AlloyDB cluster ID. | [optional] 
**cloud_sql_id** | **str** | If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. | [optional] 
**host** | **str** | Required. The IP or hostname of the source PostgreSQL database. | [optional] 
**network_architecture** | **str** | Output only. If the source is a Cloud SQL database, this field indicates the network architecture it&#39;s associated with. | [optional] [readonly] 
**password** | **str** | Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. | [optional] 
**password_set** | **bool** | Output only. Indicates If this connection profile password is stored. | [optional] [readonly] 
**port** | **int** | Required. The network port of the source PostgreSQL database. | [optional] 
**private_service_connect_connectivity** | [**PrivateServiceConnectConnectivity**](PrivateServiceConnectConnectivity.md) |  | [optional] 
**ssl** | [**SslConfig**](SslConfig.md) |  | [optional] 
**static_ip_connectivity** | **object** | The source database will allow incoming connections from the public IP of the destination database. You can retrieve the public IP of the Cloud SQL instance from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required. | [optional] 
**username** | **str** | Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. | [optional] 

## Example

```python
from openapi_client.models.postgre_sql_connection_profile import PostgreSqlConnectionProfile

# TODO update the JSON string below
json = "{}"
# create an instance of PostgreSqlConnectionProfile from a JSON string
postgre_sql_connection_profile_instance = PostgreSqlConnectionProfile.from_json(json)
# print the JSON string representation of the object
print(PostgreSqlConnectionProfile.to_json())

# convert the object into a dict
postgre_sql_connection_profile_dict = postgre_sql_connection_profile_instance.to_dict()
# create an instance of PostgreSqlConnectionProfile from a dict
postgre_sql_connection_profile_from_dict = PostgreSqlConnectionProfile.from_dict(postgre_sql_connection_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


