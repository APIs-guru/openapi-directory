# APIPagedResponseAPIModelsRole

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[APIModelsRole]**](APIModelsRole.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_api_models_role import APIPagedResponseAPIModelsRole

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseAPIModelsRole from a JSON string
api_paged_response_api_models_role_instance = APIPagedResponseAPIModelsRole.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseAPIModelsRole.to_json())

# convert the object into a dict
api_paged_response_api_models_role_dict = api_paged_response_api_models_role_instance.to_dict()
# create an instance of APIPagedResponseAPIModelsRole from a dict
api_paged_response_api_models_role_from_dict = APIPagedResponseAPIModelsRole.from_dict(api_paged_response_api_models_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


