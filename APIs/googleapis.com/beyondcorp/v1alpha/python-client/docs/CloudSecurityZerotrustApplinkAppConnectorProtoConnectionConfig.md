# CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig

ConnectionConfig represents a Connection Configuration object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_endpoint** | **str** | application_endpoint is the endpoint of the application the form of host:port. For example, \&quot;localhost:80\&quot;. | [optional] 
**application_name** | **str** | application_name represents the given name of the application the connection is connecting with. | [optional] 
**gateway** | [**List[CloudSecurityZerotrustApplinkAppConnectorProtoGateway]**](CloudSecurityZerotrustApplinkAppConnectorProtoGateway.md) | gateway lists all instances running a gateway in GCP. They all connect to a connector on the host. | [optional] 
**name** | **str** | name is the unique ID for each connection. TODO(b/190732451) returns connection name from user-specified name in config. Now, name &#x3D; ${application_name}:${application_endpoint} | [optional] 
**project** | **str** | project represents the consumer project the connection belongs to. | [optional] 
**tunnels_per_gateway** | **int** | tunnels_per_gateway reflects the number of tunnels between a connector and a gateway. | [optional] 
**user_port** | **int** | user_port specifies the reserved port on gateways for user connections. | [optional] 

## Example

```python
from openapi_client.models.cloud_security_zerotrust_applink_app_connector_proto_connection_config import CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig from a JSON string
cloud_security_zerotrust_applink_app_connector_proto_connection_config_instance = CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig.from_json(json)
# print the JSON string representation of the object
print(CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig.to_json())

# convert the object into a dict
cloud_security_zerotrust_applink_app_connector_proto_connection_config_dict = cloud_security_zerotrust_applink_app_connector_proto_connection_config_instance.to_dict()
# create an instance of CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig from a dict
cloud_security_zerotrust_applink_app_connector_proto_connection_config_from_dict = CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig.from_dict(cloud_security_zerotrust_applink_app_connector_proto_connection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


