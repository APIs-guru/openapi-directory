# APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[UpdateSystemModelsClientStatus]**](UpdateSystemModelsClientStatus.md) |  | [readonly] 
**metadata** | [**UpdateSystemModelsPagedClientStatusMetadata**](UpdateSystemModelsPagedClientStatusMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_update_system_models_client_status_update_system_models_paged_client_status_metadata import APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata from a JSON string
api_paged_response_update_system_models_client_status_update_system_models_paged_client_status_metadata_instance = APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata.to_json())

# convert the object into a dict
api_paged_response_update_system_models_client_status_update_system_models_paged_client_status_metadata_dict = api_paged_response_update_system_models_client_status_update_system_models_paged_client_status_metadata_instance.to_dict()
# create an instance of APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata from a dict
api_paged_response_update_system_models_client_status_update_system_models_paged_client_status_metadata_from_dict = APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata.from_dict(api_paged_response_update_system_models_client_status_update_system_models_paged_client_status_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


