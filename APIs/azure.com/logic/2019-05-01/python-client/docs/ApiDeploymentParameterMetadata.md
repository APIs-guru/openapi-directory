# ApiDeploymentParameterMetadata

The API deployment parameter metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description. | [optional] 
**display_name** | **str** | The display name. | [optional] 
**is_required** | **bool** | Indicates whether its required. | [optional] 
**type** | **str** | The type. | [optional] 
**visibility** | [**ApiDeploymentParameterVisibility**](ApiDeploymentParameterVisibility.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_deployment_parameter_metadata import ApiDeploymentParameterMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDeploymentParameterMetadata from a JSON string
api_deployment_parameter_metadata_instance = ApiDeploymentParameterMetadata.from_json(json)
# print the JSON string representation of the object
print(ApiDeploymentParameterMetadata.to_json())

# convert the object into a dict
api_deployment_parameter_metadata_dict = api_deployment_parameter_metadata_instance.to_dict()
# create an instance of ApiDeploymentParameterMetadata from a dict
api_deployment_parameter_metadata_from_dict = ApiDeploymentParameterMetadata.from_dict(api_deployment_parameter_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


