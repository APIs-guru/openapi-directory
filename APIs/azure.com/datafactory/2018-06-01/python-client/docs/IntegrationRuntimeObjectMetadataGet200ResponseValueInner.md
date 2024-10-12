# IntegrationRuntimeObjectMetadataGet200ResponseValueInner

SSIS object metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Metadata description. | [optional] 
**id** | **int** | Metadata id. | [optional] 
**name** | **str** | Metadata name. | [optional] 
**type** | **str** | The type of SSIS object metadata. | 

## Example

```python
from openapi_client.models.integration_runtime_object_metadata_get200_response_value_inner import IntegrationRuntimeObjectMetadataGet200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimeObjectMetadataGet200ResponseValueInner from a JSON string
integration_runtime_object_metadata_get200_response_value_inner_instance = IntegrationRuntimeObjectMetadataGet200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimeObjectMetadataGet200ResponseValueInner.to_json())

# convert the object into a dict
integration_runtime_object_metadata_get200_response_value_inner_dict = integration_runtime_object_metadata_get200_response_value_inner_instance.to_dict()
# create an instance of IntegrationRuntimeObjectMetadataGet200ResponseValueInner from a dict
integration_runtime_object_metadata_get200_response_value_inner_from_dict = IntegrationRuntimeObjectMetadataGet200ResponseValueInner.from_dict(integration_runtime_object_metadata_get200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


