# APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[UpdateSystemModelsUpdateGroupClientRelationship]**](UpdateSystemModelsUpdateGroupClientRelationship.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_update_system_models_update_group_client_relationship import APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship from a JSON string
api_paged_response_update_system_models_update_group_client_relationship_instance = APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship.to_json())

# convert the object into a dict
api_paged_response_update_system_models_update_group_client_relationship_dict = api_paged_response_update_system_models_update_group_client_relationship_instance.to_dict()
# create an instance of APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship from a dict
api_paged_response_update_system_models_update_group_client_relationship_from_dict = APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship.from_dict(api_paged_response_update_system_models_update_group_client_relationship_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


