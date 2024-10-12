# ClientConnectionConfig

Client connection configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**require_connectors** | **bool** | Optional. Configuration to enforce connectors only (ex: AuthProxy) connections to the database. | [optional] 
**ssl_config** | [**SslConfig**](SslConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.client_connection_config import ClientConnectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ClientConnectionConfig from a JSON string
client_connection_config_instance = ClientConnectionConfig.from_json(json)
# print the JSON string representation of the object
print(ClientConnectionConfig.to_json())

# convert the object into a dict
client_connection_config_dict = client_connection_config_instance.to_dict()
# create an instance of ClientConnectionConfig from a dict
client_connection_config_from_dict = ClientConnectionConfig.from_dict(client_connection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


