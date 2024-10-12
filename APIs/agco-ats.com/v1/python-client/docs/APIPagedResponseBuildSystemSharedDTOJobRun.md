# APIPagedResponseBuildSystemSharedDTOJobRun

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[BuildSystemSharedDTOJobRun]**](BuildSystemSharedDTOJobRun.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_build_system_shared_dto_job_run import APIPagedResponseBuildSystemSharedDTOJobRun

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseBuildSystemSharedDTOJobRun from a JSON string
api_paged_response_build_system_shared_dto_job_run_instance = APIPagedResponseBuildSystemSharedDTOJobRun.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseBuildSystemSharedDTOJobRun.to_json())

# convert the object into a dict
api_paged_response_build_system_shared_dto_job_run_dict = api_paged_response_build_system_shared_dto_job_run_instance.to_dict()
# create an instance of APIPagedResponseBuildSystemSharedDTOJobRun from a dict
api_paged_response_build_system_shared_dto_job_run_from_dict = APIPagedResponseBuildSystemSharedDTOJobRun.from_dict(api_paged_response_build_system_shared_dto_job_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


