# EnterpriseCrmEventbusProtoConnectorsConnection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_name** | **str** | Connection name Format: projects/{project}/locations/{location}/connections/{connection} | [optional] 
**connector_version** | **str** | Connector version Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version} | [optional] 
**service_name** | **str** | Service name Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service} | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_connectors_connection import EnterpriseCrmEventbusProtoConnectorsConnection

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoConnectorsConnection from a JSON string
enterprise_crm_eventbus_proto_connectors_connection_instance = EnterpriseCrmEventbusProtoConnectorsConnection.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoConnectorsConnection.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_connectors_connection_dict = enterprise_crm_eventbus_proto_connectors_connection_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoConnectorsConnection from a dict
enterprise_crm_eventbus_proto_connectors_connection_from_dict = EnterpriseCrmEventbusProtoConnectorsConnection.from_dict(enterprise_crm_eventbus_proto_connectors_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


