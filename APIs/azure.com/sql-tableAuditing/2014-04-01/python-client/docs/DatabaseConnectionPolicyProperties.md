# DatabaseConnectionPolicyProperties

Properties of a database connection policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proxy_dns_name** | **str** | The fully qualified host name of the auditing proxy. | [optional] 
**proxy_port** | **str** | The port number of the auditing proxy. | [optional] 
**redirection_state** | **str** | The state of proxy redirection. | [optional] 
**security_enabled_access** | **str** | The state of security access. | [optional] 
**state** | **str** | The connection policy state. | [optional] 
**use_server_default** | **str** | Whether server default is enabled or disabled. | [optional] 
**visibility** | **str** | The visibility of the auditing proxy. | [optional] 

## Example

```python
from openapi_client.models.database_connection_policy_properties import DatabaseConnectionPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseConnectionPolicyProperties from a JSON string
database_connection_policy_properties_instance = DatabaseConnectionPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(DatabaseConnectionPolicyProperties.to_json())

# convert the object into a dict
database_connection_policy_properties_dict = database_connection_policy_properties_instance.to_dict()
# create an instance of DatabaseConnectionPolicyProperties from a dict
database_connection_policy_properties_from_dict = DatabaseConnectionPolicyProperties.from_dict(database_connection_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


