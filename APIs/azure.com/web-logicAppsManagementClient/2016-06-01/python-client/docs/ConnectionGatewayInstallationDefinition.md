# ConnectionGatewayInstallationDefinition

The gateway installation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**etag** | **str** | Resource ETag | [optional] 
**id** | **str** | Resource id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_gateway_installation_definition import ConnectionGatewayInstallationDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionGatewayInstallationDefinition from a JSON string
connection_gateway_installation_definition_instance = ConnectionGatewayInstallationDefinition.from_json(json)
# print the JSON string representation of the object
print(ConnectionGatewayInstallationDefinition.to_json())

# convert the object into a dict
connection_gateway_installation_definition_dict = connection_gateway_installation_definition_instance.to_dict()
# create an instance of ConnectionGatewayInstallationDefinition from a dict
connection_gateway_installation_definition_from_dict = ConnectionGatewayInstallationDefinition.from_dict(connection_gateway_installation_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


