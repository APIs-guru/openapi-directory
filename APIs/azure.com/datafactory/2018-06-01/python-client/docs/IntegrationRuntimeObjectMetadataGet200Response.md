# IntegrationRuntimeObjectMetadataGet200Response

A list of SSIS object metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[IntegrationRuntimeObjectMetadataGet200ResponseValueInner]**](IntegrationRuntimeObjectMetadataGet200ResponseValueInner.md) | List of SSIS object metadata. | [optional] 

## Example

```python
from openapi_client.models.integration_runtime_object_metadata_get200_response import IntegrationRuntimeObjectMetadataGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimeObjectMetadataGet200Response from a JSON string
integration_runtime_object_metadata_get200_response_instance = IntegrationRuntimeObjectMetadataGet200Response.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimeObjectMetadataGet200Response.to_json())

# convert the object into a dict
integration_runtime_object_metadata_get200_response_dict = integration_runtime_object_metadata_get200_response_instance.to_dict()
# create an instance of IntegrationRuntimeObjectMetadataGet200Response from a dict
integration_runtime_object_metadata_get200_response_from_dict = IntegrationRuntimeObjectMetadataGet200Response.from_dict(integration_runtime_object_metadata_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


