# JobProperties

properties for the job

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_point_in_time** | **datetime** | The time of the backup used for the failover. | [optional] 
**device_id** | **str** | The device id in which the job is currently running | [optional] 
**download_progress** | [**UpdateDownloadProgress**](UpdateDownloadProgress.md) |  | [optional] 
**entity_id** | **str** | The entity identifier for which the job ran. | [optional] 
**entity_type** | **str** | The entity type for which the job ran. | [optional] 
**install_progress** | [**UpdateInstallProgress**](UpdateInstallProgress.md) |  | [optional] 
**is_cancellable** | **bool** | Represents whether the job is cancellable or not | [optional] 
**job_stages** | [**List[JobStage]**](JobStage.md) | The job stages. | [optional] 
**job_type** | **str** | Type of the job | 
**source_device_id** | **str** | The source device identifier of the failover job. | [optional] 
**stats** | [**JobStats**](JobStats.md) |  | [optional] 
**target_id** | **str** | Id of the object that is created by the job | [optional] 
**target_type** | **str** | The target type of the backup. | [optional] 

## Example

```python
from openapi_client.models.job_properties import JobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobProperties from a JSON string
job_properties_instance = JobProperties.from_json(json)
# print the JSON string representation of the object
print(JobProperties.to_json())

# convert the object into a dict
job_properties_dict = job_properties_instance.to_dict()
# create an instance of JobProperties from a dict
job_properties_from_dict = JobProperties.from_dict(job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


