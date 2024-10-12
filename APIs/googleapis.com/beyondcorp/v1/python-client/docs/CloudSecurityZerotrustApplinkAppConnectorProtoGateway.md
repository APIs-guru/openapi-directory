# CloudSecurityZerotrustApplinkAppConnectorProtoGateway

Gateway represents a GCE VM Instance endpoint for use by IAP TCP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interface** | **str** | interface specifies the network interface of the gateway to connect to. | [optional] 
**name** | **str** | name is the name of an instance running a gateway. It is the unique ID for a gateway. All gateways under the same connection have the same prefix. It is derived from the gateway URL. For example, name&#x3D;${instance} assuming a gateway URL. https://www.googleapis.com/compute/${version}/projects/${project}/zones/${zone}/instances/${instance} | [optional] 
**port** | **int** | port specifies the port of the gateway for tunnel connections from the connectors. | [optional] 
**project** | **str** | project is the tenant project the gateway belongs to. Different from the project in the connection, it is a BeyondCorpAPI internally created project to manage all the gateways. It is sharing the same network with the consumer project user owned. It is derived from the gateway URL. For example, project&#x3D;${project} assuming a gateway URL. https://www.googleapis.com/compute/${version}/projects/${project}/zones/${zone}/instances/${instance} | [optional] 
**self_link** | **str** | self_link is the gateway URL in the form https://www.googleapis.com/compute/${version}/projects/${project}/zones/${zone}/instances/${instance} | [optional] 
**zone** | **str** | zone represents the zone the instance belongs. It is derived from the gateway URL. For example, zone&#x3D;${zone} assuming a gateway URL. https://www.googleapis.com/compute/${version}/projects/${project}/zones/${zone}/instances/${instance} | [optional] 

## Example

```python
from openapi_client.models.cloud_security_zerotrust_applink_app_connector_proto_gateway import CloudSecurityZerotrustApplinkAppConnectorProtoGateway

# TODO update the JSON string below
json = "{}"
# create an instance of CloudSecurityZerotrustApplinkAppConnectorProtoGateway from a JSON string
cloud_security_zerotrust_applink_app_connector_proto_gateway_instance = CloudSecurityZerotrustApplinkAppConnectorProtoGateway.from_json(json)
# print the JSON string representation of the object
print(CloudSecurityZerotrustApplinkAppConnectorProtoGateway.to_json())

# convert the object into a dict
cloud_security_zerotrust_applink_app_connector_proto_gateway_dict = cloud_security_zerotrust_applink_app_connector_proto_gateway_instance.to_dict()
# create an instance of CloudSecurityZerotrustApplinkAppConnectorProtoGateway from a dict
cloud_security_zerotrust_applink_app_connector_proto_gateway_from_dict = CloudSecurityZerotrustApplinkAppConnectorProtoGateway.from_dict(cloud_security_zerotrust_applink_app_connector_proto_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


