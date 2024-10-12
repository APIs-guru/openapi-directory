# BuildSystemSharedDTOJob

A DTO for an IJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activities** | [**List[BuildSystemSharedDTOJobActivity]**](BuildSystemSharedDTOJobActivity.md) | The activities which are performed for the job | [optional] [readonly] 
**deleted** | **bool** | Indicates if the job has been deleted. | [optional] 
**job_id** | **int** | The ID of the job | [optional] 
**name** | **str** | The name of the job | [optional] 
**parameters** | [**List[BuildSystemSharedDTOParameter]**](BuildSystemSharedDTOParameter.md) | The parameters for the job | [optional] [readonly] 

## Example

```python
from openapi_client.models.build_system_shared_dto_job import BuildSystemSharedDTOJob

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOJob from a JSON string
build_system_shared_dto_job_instance = BuildSystemSharedDTOJob.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOJob.to_json())

# convert the object into a dict
build_system_shared_dto_job_dict = build_system_shared_dto_job_instance.to_dict()
# create an instance of BuildSystemSharedDTOJob from a dict
build_system_shared_dto_job_from_dict = BuildSystemSharedDTOJob.from_dict(build_system_shared_dto_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


