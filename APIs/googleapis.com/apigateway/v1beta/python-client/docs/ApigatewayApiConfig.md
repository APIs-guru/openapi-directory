# ApigatewayApiConfig

An API Configuration is a combination of settings for both the Managed Service and Gateways serving this API Config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**display_name** | **str** | Optional. Display name. | [optional] 
**gateway_config** | [**ApigatewayGatewayConfig**](ApigatewayGatewayConfig.md) |  | [optional] 
**gateway_service_account** | **str** | Immutable. The Google Cloud IAM Service Account that Gateways serving this config should use to authenticate to other services. This may either be the Service Account&#39;s email (&#x60;{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com&#x60;) or its full resource name (&#x60;projects/{PROJECT}/accounts/{UNIQUE_ID}&#x60;). This is most often used when the service is a GCP resource such as a Cloud Run Service or an IAP-secured service. | [optional] 
**grpc_services** | [**List[ApigatewayApiConfigGrpcServiceDefinition]**](ApigatewayApiConfigGrpcServiceDefinition.md) | Optional. gRPC service definition files. If specified, openapi_documents must not be included. | [optional] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources | [optional] 
**managed_service_configs** | [**List[ApigatewayApiConfigFile]**](ApigatewayApiConfigFile.md) | Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file contents. If multiple files are specified, the files are merged with the following rules: * All singular scalar fields are merged using \&quot;last one wins\&quot; semantics in the order of the files uploaded. * Repeated fields are concatenated. * Singular embedded messages are merged using these rules for nested fields. | [optional] 
**name** | **str** | Output only. Resource name of the API Config. Format: projects/{project}/locations/global/apis/{api}/configs/{api_config} | [optional] [readonly] 
**openapi_documents** | [**List[ApigatewayApiConfigOpenApiDocument]**](ApigatewayApiConfigOpenApiDocument.md) | Optional. OpenAPI specification documents. If specified, grpc_services and managed_service_configs must not be included. | [optional] 
**service_config_id** | **str** | Output only. The ID of the associated Service Config ( https://cloud.google.com/service-infrastructure/docs/glossary#config). | [optional] [readonly] 
**state** | **str** | Output only. State of the API Config. | [optional] [readonly] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.apigateway_api_config import ApigatewayApiConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayApiConfig from a JSON string
apigateway_api_config_instance = ApigatewayApiConfig.from_json(json)
# print the JSON string representation of the object
print(ApigatewayApiConfig.to_json())

# convert the object into a dict
apigateway_api_config_dict = apigateway_api_config_instance.to_dict()
# create an instance of ApigatewayApiConfig from a dict
apigateway_api_config_from_dict = ApigatewayApiConfig.from_dict(apigateway_api_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


