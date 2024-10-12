# APIPagedResponseBuildSystemSharedDTOAgent

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[BuildSystemSharedDTOAgent]**](BuildSystemSharedDTOAgent.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_build_system_shared_dto_agent import APIPagedResponseBuildSystemSharedDTOAgent

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseBuildSystemSharedDTOAgent from a JSON string
api_paged_response_build_system_shared_dto_agent_instance = APIPagedResponseBuildSystemSharedDTOAgent.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseBuildSystemSharedDTOAgent.to_json())

# convert the object into a dict
api_paged_response_build_system_shared_dto_agent_dict = api_paged_response_build_system_shared_dto_agent_instance.to_dict()
# create an instance of APIPagedResponseBuildSystemSharedDTOAgent from a dict
api_paged_response_build_system_shared_dto_agent_from_dict = APIPagedResponseBuildSystemSharedDTOAgent.from_dict(api_paged_response_build_system_shared_dto_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


