# ApiDeploymentParameterMetadataSet

The API deployment parameters metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_content_link** | [**ApiDeploymentParameterMetadata**](ApiDeploymentParameterMetadata.md) |  | [optional] 
**redis_cache_connection_string** | [**ApiDeploymentParameterMetadata**](ApiDeploymentParameterMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_deployment_parameter_metadata_set import ApiDeploymentParameterMetadataSet

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDeploymentParameterMetadataSet from a JSON string
api_deployment_parameter_metadata_set_instance = ApiDeploymentParameterMetadataSet.from_json(json)
# print the JSON string representation of the object
print(ApiDeploymentParameterMetadataSet.to_json())

# convert the object into a dict
api_deployment_parameter_metadata_set_dict = api_deployment_parameter_metadata_set_instance.to_dict()
# create an instance of ApiDeploymentParameterMetadataSet from a dict
api_deployment_parameter_metadata_set_from_dict = ApiDeploymentParameterMetadataSet.from_dict(api_deployment_parameter_metadata_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


