# ConnectionGatewayDefinitionCollection

A list of connection gateway definitions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ConnectionGatewayDefinition]**](ConnectionGatewayDefinition.md) | Collection of connection gateways | [optional] 

## Example

```python
from openapi_client.models.connection_gateway_definition_collection import ConnectionGatewayDefinitionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionGatewayDefinitionCollection from a JSON string
connection_gateway_definition_collection_instance = ConnectionGatewayDefinitionCollection.from_json(json)
# print the JSON string representation of the object
print(ConnectionGatewayDefinitionCollection.to_json())

# convert the object into a dict
connection_gateway_definition_collection_dict = connection_gateway_definition_collection_instance.to_dict()
# create an instance of ConnectionGatewayDefinitionCollection from a dict
connection_gateway_definition_collection_from_dict = ConnectionGatewayDefinitionCollection.from_dict(connection_gateway_definition_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


