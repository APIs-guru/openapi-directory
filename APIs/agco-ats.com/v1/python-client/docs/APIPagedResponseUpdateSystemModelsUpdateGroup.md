# APIPagedResponseUpdateSystemModelsUpdateGroup

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[UpdateSystemModelsUpdateGroup]**](UpdateSystemModelsUpdateGroup.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_update_system_models_update_group import APIPagedResponseUpdateSystemModelsUpdateGroup

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseUpdateSystemModelsUpdateGroup from a JSON string
api_paged_response_update_system_models_update_group_instance = APIPagedResponseUpdateSystemModelsUpdateGroup.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseUpdateSystemModelsUpdateGroup.to_json())

# convert the object into a dict
api_paged_response_update_system_models_update_group_dict = api_paged_response_update_system_models_update_group_instance.to_dict()
# create an instance of APIPagedResponseUpdateSystemModelsUpdateGroup from a dict
api_paged_response_update_system_models_update_group_from_dict = APIPagedResponseUpdateSystemModelsUpdateGroup.from_dict(api_paged_response_update_system_models_update_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


