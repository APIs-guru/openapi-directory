# ApiResourceMetadata

The api resource metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_type** | [**ApiType**](ApiType.md) |  | [optional] 
**brand_color** | **str** | The brand color. | [optional] 
**connection_type** | **str** | The connection type. | [optional] 
**deployment_parameters** | [**ApiDeploymentParameterMetadataSet**](ApiDeploymentParameterMetadataSet.md) |  | [optional] 
**hide_key** | **str** | The hide key. | [optional] 
**provisioning_state** | [**WorkflowProvisioningState**](WorkflowProvisioningState.md) |  | [optional] 
**source** | **str** | The source. | [optional] 
**tags** | **Dict[str, str]** | The tags. | [optional] 
**wsdl_import_method** | [**WsdlImportMethod**](WsdlImportMethod.md) |  | [optional] 
**wsdl_service** | [**WsdlService**](WsdlService.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_resource_metadata import ApiResourceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResourceMetadata from a JSON string
api_resource_metadata_instance = ApiResourceMetadata.from_json(json)
# print the JSON string representation of the object
print(ApiResourceMetadata.to_json())

# convert the object into a dict
api_resource_metadata_dict = api_resource_metadata_instance.to_dict()
# create an instance of ApiResourceMetadata from a dict
api_resource_metadata_from_dict = ApiResourceMetadata.from_dict(api_resource_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


