# APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[GlobalResourcesSharedModelsTranslationRequest]**](GlobalResourcesSharedModelsTranslationRequest.md) |  | [optional] [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.apii_paged_response_global_resources_shared_models_translation_request import APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest from a JSON string
apii_paged_response_global_resources_shared_models_translation_request_instance = APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest.from_json(json)
# print the JSON string representation of the object
print(APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest.to_json())

# convert the object into a dict
apii_paged_response_global_resources_shared_models_translation_request_dict = apii_paged_response_global_resources_shared_models_translation_request_instance.to_dict()
# create an instance of APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest from a dict
apii_paged_response_global_resources_shared_models_translation_request_from_dict = APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest.from_dict(apii_paged_response_global_resources_shared_models_translation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


