# ApigatewayApiConfigOpenApiDocument

An OpenAPI Specification Document describing an API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**ApigatewayApiConfigFile**](ApigatewayApiConfigFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.apigateway_api_config_open_api_document import ApigatewayApiConfigOpenApiDocument

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayApiConfigOpenApiDocument from a JSON string
apigateway_api_config_open_api_document_instance = ApigatewayApiConfigOpenApiDocument.from_json(json)
# print the JSON string representation of the object
print(ApigatewayApiConfigOpenApiDocument.to_json())

# convert the object into a dict
apigateway_api_config_open_api_document_dict = apigateway_api_config_open_api_document_instance.to_dict()
# create an instance of ApigatewayApiConfigOpenApiDocument from a dict
apigateway_api_config_open_api_document_from_dict = ApigatewayApiConfigOpenApiDocument.from_dict(apigateway_api_config_open_api_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


