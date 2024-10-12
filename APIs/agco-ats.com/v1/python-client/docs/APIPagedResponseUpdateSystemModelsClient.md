# APIPagedResponseUpdateSystemModelsClient

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[UpdateSystemModelsClient]**](UpdateSystemModelsClient.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_update_system_models_client import APIPagedResponseUpdateSystemModelsClient

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseUpdateSystemModelsClient from a JSON string
api_paged_response_update_system_models_client_instance = APIPagedResponseUpdateSystemModelsClient.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseUpdateSystemModelsClient.to_json())

# convert the object into a dict
api_paged_response_update_system_models_client_dict = api_paged_response_update_system_models_client_instance.to_dict()
# create an instance of APIPagedResponseUpdateSystemModelsClient from a dict
api_paged_response_update_system_models_client_from_dict = APIPagedResponseUpdateSystemModelsClient.from_dict(api_paged_response_update_system_models_client_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


