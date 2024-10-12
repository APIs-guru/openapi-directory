# APIPagedResponseAPIModelsUserEffectivePermission

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[APIModelsUserEffectivePermission]**](APIModelsUserEffectivePermission.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_api_models_user_effective_permission import APIPagedResponseAPIModelsUserEffectivePermission

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseAPIModelsUserEffectivePermission from a JSON string
api_paged_response_api_models_user_effective_permission_instance = APIPagedResponseAPIModelsUserEffectivePermission.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseAPIModelsUserEffectivePermission.to_json())

# convert the object into a dict
api_paged_response_api_models_user_effective_permission_dict = api_paged_response_api_models_user_effective_permission_instance.to_dict()
# create an instance of APIPagedResponseAPIModelsUserEffectivePermission from a dict
api_paged_response_api_models_user_effective_permission_from_dict = APIPagedResponseAPIModelsUserEffectivePermission.from_dict(api_paged_response_api_models_user_effective_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


