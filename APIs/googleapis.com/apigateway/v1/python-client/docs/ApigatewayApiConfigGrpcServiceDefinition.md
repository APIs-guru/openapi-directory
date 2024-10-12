# ApigatewayApiConfigGrpcServiceDefinition

A gRPC service definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_descriptor_set** | [**ApigatewayApiConfigFile**](ApigatewayApiConfigFile.md) |  | [optional] 
**source** | [**List[ApigatewayApiConfigFile]**](ApigatewayApiConfigFile.md) | Optional. Uncompiled proto files associated with the descriptor set, used for display purposes (server-side compilation is not supported). These should match the inputs to &#39;protoc&#39; command used to generate file_descriptor_set. | [optional] 

## Example

```python
from openapi_client.models.apigateway_api_config_grpc_service_definition import ApigatewayApiConfigGrpcServiceDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayApiConfigGrpcServiceDefinition from a JSON string
apigateway_api_config_grpc_service_definition_instance = ApigatewayApiConfigGrpcServiceDefinition.from_json(json)
# print the JSON string representation of the object
print(ApigatewayApiConfigGrpcServiceDefinition.to_json())

# convert the object into a dict
apigateway_api_config_grpc_service_definition_dict = apigateway_api_config_grpc_service_definition_instance.to_dict()
# create an instance of ApigatewayApiConfigGrpcServiceDefinition from a dict
apigateway_api_config_grpc_service_definition_from_dict = ApigatewayApiConfigGrpcServiceDefinition.from_dict(apigateway_api_config_grpc_service_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


