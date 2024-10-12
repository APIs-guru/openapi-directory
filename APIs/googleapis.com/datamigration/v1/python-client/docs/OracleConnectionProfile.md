# OracleConnectionProfile

Specifies connection parameters required specifically for Oracle databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_service** | **str** | Required. Database service for the Oracle connection. | [optional] 
**forward_ssh_connectivity** | [**ForwardSshTunnelConnectivity**](ForwardSshTunnelConnectivity.md) |  | [optional] 
**host** | **str** | Required. The IP or hostname of the source Oracle database. | [optional] 
**password** | **str** | Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. | [optional] 
**password_set** | **bool** | Output only. Indicates whether a new password is included in the request. | [optional] [readonly] 
**port** | **int** | Required. The network port of the source Oracle database. | [optional] 
**private_connectivity** | [**PrivateConnectivity**](PrivateConnectivity.md) |  | [optional] 
**ssl** | [**SslConfig**](SslConfig.md) |  | [optional] 
**static_service_ip_connectivity** | **object** | Static IP address connectivity configured on service project. | [optional] 
**username** | **str** | Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. | [optional] 

## Example

```python
from openapi_client.models.oracle_connection_profile import OracleConnectionProfile

# TODO update the JSON string below
json = "{}"
# create an instance of OracleConnectionProfile from a JSON string
oracle_connection_profile_instance = OracleConnectionProfile.from_json(json)
# print the JSON string representation of the object
print(OracleConnectionProfile.to_json())

# convert the object into a dict
oracle_connection_profile_dict = oracle_connection_profile_instance.to_dict()
# create an instance of OracleConnectionProfile from a dict
oracle_connection_profile_from_dict = OracleConnectionProfile.from_dict(oracle_connection_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


