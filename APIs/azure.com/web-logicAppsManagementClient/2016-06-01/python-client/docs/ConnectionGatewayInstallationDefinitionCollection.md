# ConnectionGatewayInstallationDefinitionCollection

A list of connection gateway installation definitions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ConnectionGatewayInstallationDefinition]**](ConnectionGatewayInstallationDefinition.md) | Collection of connection gateway installations | [optional] 

## Example

```python
from openapi_client.models.connection_gateway_installation_definition_collection import ConnectionGatewayInstallationDefinitionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionGatewayInstallationDefinitionCollection from a JSON string
connection_gateway_installation_definition_collection_instance = ConnectionGatewayInstallationDefinitionCollection.from_json(json)
# print the JSON string representation of the object
print(ConnectionGatewayInstallationDefinitionCollection.to_json())

# convert the object into a dict
connection_gateway_installation_definition_collection_dict = connection_gateway_installation_definition_collection_instance.to_dict()
# create an instance of ConnectionGatewayInstallationDefinitionCollection from a dict
connection_gateway_installation_definition_collection_from_dict = ConnectionGatewayInstallationDefinitionCollection.from_dict(connection_gateway_installation_definition_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


