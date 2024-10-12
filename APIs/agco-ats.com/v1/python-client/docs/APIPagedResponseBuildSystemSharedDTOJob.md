# APIPagedResponseBuildSystemSharedDTOJob

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[BuildSystemSharedDTOJob]**](BuildSystemSharedDTOJob.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_build_system_shared_dto_job import APIPagedResponseBuildSystemSharedDTOJob

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseBuildSystemSharedDTOJob from a JSON string
api_paged_response_build_system_shared_dto_job_instance = APIPagedResponseBuildSystemSharedDTOJob.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseBuildSystemSharedDTOJob.to_json())

# convert the object into a dict
api_paged_response_build_system_shared_dto_job_dict = api_paged_response_build_system_shared_dto_job_instance.to_dict()
# create an instance of APIPagedResponseBuildSystemSharedDTOJob from a dict
api_paged_response_build_system_shared_dto_job_from_dict = APIPagedResponseBuildSystemSharedDTOJob.from_dict(api_paged_response_build_system_shared_dto_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


