# APIPagedResponseAPIModelsUser

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[APIModelsUser]**](APIModelsUser.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_api_models_user import APIPagedResponseAPIModelsUser

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseAPIModelsUser from a JSON string
api_paged_response_api_models_user_instance = APIPagedResponseAPIModelsUser.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseAPIModelsUser.to_json())

# convert the object into a dict
api_paged_response_api_models_user_dict = api_paged_response_api_models_user_instance.to_dict()
# create an instance of APIPagedResponseAPIModelsUser from a dict
api_paged_response_api_models_user_from_dict = APIPagedResponseAPIModelsUser.from_dict(api_paged_response_api_models_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


