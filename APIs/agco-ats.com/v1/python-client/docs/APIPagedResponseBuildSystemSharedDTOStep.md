# APIPagedResponseBuildSystemSharedDTOStep

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[BuildSystemSharedDTOStep]**](BuildSystemSharedDTOStep.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_build_system_shared_dto_step import APIPagedResponseBuildSystemSharedDTOStep

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseBuildSystemSharedDTOStep from a JSON string
api_paged_response_build_system_shared_dto_step_instance = APIPagedResponseBuildSystemSharedDTOStep.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseBuildSystemSharedDTOStep.to_json())

# convert the object into a dict
api_paged_response_build_system_shared_dto_step_dict = api_paged_response_build_system_shared_dto_step_instance.to_dict()
# create an instance of APIPagedResponseBuildSystemSharedDTOStep from a dict
api_paged_response_build_system_shared_dto_step_from_dict = APIPagedResponseBuildSystemSharedDTOStep.from_dict(api_paged_response_build_system_shared_dto_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


