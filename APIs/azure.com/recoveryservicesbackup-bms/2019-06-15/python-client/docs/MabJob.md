# MabJob

MAB workload-specific job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions_info** | **List[str]** | The state/actions applicable on jobs like cancel/retry. | [optional] 
**duration** | **str** | Time taken by job to run. | [optional] 
**error_details** | [**List[MabErrorInfo]**](MabErrorInfo.md) | The errors. | [optional] 
**extended_info** | [**MabJobExtendedInfo**](MabJobExtendedInfo.md) |  | [optional] 
**mab_server_name** | **str** | Name of server protecting the DS. | [optional] 
**mab_server_type** | **str** | Server type of MAB container. | [optional] 
**workload_type** | **str** | Workload type of backup item. | [optional] 

## Example

```python
from openapi_client.models.mab_job import MabJob

# TODO update the JSON string below
json = "{}"
# create an instance of MabJob from a JSON string
mab_job_instance = MabJob.from_json(json)
# print the JSON string representation of the object
print(MabJob.to_json())

# convert the object into a dict
mab_job_dict = mab_job_instance.to_dict()
# create an instance of MabJob from a dict
mab_job_from_dict = MabJob.from_dict(mab_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


